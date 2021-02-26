import path from 'path';
import fs from 'fs';
import serialize from 'serialize-javascript';
import axios from 'axios';

import React from 'react';

import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes, matchRoutes } from 'react-router-config';

import { QueryClient, QueryClientProvider } from 'react-query';
import { dehydrate, Hydrate } from 'react-query/hydration';

import routes from '../src/routes';


export default (request, response) => {
  const client = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: request.get('cookie') || '' }
  });

  client.interceptors.response.use(({ data }) => data);

  const queryClient = new QueryClient();
  const context = {};

  Promise.all(
    matchRoutes(routes, request.path)
      .filter(({ route: { prefetch } }) => prefetch)
      .map(({ route: { prefetch } }) => {
        const { keys, query } = prefetch(client);

        return queryClient.prefetchQuery(keys, query);
      })
  ).then(() => {
    const dehydratedState = dehydrate(queryClient);

    const content = renderToString(
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <StaticRouter location={request.path} context={context}>
            { renderRoutes(routes) }
          </StaticRouter>
        </Hydrate>
      </QueryClientProvider>
    );

    return fs.promises.readFile(path.resolve('./build/index.html'), 'utf8')
      .then(data => {
        data = data.replace(`<div id='root'></div>`, `<div id='root'>${content}</div>`);
        data = data.replace(`<script>window.__STATE__ = {}</script>`, `<script>window.__STATE__ = ${serialize(dehydratedState)}</script>`);

        return response.send(data);
      })
      .catch(error => { throw error; });
  })
};
