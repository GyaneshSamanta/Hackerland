import React, { useState } from "react";

function Multi() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState({});

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const playerdata = () => {};

  return (
    <div className="h-screen flex flex-col gap-20 pt-20 items-center text-center">
      <div className="text-text-primary font-bold text-3xl">Multi Player</div>
      <div className="flex flex-col gap-5">
        <h1 className="">Enter Players</h1>
        <div className="flex flex-col gap-4">
          {Array.from(Array(counter)).map((c, index) => {
            return (
              <input
                key={c}
                type="text"
                className="h-8 w-full px-3 rounded bg-background-lightblue outline-none"
                placeholder="Enter Name"
              ></input>
            );
          })}
          <div className="flex flex-col gap-4">
            <button
              onClick={handleClick}
              className="p-4 bg-background-seconary text-white font-medium rounded-md "
            >
              + Add Player
            </button>
            <div> Number of players: {counter}</div>
          </div>
          <div>Let's Play</div>
        </div>
      </div>
    </div>
  );
}

export default Multi;
