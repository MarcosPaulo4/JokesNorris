import { Button, Center, Flex } from '@chakra-ui/react'
import CategoriesSelect from '@components/CategoriesSelect'
import Header from '@components/Header'
import Joke from '@components/Joke'
import { IJoke, getJoke } from '@services/ChuckNorrisApi'
import { useCallback, useEffect, useState } from 'react'


const Home = () => {
  const [joke, setJoke] = useState<IJoke | null>()
  const [selectedCategory, setSelectedCategory] = useState<string>()

  
    const fetchJoke = useCallback( async (category?:string) =>{
      const response = await getJoke(category)
      setJoke(response)
    }, [])

  useEffect(()  => {
      fetchJoke(selectedCategory)
  }, [selectedCategory])



  return (
    <>
    <Header/>
    <Center flexDir='column' w='100vw' h='80vh'>
     <Joke categories={joke?.categories} url={joke?.url} value={joke?.value}/>
  </Center>
    <Flex justifyContent='space-around' w='full'>
      <CategoriesSelect  onChange={setSelectedCategory} />
      <Button border='2px' borderColor='orange.700' bg='orange.300' _hover={{bg:'orange.500', borderColor: 'black'}} onClick={() => fetchJoke(selectedCategory) }>Make a Joke</Button>
    </Flex>

    
    </>

  ) 

}

export default Home
