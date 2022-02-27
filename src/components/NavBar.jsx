import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav class="navbar container navbar-expand-lg navbar-light bg-light mx-3">
      <a class="navbar-brand" href="#">
        Counter App
      </a>
      <span className="badge px-3 py-2 bg-info">{props.totalCounters}</span>
    </nav>
  );
};

export default NavBar;
