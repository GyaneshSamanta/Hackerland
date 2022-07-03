import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { players } from "../Global";

function Multi() {
  const [counter, setCounter] = useState(1);
  const [inputFields, setInputFields] = useState([]);
  const [data, setData] = useRecoilState(players);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
    setInputFields([...inputFields, { name: "", score: 0 }]);
    setData([...inputFields, { name: "", score: 0 }]);
    console.log(data);
  };

  const playerdata = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const list = [...inputFields];
    list[counter - 1] = { name: value, score: 0 };
    setInputFields(list);
    setData(list);
  };

  return (
    <div className="h-screen flex flex-col gap-20 pt-20 items-center text-center">
      <div className="text-text-primary font-bold text-3xl">Multi Player</div>
      <div className="flex flex-col gap-10">
        <h1 className="">Enter Players</h1>
        <div className="flex flex-col gap-4">
          {Array.from(Array(counter)).map((c, index) => {
            return (
              <input
                key={c}
                type="text"
                className="h-8 w-full px-3 rounded bg-background-lightblue outline-none"
                placeholder="Enter Name"
                onChange={(e) => playerdata(e)}
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
            <div>Number of players added: {counter - 1}</div>
          </div>
        </div>
        <Link to="/Single">
          <div className="p-4 border-text-primary border-2 text-text-primary font-medium rounded-md hover:bg-text-primary hover:text-white">
            Let's Play
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Multi;
