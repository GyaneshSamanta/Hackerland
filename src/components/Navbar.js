import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-10 px-44 bg-background-primary">
      Heading
      <div className="flex gap-4">
        <a href="/">
          Home
        </a>
        
      </div>
    </div>
  );
};

export default Navbar;
