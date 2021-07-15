import { Action, Thunk } from "easy-peasy";
import type { Howl } from "howler";

export interface AppStore {
  songs: File[];
  // player: {
  currentSong?: File;
  currentSound?: Howl;
  playing: boolean;
  seeking: boolean;
  setCurrentSong: Action<AppStore, File>;
  setCurrentSound: Action<AppStore, Howl>;
  addSong: Action<AppStore, File>;
  // };
}
