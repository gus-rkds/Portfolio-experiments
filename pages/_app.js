import Layout from "../components/layouts/main";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AnimatePresence } from "framer-motion";
import Fonts from "../components/fonts";

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Fonts />
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
