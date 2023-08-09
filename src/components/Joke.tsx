import { Flex, HStack, Link, Tag, TagLabel, TagLeftIcon, Text, Tooltip } from "@chakra-ui/react";
import { IJoke } from "@services/ChuckNorrisApi";
import { AiOutlineTags } from 'react-icons/ai';


type JokeProps = Partial<IJoke>
    


const Joke = ({value, url, categories}: JokeProps) => {
    return (
        <Flex justifyContent='center' flexDir='column' borderColor='orange.700' p={4} borderWidth='1px' borderRadius='md' w={'full'}> 
            <Text color='orange.900' as={Link} href={url} isExternal textAlign={'center'}>{value}</Text>
            <HStack spacing={3} justifyContent='center'>
                {categories?.map((category) => (
                    <Tooltip label={`Categoria: ${category.toLowerCase()}`}>
                        <Tag key={category} colorScheme='teal'>
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