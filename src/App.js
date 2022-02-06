import React from 'react';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Results from './pages/Results';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
