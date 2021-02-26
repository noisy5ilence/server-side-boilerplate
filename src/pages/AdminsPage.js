import React from 'react';
import { useQuery } from 'react-query';

import API from '../api';
import client from '../client';
import withAuth from '../HOCs/withAuth';

const AdminsPage = () => {
  const { data: admins, isLoading } = useQuery(['admins'], () => API(client).admins());

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <h1>Admins</h1>
      <ul>
        { admins.map(({ id, name }) => (<li key={id}>{name}</li>)) }
      </ul>
    </>
  )
};

const prefetch = client => {
  return { keys: ['admins'], query: () => API(client).admins() }
};

export default {
  prefetch,
  component: withAuth(AdminsPage)
}
