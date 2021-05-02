import { Center, Image, Flex, Text } from "@chakra-ui/react";
export default function Item({ addItem, itemsOnBag, image, item }) {
  const returnColor = () => {
    if (itemsOnBag) {
      let itemExits = false;
      itemsOnBag.forEach((i) => {
        if (i.id === item.id) {
          itemExits = true;
        }
      });
      if (itemExits) return "#00FF00";
    }
    return "#C4C4C4";
  };
  return (
    <Flex
      w="20vh"
      h="20vh"
      borderRadius="30"
      bg={returnColor}
      onClick={() => addItem(item)}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Center
        bgColor="yellow"
        width="50px"
        height="50px"
        position="absolute"
        display="flex"
        margin="10px"
        borderRadius="25px"
      >
        {item.info.weight ?? 10}Kg
      </Center>
      <Image src={image} />
      <Text position="absolute" alignSelf="flex-end" margin="10px">
        ${item.info.value ?? 10}
      </Text>
    </Flex>
  );
}
