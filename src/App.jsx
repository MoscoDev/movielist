import React from "react";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#4F46E5",
    800: "#4338CA",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors })


function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nav" element={<Navbar />} />
          <Route path="jobs" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;