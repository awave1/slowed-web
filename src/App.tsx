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
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Grid
        w="60vw"
        h="60vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
      >
        <Panel rowSpan={2} colSpan={2} bg="gray.100">
          <SongList />
        </Panel>
        <Panel rowSpan={2} colSpan={3} bg="gray.50">
          <PlayerView />
        </Panel>
      </Grid>

      <Footer />
    </Flex>
  );
}

export default App;
