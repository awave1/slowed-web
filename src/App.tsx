import { Grid, GridItem, Flex } from "@chakra-ui/react";
import { PlayerView } from "./components/PlayerView";
import { SongList } from "./components/SongList";

function App() {
  return (
    <Flex direction="column" justify="space-between" height="100vh">
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={2}>
          <SongList />
        </GridItem>
        <GridItem rowSpan={2} colSpan={3}>
          <PlayerView />
        </GridItem>
      </Grid>

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
