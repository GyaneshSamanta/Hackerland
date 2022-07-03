import React from "react";
import Recorder from "../components/Recorder";
import { useRecoilValue } from "recoil";
import { players } from "../Global";

const Single = () => {
  const playerData = useRecoilValue(players);
  console.log(playerData);

  
  return (
    <div className="flex flex-col gap-20 pt-20 items-center h-screen">
      <h1 className="text-text-primary font-bold text-3xl">Single player</h1>
      <div>Current highscore:</div>
      {

      }
      <Recorder />
    </div>
  );
};

export default Single;
