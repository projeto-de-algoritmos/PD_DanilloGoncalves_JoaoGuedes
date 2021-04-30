import { Box, Center, Grid, SimpleGrid } from "@chakra-ui/layout";
import React, { useState } from "react";

function App() {
  return (
    <>
      <Center
        w="100vw"
        h="5vh"
        fontFamily="Nunito Sans"
        fontWeight="bold"
        fontSize="xx-large"
      >
        Knapsack Evil 4
      </Center>
      <Box w="100vw" h="95vh" bg="#363D38">
        <Center w="50vw" h="60vh" bg="#908787" borderRadius="30">
          <SimpleGrid templateColumns="repeat(4, 2fr)" gap={10}>
            <Center w="200px" h="200px" borderRadius="30" bg="#C4C4C4">
              <img src={}/>
            </Center>
            <Center w="200px" h="200px" borderRadius="30" bg="#C4C4C4">
              <img src={}/>
            </Center>
            <Center w="200px" h="200px" borderRadius="30" bg="#C4C4C4">
              <img src={}/>
            </Center>
            <Center w="200px" h="200px" borderRadius="30" bg="#C4C4C4">
              <img src={}/>
            </Center>
            <Center w="200px" h="200px" borderRadius="30" bg="#C4C4C4">
              <img src={}/>
            </Center>
            <Center w="200px" h="200px" borderRadius="30" bg="#C4C4C4">
              <img src={}/>
            </Center>
            <Center w="200px" h="200px" borderRadius="30" bg="#C4C4C4">
              <img src={}/>
            </Center>
            <Center w="200px" h="200px" borderRadius="30" bg="#C4C4C4">
              <img src={}/>
            </Center>
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
}

export default App;
