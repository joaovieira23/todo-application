import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

const config = {
  initialColor: 'light',
  useSystemColorMode: false
};

const theme = extendTheme({
  config,
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColor} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
