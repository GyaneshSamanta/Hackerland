import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-10 px-44">
      Heading
      <nav className="flex gap-4">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/Single-player">
          Single
        </NavLink>
        <NavLink exact to="/Multi-player">
          Multi
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
