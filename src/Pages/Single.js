import React, { useState } from "react";
import Recorder from "../components/Recorder";
import { useRecoilValue } from "recoil";
import { players } from "../Global";

const Single = () => {
  var [mood, setMood] = useState();
  const playerData = useRecoilValue(players);
  console.log(playerData);

  var items = [
    "Neutral",
    "Calm",
    "Happy",
    "Sad",
    "Angry",
    "Fearful",
    "Disgust",
    "Surprised",
  ];

  const handleClick = () => {
    setMood(items[Math.floor(Math.random() * items.length)]);
  };

  return (
    <div className="flex flex-col gap-10 pt-5 items-center h-screen">
      <h1 className="text-text-primary font-bold text-3xl">Single player</h1>
      <div>Current highscore: 230</div>
      <div>
        <button onClick={handleClick}>
          <spam className="text-white font-bold text-2xl p-4 px-6 bg-background-seconary rounded-md">Click me</spam>
        </button>
      </div>
      <h1 className="text-text-primary font-bold text-4xl">Mood: {mood}</h1>
      <Recorder />
    </div>
  );
};

export default Single;
