import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { usePlayerView } from "@slowed/features/musicPlayer/components/PlayerView/usePlayerView";
import {
  OptionsContainer,
  PlayerProgressContainer,
} from "@slowed/features/musicPlayer/components/PlayerView/styles.css";

export const PlayerView = () => {
  const { currentSong, sound, state, handlers } = usePlayerView();

  if (!(currentSong && sound)) {
    return null;
  }

  return (
    <div>
      <h3>{currentSong.name}</h3>

      <div className={PlayerProgressContainer}>
        <input
          type="range"
          min={0}
          max={Number(sound.duration() as number).toFixed(2)}
          step={0.01}
          value={state.seek}
          onChange={handlers.onSeekChange}
        />

        <button type="button" onClick={handlers.onPlayClicked}>
          {state.playing ? <FaPauseCircle /> : <FaPlayCircle />}
        </button>
      </div>

      <div className={OptionsContainer}>
        <span>Playback Speed</span>
        <input
          type="range"
          min={0.5}
          max={1}
          step={0.1}
          value={state.playbackRate}
          onChange={handlers.onPlaybackRateChanged}
        />
      </div>
    </div>
  );
};
