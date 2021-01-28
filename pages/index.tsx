import { useState, useEffect, useRef } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useDropzone } from "react-dropzone";

export default function Home() {
  const [playbackRate, setPlaybackRate] = useState(0.9);
  const [source, setSource] = useState<AudioBufferSourceNode | undefined>(
    undefined
  );
  const [audioContext, setAudioContext] = useState<AudioContext | undefined>(
    undefined
  );
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    async function cb() {
      if (acceptedFiles.length === 1) {
        setAudioContext(new AudioContext());
      }
    }

    cb();
  }, [acceptedFiles]);

  useEffect(() => {
    if (audioContext) {
      setSource(audioContext.createBufferSource());
    }
  }, [audioContext]);

  const onPlayClicked = async () => {
    if (!audioContext || !source) {
      console.error("cant play");
      return;
    }

    try {
      const [audioFile] = acceptedFiles;
      const audioData = await audioFile.arrayBuffer();
      audioContext.decodeAudioData(
        audioData,
        (buffer) => {
          source.buffer = buffer;
          source.playbackRate.value = playbackRate;
          source.connect(audioContext.destination);
          console.log({ playbackRate });
        },
        (err) => console.error(err)
      );

      source.start(0);
    } catch (err) {
      console.error(err);
    }
  };

  const onStopClicked = () => {
    if (source) {
      source.stop(0);
    }
  };

  const onPlaybackRateChanged = (val: number) => {
    setPlaybackRate(val);
    if (source && source.buffer) {
      source.playbackRate.value = val;
    }
  };

  return (
    <Flex direction="column" justify="space-between" height="100vh">
      <Head>
        <title>slowed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack marginX={16}>
        <Flex background="gray.100">
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

        {acceptedFiles[0] && <Text fontSize="xl">{acceptedFiles[0].name}</Text>}

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
            onChange={onPlaybackRateChanged}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </VStack>
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
