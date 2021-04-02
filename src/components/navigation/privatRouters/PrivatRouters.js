import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivatRouters = ({ component: Component, ...routeProps }) => {
  return (
    <div>
      <Route
        {...routeProps}
        render={(props) => {
          console.log(`routeProps.restricted`, routeProps.restricted);
          return true ? <Component {...props} /> : <Redirect to='/signIn' />;
        }}
      />
    </div>
  );
};

export default PrivatRouters;
