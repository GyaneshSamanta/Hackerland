import React, { useState } from "react";

function Multi() {
  const [numbers, setPlayer] = useState();

  return (
    <div className="">
      <h1>Choose number of players</h1>
      <div>
        <select
          id="players"
          value={numbers}
          onChange={(e) => setPlayer(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <h1>Numbers of players: {numbers}</h1>
      </div>
    </div>
  );
}

export default Multi;
