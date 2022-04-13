import Head from "next/head";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gustavo's homepage" />
        <meta name="author" content="Gustavo Alviarez" />
        <title>Gustavo Alviarez - Homepage</title>
      </Head>

      <Navbar />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
