import React from "react";
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Texto from "./components/cuadroTexto";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Texto />
    </ChakraProvider>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)