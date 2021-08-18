import React from "react";
import { FaMusic } from "react-icons/fa";
import { useSongList } from "@slowed/features/musicPlayer/components/SongList/useSongList";
import { FileUpload } from "@slowed/features/fileUpload/components/FileUpload";
import {
  List,
  ListItem,
  ListItemActive,
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
            <li
              className={
                currentSong && song.name === currentSong.name
                  ? ListItemActive
                  : ListItem
              }
              key={song.name}
              onClick={handlers.onSongSelected(song)}
            >
              <FaMusic />
              {song.name}
            </li>
          ))}
        </ul>
      </div>

      <FileUpload />
    </div>
  );
};
