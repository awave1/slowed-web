import { useStore } from "@slowed/store/hooks";
import { useSongReader } from "@slowed/features/musicPlayer/data/hooks/useSongReader";

export function useSongList() {
  const songs = useStore((state) => state.songs);
  const currentSong = useStore((state) => state.currentSong);
  const songReader = useSongReader();

  const onSongSelected = (song: File) => () => songReader(song);

  return {
    songs,
    currentSong,
    handlers: {
      onSongSelected,
    },
  };
}
