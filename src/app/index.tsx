import React from "react";
import {
  AppContainer,
  MainGrid,
  PlayerViewContainer,
  SongListContainer,
} from "@slowed/app/styles.css";
import { SongList } from "@slowed/features/musicPlayer/components/SongList";
import { PlayerView } from "@slowed/features/musicPlayer/components/PlayerView";
import { useThemeProvider } from "@slowed/app/theme/ThemeProvider";
import "@slowed/app/app.css";

export function App() {
  const { themeVariant, setThemeVariant } = useThemeProvider();

  const onSetThemeVariant = () =>
    setThemeVariant(themeVariant === "light" ? "dark" : "light");

  return (
    <div className={AppContainer}>
      <button type="button" onClick={onSetThemeVariant}>
        theme
      </button>

      <div className={MainGrid}>
        <div className={SongListContainer}>
          <SongList />
        </div>
        <div className={PlayerViewContainer}>
          <PlayerView />
        </div>
      </div>
    </div>
  );
}
