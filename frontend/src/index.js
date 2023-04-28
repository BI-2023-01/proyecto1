import React from "react";
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Texto from "./components/cuadroTexto";
import Boton from "./components/boton";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Texto />
      <Boton />
    </ChakraProvider>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)