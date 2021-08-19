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
import { useThemeProvider } from "@slowed/app/theme/ThemeProvider";

export function App() {
  const { themeVariant, setThemeVariant } = useThemeProvider();

  return (
    <div className={AppContainer}>
      <button
        onClick={() =>
          setThemeVariant(themeVariant === "light" ? "dark" : "light")
        }
      >
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

      <Footer />
    </div>
  );
}
