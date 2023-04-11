import { useState } from 'react';
import { CardHeader, Card, Heading, CardBody, Text, CardFooter, Button, Input, RadioGroup, Stack, Radio } from '@chakra-ui/react'
import Modal from 'react-modal';
import { IData } from '../../types'
import './style.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const CardComponent = ({birth_year, gender, height, mass, name}: IData) => {

    const [character, setCharacter] = useState<IData>({ birth_year, gender, height, mass, name });
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <Modal
            isOpen={isOpen}
            onRequestClose={() =>  setIsOpen(false)}
            style={customStyles}
            overlayClassName="Overlay"
        >
                <Text mb='8px'>Nome: {character.name}</Text>
                <Input
                    value={character.name}
                    placeholder='Digite o novo nome'
                    size='lg'
                    mb='8px'
                    onChange={(e) => setCharacter(old => ({...old, name: e.target.value}))}
                />
                <Text mb='8px'>Gênero: {character.gender}</Text>
                <RadioGroup defaultValue={character.gender} mb='8px'>
                    <Stack spacing={5} direction='row'>
                        <Radio colorScheme='blue' value='male' onChange={(e) => setCharacter(old => ({ ...old, gender: e.target.value }))}>
                            Male
                        </Radio>
                        <Radio colorScheme='pink' value='female' onChange={(e) => setCharacter(old => ({ ...old, gender: e.target.value }))}>
                            Female
                        </Radio>
                        <Radio colorScheme='green' value='n/a' onChange={(e) => setCharacter(old => ({ ...old, gender: e.target.value }))}>
                            n/a
                        </Radio>
                    </Stack>
                </RadioGroup>
                <Text mb='8px'>Data de Nascimento: {character.birth_year}</Text>
                <Input
                    value={character.birth_year}
                    placeholder='Digite a nova data'
                    size='lg'
                    mb='8px'
                    onChange={(e) => setCharacter(old => ({...old, birth_year: e.target.value}))}
                />
                <Text mb='8px'>Altura: {character.height}</Text>
                <Input
                    value={character.height}
                    placeholder='Digite a nova altura'
                    size='lg'
                    mb='8px'
                    onChange={(e) => setCharacter(old => ({ ...old, height: Number(e.target.value) }))}
                    type='number'
                />
                <Text mb='8px'>Massa: {character.mass}</Text>
                <Input
                    value={character.mass}
                    placeholder='Digite a nova massa'
                    size='lg'
                    mb='8px'
                    onChange={(e) => setCharacter(old => ({...old, mass: Number(e.target.value)}))}
                    type='number'
                />
                <Button color='#fff' bg='#14253d' mt='8px' onClick={()=>setIsOpen(false)}>
                    Confirmar
                </Button>
        </Modal>
        <Card bgColor='#14253d' color='#ffffff'>
            <CardHeader>
                <Heading size='lg'
                mb='8px'>{character.name}</Heading>
                <Text>{character.gender} - {character.birth_year}</Text>
            </CardHeader>
            <CardBody>
                <Text>{character.height}</Text>
                <Text>{character.mass}</Text>
            </CardBody>
            <CardFooter>
                <Button color='#14253d' bg='#fff' onClick={() => setIsOpen(true)}>
                    Editar Personagem
                </Button>
            </CardFooter>
        </Card>
        </>
    )
}
