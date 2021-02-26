import React from 'react';
import { useQuery } from 'react-query';

import API from '../api';
import client from '../client';

const UsersListPage = () => {
  const { data: users, isLoading } = useQuery(['users'], () => API(client).users());

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <h1>Users</h1>
      <ul>
        { users.map(({ name, id }) => <li key={id}>{name}</li>) }
      </ul>
    </>
  )
};

const prefetch = client => {
  return { keys: ['users'], query: () => API(client).users() };
};

export default {
  prefetch,
  component: UsersListPage,
};
