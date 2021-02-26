import React from "react";
import { renderRoutes } from 'react-router-config';
import { useQuery } from 'react-query';

import API from './api';
import client from './client';
import Header from './components/Header';

const App = ({ route }) => {
  const { data: isAuth } = useQuery(['isAuth'], () => API(client).isAuth());
  return (
    <>
      <Header isAuth={isAuth} />
      <div>{ renderRoutes(route.routes) }</div>
    </>
  );
};

const prefetch = client => {
  return { keys: ['isAuth'], query: () => API(client).isAuth() }
};

export default {
  prefetch,
  component: App
};
