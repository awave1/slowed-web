import React from "react";
import { useSongList } from "@slowed/features/musicPlayer/components/SongList/useSongList";
import { FileUpload } from "@slowed/features/fileUpload/components/FileUpload";
import {
  List,
  SongItem,
  SongItemActive,
  SongListContainer,
  SongListWrapper,
} from "@slowed/features/musicPlayer/components/SongList/styles.css";

export const SongList = () => {
  const { currentSong, songs, handlers } = useSongList();

  return (
    <div className={SongListContainer}>
      <div className={SongListWrapper}>
        <ul className={List}>
          {songs.map((song) => (
            // TODO: extract
            <li key={song.name}>
              <button
                className={
                  currentSong && song.name === currentSong.name
                    ? SongItemActive
                    : SongItem
                }
                type="button"
                onClick={handlers.onSongSelected(song)}
              >
                {song.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <FileUpload />
    </div>
  );
};
