import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul className="navbar-ul">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/count">Count</Link>
          </li>
          <li>
            <Link to="/jokes">Jokes</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
