import React from "react";
import Recorder from "../components/Recorder";
import { useRecoilValue } from "recoil";
import { players } from "../Global";

const Single = () => {
  const playerData = useRecoilValue(players);
  console.log(playerData);

  return <div>
    {
      playerData.map(data => {
        
      })
    }
  </div>;
};

export default Single;
