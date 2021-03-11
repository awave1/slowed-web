import { Text, Box, Flex } from "@chakra-ui/react";
import { Howl } from "howler";
import { useDropzone } from "react-dropzone";
import { useAction } from "../../store/hooks";

const MAX_FILES = 1;

export const FileUpload = () => {
  const setCurrentSong = useAction((actions) => actions.setCurrentSong);
  const setCurrentSound = useAction((actions) => actions.setCurrentSound);
  const addSong = useAction((actions) => actions.addSong);

  const onFileLoaded = (file: File) => {
    setCurrentSong(file);
    addSong(file);

    // TODO: uglyyyyyyyyyyyyyyyyyyy
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      const { result } = fileReader;
      setCurrentSound(
        new Howl({
          src: result as string,
          format: [file.name.split(".").pop()?.toLowerCase() ?? "mp3"],
          rate: 0.9, // TODO: set this somehow
        })
      );
    });
    fileReader.readAsDataURL(file);
  };

  const onDropAccepted = (acceptedFiles: File[]) => {
    const [file] = acceptedFiles;
    onFileLoaded(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: MAX_FILES,
    onDropAccepted,
  });

  return (
    <Flex bgColor="gray.100" borderRadius={16}>
      <Box width="100%">
        <Flex width="100%" height={32} {...getRootProps()}>
          <input {...getInputProps()} />
          <Text
            width="auto"
            height="auto"
            fontSize="lg"
            alignSelf="center"
            p={16}
          >
            Drop an audio file here or click to add
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
