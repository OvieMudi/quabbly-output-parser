import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import Home from './components/Home';


const theme = extendTheme({config: {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
