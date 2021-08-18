import React from "react";
import {
  AppContainer,
  MainGrid,
  PlayerViewContainer,
  SongListContainer,
} from "@slowed/app/styles.css";
import { SongList } from "@slowed/features/musicPlayer/components/SongList";
import { PlayerView } from "@slowed/features/musicPlayer/components/PlayerView";
import { Footer } from "@slowed/features/shell/components/Footer";

export function App() {
  return (
    <div className={AppContainer}>
      <div className={MainGrid}>
        <div className={SongListContainer}>
          <SongList />
        </div>
        <div className={PlayerViewContainer}>
          <PlayerView />
        </div>
      </div>

      <Footer />
    </div>
  );
}
