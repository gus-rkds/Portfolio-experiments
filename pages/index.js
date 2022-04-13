import {
  Link,
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";

function Home() {
  return (
    <Container>
      <Box
        mt={3}
        mb={3}
        padding={2}
        borderRadius="md"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      >
        hello, Im gustavo
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gustavo Alviarez
          </Heading>
          <p>Frontend Developer</p>
        </Box>
      </Box>

      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
        <Image
          borderRadius="full"
          boxSize="250px"
          src="https://pbs.twimg.com/profile_images/1444482358657290240/KK6Nn8zN_400x400.jpg"
          alt="Gustavo Alviarez"
        />
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>paragraph</p>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <p>
          Programming, Tech,{" "}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Games
          </Link>
          , Languages,{" "}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Dance
          </Link>
          , Design, Machine Learning
        </p>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/gus-rkds" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @gus-rkds
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/gus_rkds" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @gus_rkds
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/gus_rkds/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @gus_rkds
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
}

export default Home;
