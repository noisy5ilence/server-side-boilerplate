import React from 'react';
import { Redirect } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const withAuth = Component => {
  const WrappedComponent = props => {
    const isAuth = useAuth();

    return isAuth ? <Component { ...props } /> : <Redirect to='/'/>
  };

  WrappedComponent.displayName = `withAuth(${Component.displayName || Component.name})`;

  return WrappedComponent;
};

export default withAuth;
