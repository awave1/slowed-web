import { useAction } from "@slowed/store/hooks";
import { Howl } from "howler";

export function useSongReader() {
  const setCurrentSong = useAction((actions) => actions.setCurrentSong);
  const setCurrentSound = useAction((actions) => actions.setCurrentSound);

  const songReader = (song: File, onSongLoaded?: () => void) => {
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

      onSongLoaded?.();
    });

    fileReader.readAsDataURL(song);
  };

  return songReader;
}
