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
import { homePageText, textLose, textWin } from "../assets/texts";
import leonLose from "../assets/leonLose.svg";
import leonWin from "../assets/leonWin.svg";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/item6.png";
import item7 from "../assets/item7.png";
import item8 from "../assets/item8.png";
import Knapsack from "../models/knapsack";

const items_images = [item1, item2, item3, item4, item5, item6, item7, item8];

const knapsack = new Knapsack();
export default function ItemList() {
  const [itemsOnBag, setItemsOnBag] = useState([]);
  const [weightItemsOnBag, setWeightItemsOnBag] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [userWin, setUserWin] = useState(false);

  useEffect(() => {
    const sumItemsOnBag = () => {
      if (itemsOnBag) {
        let totalValue = 0;
        itemsOnBag.forEach((item) => {
          totalValue += item.info.weight;
        });
        setWeightItemsOnBag(totalValue);
      }
    };
    sumItemsOnBag();
  }, [itemsOnBag]);

  useEffect(() => {
    knapsack.run();
  }, []);

  const compareAnswer = () => {
    if (itemsOnBag) {
      var userPoint = 0;
      itemsOnBag.forEach((item) => {
        userPoint += item.info.value;
      });
      if (userPoint === knapsack.answer) {
        setUserWin(true);
      } else {
        setUserWin(false);
      }
      setGameEnd(true);
    }
  };

  const handleAddEvent = (item) => {
    let itemExits = false;
    itemsOnBag.forEach((i) => {
      if (i.id === item.id) {
        itemExits = true;
      }
    });
    if (itemExits) {
      const itemsUpdated = itemsOnBag.filter((i) => i.id !== item.id);
      setItemsOnBag(itemsUpdated);
    } else setItemsOnBag([...itemsOnBag, item]);
  };

  const renderItems = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
      <Item
        img={`item${index}`}
        addItem={handleAddEvent}
        itemsOnBag={itemsOnBag}
        item={{ id: index, info: knapsack.items[index] }}
        image={items_images[index]}
        key={index}
      />
    ));
  };

  const renderEndGame = () => (
    <VStack>
      <Image src={userWin ? leonWin : leonLose} />
      <Text
        color={userWin ? "green" : "red"}
        fontFamily="Nunito Sans"
        fontSize="4xl"
        fontWeight="bold"
      >
        {userWin ? textWin : textLose}
      </Text>
      <Button
        fontSize="4xl"
        onClick={() => {
          window.location.reload();
        }}
      >
        <Text px="40px" fontFamily="Nunito Sans" fontSize="4xl">
          Reiniciar
        </Text>
      </Button>
    </VStack>
  );

  const renderGame = () => (
    <>
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
              Peso Máximo: {knapsack.max_weight}Kg
            </Text>
            <Text
              color="#FFF"
              fontSize="4xl"
              fontFamily="Nunito Sans"
              fontWeight="bold"
              alignSelf="flex-start"
            >
              Peso Atual: {weightItemsOnBag}Kg
            </Text>
          </VStack>
          <Spacer />
          <Button
            fontSize="4xl"
            disabled={!itemsOnBag.length}
            onClick={compareAnswer}
          >
            <Text px="40px">Enviar</Text>
          </Button>
        </HStack>
      </VStack>
      <VStack>
        <Box w="50%">
          <Text
            color="#FFF"
            fontSize="4xl"
            fontWeight="bold"
            fontFamily="Nunito Sans"
          >
            {homePageText}
          </Text>
        </Box>
        <Center>
          <Image src={leonBazuka} position="absolute" />
          <Image src={backpack} zIndex={5} pt="300" />
        </Center>
      </VStack>
    </>
  );

  return (
    <Box w="100vw" h="95vh" bg="#363D38" d="flex" alignItems="center" px="10">
      <HStack w="100vw" d="flex" justifyContent="space-around">
        {gameEnd ? renderEndGame() : renderGame()}
      </HStack>
    </Box>
  );
}
