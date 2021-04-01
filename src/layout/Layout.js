import React from 'react';
import AppBar from '../components/appBar/AppBar';

import Footer from '../components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <body>{children}</body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
