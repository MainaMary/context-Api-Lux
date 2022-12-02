import React from "react";
import { useState } from "react";

const Navbar = ({ handleClick }) => {
  return (
    <div className="nav_wrapper">
      <h2 className="title">Data App</h2>
      <div className="btn_wrapper">
        <button className="btn" onClick={() => handleClick("photos")}>
          Photos
        </button>
        <button className="btn" onClick={() => handleClick("users")}>
          Users
        </button>
      </div>
    </div>
  );
};

export default Navbar;
