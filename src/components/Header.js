import React from 'react';
import { Link } from 'react-router-dom';

const paths = [
  { path: '/', title: 'Home' },
  { path: '/users', title: 'Users' },
  { path: '/admins', title: 'Admins', isAuth: true },
];

const actions = [
  { path: '/api/logout', title: 'Logout', isAuth: true },
  { path: '/api/auth/google', title: 'Login', isAuth: false },
];

export default ({ isAuth }) => {
  return (
    <header>
      <ul>
        { paths.map(({ title, path, ...rest }) => (!rest.isAuth || rest.isAuth === isAuth) && (
          <li key={path}>
            <Link to={path}>{ title }</Link>
          </li>
        )) }
      </ul>
      <ul>
        { actions.map(({ title, path, ...rest }) => rest.isAuth === isAuth && (
          <li key={path}>
            <a href={path}>{ title }</a>
          </li>
        )) }
      </ul>
    </header>
  )
};
