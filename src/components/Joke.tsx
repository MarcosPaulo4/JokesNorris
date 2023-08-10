import { Flex, HStack, Link, Tag, TagLabel, TagLeftIcon, Text, Tooltip } from "@chakra-ui/react";
import { IJoke } from "@services/ChuckNorrisApi";
import { AiOutlineTags } from 'react-icons/ai';


type JokeProps = Partial<IJoke>
    


const Joke = ({value, url, categories}: JokeProps) => {
    return (
        <Flex  flexDir='column' alignItems='center' justifyContent='center' minHeight='100v' > 
        <Link color='orange.100' href={url} isExternal>
            <Text fontSize='3vw' color='yellow.400' textAlign='center'>{value}</Text>
        </Link>
            <HStack spacing={3}>
                {categories?.map((category) => (
                    <Tooltip label={`Categoria: ${category.toLowerCase()}`} key={category}>
                        <Tag color='yellow.900'>
                        <TagLeftIcon as={AiOutlineTags} />
                        <TagLabel>{category}</TagLabel>
                    </Tag>
                    </Tooltip>
                    
                ))}
            </HStack>
            
        </Flex>
    )
}

export default Joke;