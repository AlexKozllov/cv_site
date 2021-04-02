import React, { Suspense } from 'react';
import { Switch } from 'react-router';
import { mainRouters } from '../routers/mainRouters';
import PrivatRouters from './privatRouters/PrivatRouters';
import PublicRouters from './publicRouters/PublicRouters';

const MainNavigation = () => {
  return (
    <div>
      <Switch>
        <Suspense fallback={<h2>...Loading</h2>}>
          {/* {mainRouters.map((item) => !item.private && <Route {...item} />)} */}
          {mainRouters.map((item) =>
            item.private ? (
              <PrivatRouters key={item.path} {...item} />
            ) : (
              <PublicRouters key={item.path} {...item} />
            )
          )}
        </Suspense>
      </Switch>
    </div>
  );
};

export default MainNavigation;
