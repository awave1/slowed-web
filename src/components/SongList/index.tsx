import { Box, Flex, List, ListItem, ListIcon } from "@chakra-ui/react";
import { useAction, useStore } from "../../store/hooks";
import { FileUpload } from "../FileUpload";
import { FaMusic } from "react-icons/fa";
import { Howl } from "howler";

export const SongList = () => {
  const songs = useStore((state) => state.songs);
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

  return (
    <Flex direction="column" justify="space-between" height="100%">
      <List spacing={3}>
        {songs.map((song) => (
          <ListItem key={song.name} onClick={onSongSelected(song)}>
            <ListIcon as={FaMusic} color="grey.500" />
            {song.name}
          </ListItem>
        ))}
      </List>
      <FileUpload />
    </Flex>
  );
};