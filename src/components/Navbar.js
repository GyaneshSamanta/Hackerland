import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 px-44 bg-background-primary">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
