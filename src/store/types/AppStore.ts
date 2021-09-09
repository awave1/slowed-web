import type { Action } from "easy-peasy";
import type { Howl } from "howler";

export interface AppStore {
  songs: File[];
  currentSong?: File;
  currentSound?: Howl;
  playing: boolean;
  seeking: boolean;
  setCurrentSong: Action<AppStore, File>;
  setCurrentSound: Action<AppStore, Howl>;
  addSong: Action<AppStore, File>;
}
