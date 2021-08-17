import React from "react";
import { Flex, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { FaMusic } from "react-icons/fa";
import { useSongList } from "@slowed/features/musicPlayer/components/SongList/useSongList";
import { FileUpload } from "@slowed/features/fileUpload/components/FileUpload";

export const SongList = () => {
  const { currentSong, songs, handlers } = useSongList();

  return (
    <Flex direction="column" justify="space-between" height="100%">
      <Box overflowY="auto" marginBottom="8">
        <List spacing={3}>
          {songs.map((song) => (
            <ListItem
              key={song.name}
              onClick={handlers.onSongSelected(song)}
              bg={
                currentSong && song.name === currentSong.name
                  ? "gray.300"
                  : "gray.200"
              }
              p="8"
              borderRadius="8px"
            >
              <ListIcon as={FaMusic} color="grey.500" />
              {song.name}
            </ListItem>
          ))}
        </List>
      </Box>
      <FileUpload />
    </Flex>
  );
};
