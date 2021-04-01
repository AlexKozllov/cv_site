import React from 'react';
import PrivatRouters from './privatRouters/PrivatRouters';
import PublicRouters from './publicRouters/PublicRouters';

const MainNavigation = () => {
  return (
    <div>
      <PublicRouters />
      <PrivatRouters />
    </div>
  );
};

export default MainNavigation;
