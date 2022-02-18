import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <div className="col-4"></div>
      <Link to="/" className="navbar-brand m-1">
        <h4> React Redux Contact App </h4>
      </Link>
    </nav>
  );
}
export default Navbar;
