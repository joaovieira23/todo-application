import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
