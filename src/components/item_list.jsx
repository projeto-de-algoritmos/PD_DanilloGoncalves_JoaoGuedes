import { Box, Center, SimpleGrid } from "@chakra-ui/layout";
import Item from "./item";
export default function ItemList(props){
    const renderItems = () => {
        return [0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
            <Item img={`item${index}`} key={index}/>
          ));
    }
    return (
        <Box w="100vw" h="95vh" bg="#363D38">
            <Center w="50vw" h="60vh" bg="#908787" borderRadius="30">
                <SimpleGrid templateColumns="repeat(4, 2fr)" gap={10}>
                    {renderItems()}
                </SimpleGrid>
            </Center>
        </Box>
    );
}