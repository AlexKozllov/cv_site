import React from 'react';

import MainNavigation from './components/navigation/MainNavigation';
import Leyout from './layout/Layout';

const App = () => {
  return (
    <Leyout>
      {<MainNavigation />}
      <h2>app</h2>
    </Leyout>
  );
};

export default App;
