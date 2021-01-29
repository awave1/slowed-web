import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Flex,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

// TODO: this is no bueno, gotta redo
const audioContext = new AudioContext();
let audioBufferSourceNode = audioContext.createBufferSource();

function App() {
  const [playbackRate, setPlaybackRate] = useState(0.9);
  const [audioFile, setAudioFile] = useState<File | undefined>();
  const [playing, setPlaying] = useState(false);

  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    setAudioFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDropAccepted,
  });

  useEffect(() => {
    if (audioBufferSourceNode) {
      audioBufferSourceNode.playbackRate.value = playbackRate;
    }
  }, [playbackRate]);

  const onPlayClicked = async () => {
    if (!audioContext || !audioBufferSourceNode || !audioFile) {
      console.error("most likely audio file is not specified");
      return;
    }

    try {
      if (!playing) {
        audioBufferSourceNode = audioContext.createBufferSource();

        const audioData = await audioFile.arrayBuffer();
        audioBufferSourceNode.buffer = await audioContext.decodeAudioData(
          audioData
        );
        audioBufferSourceNode.playbackRate.value = playbackRate;
        audioBufferSourceNode.connect(audioContext.destination);

        audioBufferSourceNode.start(0);
        setPlaying(true);
      } else {
        audioBufferSourceNode.stop(0);
        setPlaying(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex direction="column" justify="space-between" height="100vh">
      <VStack marginX={16}>
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

        {audioFile && (
          <>
            <Text fontSize="xl">{audioFile.name}</Text>

            <HStack spacing={6}>
              <IconButton
                aria-label="play pause button"
                icon={!playing ? <FaPlayCircle /> : <FaPauseCircle />}
                onClick={onPlayClicked}
              />
            </HStack>

            <VStack>
              <Text>Playback Speed</Text>
              <Slider
                aria-label="slider-ex-1"
                max={1}
                min={0.5}
                step={0.1}
                onChange={setPlaybackRate}
                value={playbackRate}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </VStack>
          </>
        )}
      </VStack>

      <footer>
        <a
          href="https://github.com/awave1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          made by awave
        </a>
      </footer>
    </Flex>
  );
}

export default App;
