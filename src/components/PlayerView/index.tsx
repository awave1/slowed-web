import { useState, useEffect, useRef } from "react";
import {
  Text,
  IconButton,
  VStack,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { useStore } from "../../store/hooks";

export const PlayerView = () => {
  // TODO: rename to currentSong
  const audioFile = useStore((store) => store.currentSong);
  const sound = useStore((state) => state.currentSound);

  const [playbackRate, setPlaybackRate] = useState(0.9);
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
    setSeek(value);
  };

  const onSeekStarted = () => {
    setSeeking(true);
  };

  const onSeekEnded = (value: number) => {
    setSeeking(false);
    setSeek(value);
    if (!playing) {
      sound?.seek(value);
    }
  };

  return audioFile && sound ? (
    <>
      <Text fontSize="xl">{audioFile?.name}</Text>

      <HStack spacing={6}>
        <IconButton
          aria-label="play pause button"
          icon={!playing ? <FaPlayCircle /> : <FaPauseCircle />}
          onClick={onPlayClicked}
        />
      </HStack>

      <Slider
        min={0}
        max={Number((sound?.duration() as number).toFixed(2))}
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
  ) : null;
};
