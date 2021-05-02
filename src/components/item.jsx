import { Center, Image, Box, Flex, Text } from "@chakra-ui/react";
export default function Item({ id, addItem, itemsOnBag, itemInfo, image }) {
  const returnColor = () => {
    if (itemsOnBag) {
      return itemsOnBag.includes(id) ? "#00FF00" : "#C4C4C4";
    }
    return "#C4C4C4";
  };
  return (
    <Flex
      w="20vh"
      h="20vh"
      borderRadius="30"
      bg={returnColor}
      onClick={() => addItem(id)}
      _hover={{
          cursor:"pointer"
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
         {itemInfo?.weight ?? 10}Kg
      </Center>
      <Image src={image}/>
      <Text position="absolute" alignSelf="flex-end"  margin="10px">${itemInfo?.value ?? 10}</Text>
    </Flex>
  );
}
