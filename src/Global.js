import { atom } from "recoil";

const players = atom({
  key: "players",
  default: [],
});

export { players };
