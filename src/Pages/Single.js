import React, { useState } from "react";
import Recorder from "../components/Recorder";
import { useRecoilValue } from "recoil";
import { players } from "../Global";

const Single = () => {
  var [mood, setMood] = useState();
  const playerData = useRecoilValue(players);
  console.log(playerData);

  var items = [
    "neutral",
    "calm",
    "happy",
    "sad",
    "angry",
    "fearful",
    "disgust",
    "surprised",
  ];

  const handleClick = () => {
    setMood(items[Math.floor(Math.random() * items.length)]);
  };

  return (
    <div className="flex flex-col gap-20 pt-20 items-center h-screen">
      <h1 className="text-text-primary font-bold text-3xl">Single player</h1>
      <div>
        <button onClick={handleClick}>
          <spam>Click me</spam>
        </button>
      </div>
      <h1>{mood}</h1>
      <div>Current highscore: </div>
      <Recorder />
    </div>
  );
};

export default Single;
