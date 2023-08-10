import { Select } from '@chakra-ui/react'
import { getCategories } from '@services/ChuckNorrisApi'
import { useCallback, useEffect, useState } from 'react'

type CategoriesSelectProps = {
    onChange: (value: string) => void 
}

const CategoriesSelect = ({onChange}:CategoriesSelectProps) => {

  const [categories, setCategories] = useState<string[]>([])

  const fetchCategory = useCallback(async () => {
    const response = await getCategories()
    setCategories(response)
  }, [])

useEffect(() => {
    fetchCategory()
}, [])


  return (
    <Select  variant='outline' bg='orange.200' borderColor='orange.700'  w='20rem' placeholder='Qual seu tipo de humor?' onChange={({target}) => onChange(target.value)}>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </Select>
  )
}

export default CategoriesSelect
