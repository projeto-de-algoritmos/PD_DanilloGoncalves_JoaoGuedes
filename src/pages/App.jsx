import { Center } from "@chakra-ui/layout";
import ItemList from "../components/item_list";

export default function App() {
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
      <ItemList/>
    </>
  );
}

