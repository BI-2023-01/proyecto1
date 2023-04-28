import React from "react";
import { Heading, Flex } from "@chakra-ui/react";

const Header = () => {
    return (
      <Flex
        as="nav"
        padding="5rem"
        bg="gray.400"
        alignItems="center"
      >
        <Flex justifyContent="center" width="100%"> 
          <Heading as="h1" textAlign="center">Aplicación que permite saber si una calificación de una película es positiva o negativa</Heading> {/* Agregamos "textAlign" */}
        </Flex>
      </Flex>

      
    );

    
  };

export default Header;