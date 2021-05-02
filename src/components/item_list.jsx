import {
  Box,
  Button,
  Spacer,
  Center,
  SimpleGrid,
  VStack,
  Text,
  HStack,
  CheckboxGroup,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Item from "./item";
import backpack from "../assets/backpack.svg";
import leonBazuka from "../assets/leonBazuka.svg";
import homePageText from "../assets/homePageText";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/item6.png";
import item7 from "../assets/item7.png";
import item8 from "../assets/item8.png";
import Knapsack from '../models/knapsack';

const items_images = [item1, item2, item3, item4, item5, item6, item7, item8];
var knapsack = new Knapsack();
export default function ItemList() {
  const [itemsOnBag, setItemsOnBag] = useState([]);
  
  
  useEffect(() => {
    console.log(itemsOnBag);
  }, [itemsOnBag]);

  const handleAddEvent = (id) => {
    if (itemsOnBag.includes(id)) {
      const itemsUpdated = itemsOnBag.filter((item) => item !== id);
      setItemsOnBag(itemsUpdated);
    } else setItemsOnBag([...itemsOnBag, id]);
  };

  const renderItems = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
      <Item
        img={`item${index}`}
        key={index}
        addItem={handleAddEvent}
        id={index}
        itemsOnBag={itemsOnBag}
        itemInfo={knapsack.items[index]}
        image={items_images[index]}
      />
    ));
  };

  return (
    <Box w="100vw" h="95vh" bg="#363D38" d="flex" alignItems="center" px="10">
      <HStack w="100vw" d="flex" justifyContent="space-around">
        <VStack>
          <Center w="50vw" h="60vh" bg="#908787" borderRadius="30">
            <CheckboxGroup>
              <SimpleGrid templateColumns="repeat(4, 2fr)" gap={10}>
                {renderItems()}
              </SimpleGrid>
            </CheckboxGroup>
          </Center>
          <HStack w="50vw">
            <VStack ml="10">
              <Text
                color="#FFF"
                fontSize="4xl"
                fontFamily="Nunito Sans"
                fontWeight="bold"
                alignSelf="flex-start"
              >
                Peso Máximo: 30kg
              </Text>
              <Text
                color="#FFF"
                fontSize="4xl"
                fontFamily="Nunito Sans"
                fontWeight="bold"
                alignSelf="flex-start"
              >
                Peso Atual: 20kg
              </Text>
            </VStack>
            <Spacer />
            <Button fontSize="4xl">
              <Text px="40px">Enviar</Text>
            </Button>
          </HStack>
        </VStack>
        <VStack>
          <Box w="50%">
            <Text color="#FFF" fontSize="4xl" fontWeight="bold" fontFamily="Nunito Sans">
              {homePageText}
            </Text>
          </Box>
          <Center>
            <Image src={leonBazuka} position="absolute" />
            <Image src={backpack} zIndex={5} pt="300" />
          </Center>
        </VStack>
      </HStack>
    </Box>
  );
}
