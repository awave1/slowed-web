import { useEffect, useState, useRef } from "react";
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
import { Howl } from "howler";

function App() {
  const [playbackRate, setPlaybackRate] = useState(0.9);
  const [audioFile, setAudioFile] = useState<File | undefined>();
  const [sound, setSound] = useState<Howl | undefined>(undefined);
  const [seek, setSeek] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const requestAnimationFrameIdRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (playing) {
      requestAnimationFrameIdRef.current = window.requestAnimationFrame(
        renderSeekPosition
      );
    }
  }, [playing]);

  const onDropAccepted = (acceptedFiles: File[]) => {
    const [file] = acceptedFiles;
    setAudioFile(file);

    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      const { result } = fileReader;
      setSound(
        new Howl({
          src: result as string,
          format: [file.name.split(".").pop()?.toLowerCase() ?? "mp3"],
          rate: playbackRate,
        })
      );
    });
    fileReader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDropAccepted,
  });

  const onPlayClicked = async () => {
    if (!sound) {
      console.error("most likely audio file is not specified");
      return;
    }

    if (!playing) {
      sound.fade(0, 100, 150).play();
      setPlaying(true);
      renderSeekPosition();
    } else {
      sound.fade(100, 0, 150).pause();
      setPlaying(false);
      console.log({ requestAnimationFrameIdRef });

      if (requestAnimationFrameIdRef.current !== undefined) {
        window.cancelAnimationFrame(requestAnimationFrameIdRef.current);
      }
    }
  };

  const onPlaybackRateChanged = (value: number) => {
    if (sound) {
      setPlaybackRate(value);
      sound.rate(value);
    }
  };

  const renderSeekPosition = () => {
    if (!sound) {
      return;
    }

    if (!seeking) {
      setSeek(sound.seek() as number);
    }

    if (playing) {
      requestAnimationFrameIdRef.current = window.requestAnimationFrame(
        renderSeekPosition
      );
    }
  };

  const onSeekChange = (value: number) => {
    console.log(" seek", { value });
    setSeek(value);
  };

  const onSeekStarted = () => {
    console.log("start seek");

    setSeeking(true);
  };

  const onSeekEnded = (value: number) => {
    console.log("end seek", { value });
    setSeeking(false);
    setSeek(value);
    if (!playing) {
      sound?.seek(value);
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

        {audioFile && sound && (
          <>
            <Text fontSize="xl">{audioFile.name}</Text>

            <HStack spacing={6}>
              <IconButton
                aria-label="play pause button"
                icon={!playing ? <FaPlayCircle /> : <FaPauseCircle />}
                onClick={onPlayClicked}
              />
            </HStack>

            <Slider
              min={0}
              max={Number((sound.duration() as number).toFixed(2))}
              step={0.01}
              value={seek}
              onChange={onSeekChange}
              onChangeStart={onSeekStarted}
              onChangeEnd={onSeekEnded}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>

            <VStack>
              <Text>Playback Speed</Text>
              <Slider
                aria-label="slider-ex-1"
                max={1}
                min={0.5}
                step={0.1}
                onChange={onPlaybackRateChanged}
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
