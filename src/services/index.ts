import axios from "axios"
import { IData } from "../types"

export const getData = async (page:number) => {
    const {data}= await axios(`https://swapi.dev/api/people/?page=${page}`)
    return data.results as IData[]
}