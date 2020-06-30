import React from 'react'
import Navigation from "../navigation/Navigation";

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <div className="layout"> {children}</div>
  </div>
);

export default Layout;