import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Button,
  Flex,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";

function App() {
  const [playbackRate, setPlaybackRate] = useState(0.9);
  const [audioContext] = useState<AudioContext>(new AudioContext());
  const [audioFile, setAudioFile] = useState<File | undefined>();
  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    setAudioFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDropAccepted,
  });

  let audioBufferSourceNode = audioContext.createBufferSource();

  useEffect(() => {
    if (audioBufferSourceNode) {
      audioBufferSourceNode.playbackRate.value = playbackRate;
    }
  }, [playbackRate, audioBufferSourceNode]);

  const onPlayClicked = async () => {
    if (!audioContext || !audioBufferSourceNode || !audioFile) {
      console.error("most likely audio file is not specified");
      return;
    }

    try {
      audioBufferSourceNode = audioContext.createBufferSource();

      const audioData = await audioFile.arrayBuffer();
      audioBufferSourceNode.buffer = await audioContext.decodeAudioData(
        audioData
      );
      audioBufferSourceNode.connect(audioContext.destination);

      audioBufferSourceNode.start(0);
    } catch (err) {
      console.error(err);
    }
  };

  const onStopClicked = () => {
    if (audioBufferSourceNode) {
      audioBufferSourceNode.stop(0);
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
              <Button onClick={onPlayClicked}>Play</Button>
              <Button onClick={onStopClicked}>Stop</Button>
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
