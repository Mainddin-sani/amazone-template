import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header-part">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/review">Review</Link>
        </li>
        <li>
          <Link to="/manage">Manage </Link>
        </li>
        <li>
          <Link to="/inventory"> Inventory</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
