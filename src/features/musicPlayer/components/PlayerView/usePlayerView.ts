import { useStore } from "@slowed/store/hooks";
import React, { useEffect, useRef, useState } from "react";

export function usePlayerView() {
  const currentSong = useStore((store) => store.currentSong);
  const sound = useStore((state) => state.currentSound);

  // TODO: lift the playbackRate to redux
  const [playbackRate, setPlaybackRate] = useState(0.9);
  const [seek, setSeek] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const requestAnimationFrameIdRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (playing) {
      requestAnimationFrameIdRef.current =
        window.requestAnimationFrame(renderSeekPosition);
    }
  }, [playing]);

  const onPlayClicked = async () => {
    if (!sound) {
      console.error("most likely audio file is not specified");
      return;
    }

    if (!playing) {
      sound.fade(0, 100, 150).play();
      setPlaying(true);
      renderSeekPosition();
    } else {
      sound.fade(100, 0, 150).pause();
      setPlaying(false);

      if (requestAnimationFrameIdRef.current !== undefined) {
        window.cancelAnimationFrame(requestAnimationFrameIdRef.current);
      }
    }
  };

  const onPlaybackRateChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (sound) {
      const value = Number.parseFloat(event.target.value);
      setPlaybackRate(value);
      sound.rate(value);
    }
  };

  const renderSeekPosition = () => {
    if (!sound) {
      return;
    }

    if (!seeking) {
      setSeek(sound.seek() as number);
    }

    if (playing) {
      requestAnimationFrameIdRef.current =
        window.requestAnimationFrame(renderSeekPosition);
    }
  };

  const onSeekChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeek(Number.parseFloat(event.target.value));
  };

  const onSeekStarted = () => {
    setSeeking(true);
  };

  const onSeekEnded = (value: number) => {
    setSeeking(false);
    setSeek(value);
    if (!playing) {
      sound?.seek(value);
    }
  };

  return {
    currentSong,
    sound,
    state: {
      playing,
      seek,
      playbackRate,
    },
    handlers: {
      onPlayClicked,
      onSeekChange,
      onSeekStarted,
      onSeekEnded,
      onPlaybackRateChanged,
    },
  };
}
