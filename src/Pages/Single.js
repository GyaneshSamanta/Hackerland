import React from "react";
import Recorder from "../components/Recorder";

const Single = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-background-primary">
      <h1>Single player</h1>
      <Recorder />
    </div>
  );
};

export default Single;
