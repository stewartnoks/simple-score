import React from "react";
import Header from "./Header";
import "../App.css";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="container mt-3 ">{props.children}</div>
    </div>
  );
};

export default Layout;
