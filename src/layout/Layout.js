import React from "react";
import AppBar from "../components/appBar/AppBar";

import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <header>
        <AppBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
