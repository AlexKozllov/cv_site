import React from 'react';
import { Redirect, Route } from 'react-router';

const PublicRouters = ({ component: Component, ...routeProps }) => {
  return (
    <div>
      <Route
        {...routeProps}
        render={(props) => {
          console.log(`routeProps.restricted`, routeProps.restricted);
          return !routeProps.restricted ? (
            <Component {...props} />
          ) : (
            <Redirect to='/' />
          );
        }}
      />
    </div>
  );
};

export default PublicRouters;
