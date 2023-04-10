import { Select } from '@chakra-ui/react'
import './style.css'

export const FilterCardPerPage = () => {
    return (
        <Select bg='#14253d' color='#fff'>
            <option value='option1'>10 por página</option>
            <option value='option2'>20 por página</option>
            <option value='option3'>30 por página</option>
        </Select>
    )
}
