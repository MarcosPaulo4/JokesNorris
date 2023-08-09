import { Box, Flex, Image } from "@chakra-ui/react";

function Header() {
    return (
        <Flex mb='30px'>
        <Box>
            <Image
            src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png" 
            alt="ChuckNorris"
            />
        </Box>
        </Flex>

    )
}

export default Header;