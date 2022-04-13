import Layout from "../components/layouts/main";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
