import { Grid, GridItem, Flex, Container } from "@chakra-ui/react";
import styled from "styled-components";
import { Footer } from "./components/Footer";
import { PlayerView } from "./components/PlayerView";
import { SongList } from "./components/SongList";

const Panel = styled(GridItem)`
  padding: 36px;
`;

function App() {
  return (
    <Flex
      direction="column"
      justify="space-between"
      alignItems="center"
      height="100vh"
    >
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <Panel rowSpan={2} colSpan={2}>
          <SongList />
        </Panel>
        <Panel rowSpan={2} colSpan={3}>
          <PlayerView />
        </Panel>
      </Grid>

      <Footer />
    </Flex>
  );
}

export default App;
