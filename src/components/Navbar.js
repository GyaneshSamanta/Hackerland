import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-10 px-44 bg-background-primary">
      Heading
      <div className="flex gap-4">
        <Link exact to="/">
          Home
        </Link>
        <Link exact to="/Single">
          Single
        </Link>
        <Link exact to="/Multi">
          Multi
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
