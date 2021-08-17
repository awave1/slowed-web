import { useState } from "react";
import { Howl } from "howler";
import { useAction, useStore } from "@slowed/store/hooks";

export function useSongList() {
  const songs = useStore((state) => state.songs);
  const currentSong = useStore((state) => state.currentSong);
  const setCurrentSong = useAction((state) => state.setCurrentSong);
  const setCurrentSound = useAction((state) => state.setCurrentSound);

  const onSongSelected = (song: File) => () => {
    setCurrentSong(song);

    // TODO: uglyyyyyyyyyyyyyyy
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      const { result } = fileReader;
      setCurrentSound(
        new Howl({
          src: result as string,
          format: [song.name.split(".").pop()?.toLowerCase() ?? "mp3"],
          rate: 0.9, // TODO: set this somehow
        })
      );
    });
    fileReader.readAsDataURL(song);
  };

  return {
    songs,
    currentSong,
    handlers: {
      onSongSelected,
    },
  };
}
