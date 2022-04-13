import { Box, Container, Heading } from "@chakra-ui/react";

function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" align="center">
        hello, I'm gustavo
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gustavo Alviarez
          </Heading>
          <p>Frontend Developer</p>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
