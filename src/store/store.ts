import { createStore } from "easy-peasy";
import { AppStore } from "./types/AppStore";

const storeModel: AppStore = {
  songs: [],
};

export const store = createStore<AppStore>(storeModel);
