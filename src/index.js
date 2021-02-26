import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import routes from './routes';

const dehydratedState = window.__STATE__;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000
    }
  }
});

hydrate(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <BrowserRouter>
          { renderRoutes(routes) }
        </BrowserRouter>
      </Hydrate>
    </QueryClientProvider>,
  document.getElementById('root')
);
