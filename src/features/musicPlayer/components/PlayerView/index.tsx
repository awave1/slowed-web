import React from "react";
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
import { usePlayerView } from "@slowed/features/musicPlayer/components/PlayerView/usePlayerView";

export const PlayerView = () => {
  const { currentSong, sound, state, handlers } = usePlayerView();

  return currentSong && sound ? (
    <>
      <Text fontSize="xl">{currentSong?.name}</Text>

      <HStack spacing={6}>
        <IconButton
          aria-label="play pause button"
          icon={!state.playing ? <FaPlayCircle /> : <FaPauseCircle />}
          onClick={handlers.onPlayClicked}
        />
      </HStack>

      <Slider
        min={0}
        max={Number((sound?.duration() as number).toFixed(2))}
        step={0.01}
        value={state.seek}
        onChange={handlers.onSeekChange}
        onChangeStart={handlers.onSeekStarted}
        onChangeEnd={handlers.onSeekEnded}
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
          onChange={handlers.onPlaybackRateChanged}
          value={state.playbackRate}
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
