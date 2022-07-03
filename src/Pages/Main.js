import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="flex flex-col pt-20 gap-36 text-center max-w-7xl mx-auto h-screen">
      <div className="flex flex-col gap-8">
        <div className="text-text-primary font-semibold text-2xl">
          Welcome to..
        </div>
        <div className="text-text-primary font-bold text-4xl">Mood Sings</div>
      </div>
      <div className="flex justify-evenly text-white text-lg">
        <a href="/Single">
          <div className="p-4 px-6 bg-background-seconary rounded-md">
            Single Player
            {/* Lets Play */}
          </div>
        </a>
        <a href="/Multi">
          <div className="p-4 px-6 bg-background-seconary rounded-md">
            Multi Player
          </div>{" "}
        </a>
      </div>
    </div>
  );
}

export default Main;
