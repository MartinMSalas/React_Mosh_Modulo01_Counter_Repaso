import React, { Component } from "react";
// Stateless functional component

const NavBar = ({totalCounters}) => {
  //console.log("Navbar - rendered");
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="a">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
}


export default NavBar;
