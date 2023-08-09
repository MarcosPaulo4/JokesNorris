import axios from 'axios'

const BASE_URL = 'https://api.chucknorris.io/jokes'
const chuckNorrisHttp = axios.create({
    baseURL: BASE_URL
})

export interface IJoke {
    categories: string[],
    created_at: Date,
    icon_url: string,
    id: string,
    updated_at: Date,
    url: string,
     value: string,
}


export const getJoke = async (category?: string): Promise<IJoke> => {
    const params = {}
    try {
        const response = await chuckNorrisHttp.get<IJoke>('/random', {
            params: {
                ...(category && {category}) 
            }
        })
        return response.data
    } catch (error) {
        console.error(error)
    }

}

export const getCategories = async (): Promise<string[]> => {
    try {
        const response = await chuckNorrisHttp.get<string[]>('/categories', {
        })
        return response.data
    } catch (error) {
        throw new Error('Erro', error)
    }
}