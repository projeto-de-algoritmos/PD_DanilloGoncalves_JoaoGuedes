import { Center } from "@chakra-ui/layout";
export default function Item({ id, addItem, itemsOnBag }) {
  const returnColor = () => {
    if (itemsOnBag) {
      return itemsOnBag.includes(id) ? "#00FF00" : "#C4C4C4";
    }
    return "#C4C4C4";
  };
  return (
    <Center
      w="20vh"
      h="20vh"
      borderRadius="30"
      bg={returnColor}
      onClick={() => addItem(id)}
      _hover={{
          cursor:"pointer"
      }}
    >
      <p>Imagem</p>
    </Center>
  );
}
