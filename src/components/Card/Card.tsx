import { CardHeader, Card, Heading, CardBody, Button, CardFooter, Text } from '@chakra-ui/react'
import { IData } from '../../types'
import './style.css'

export const CardComponent = ({birth_year, gender, height, mass, name}: IData) => {
    return (
        <Card bgColor='#14253d' color='#ffffff'>
            <CardHeader>
                <Heading size='lg'>{name}</Heading>
                <Text>{gender} - {birth_year}</Text>
            </CardHeader>
            <CardBody>
                <Text>{height}</Text>
                <Text>{mass}</Text>
            </CardBody>
        </Card>
    )
}
