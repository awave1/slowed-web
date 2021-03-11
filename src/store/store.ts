import { action, createStore, thunk } from "easy-peasy";
import { Howl } from "howler";
import { AppStore } from "./types/AppStore";

// TODO: figure out the issue with the state and undefined player
const storeModel: AppStore = {
  songs: [],
  // player: {
  currentSong: undefined,
  currentSound: undefined,

  seeking: false,
  playing: false,
  setCurrentSong: action((state, file) => {
    state.currentSong = file;
  }),
  setCurrentSound: action((state, payload) => {
    state.currentSound = payload;
  }),
  addSong: action((state, payload) => {
    state.songs.push(payload);
  }),
  // },
};

export const store = createStore<AppStore>(storeModel);
