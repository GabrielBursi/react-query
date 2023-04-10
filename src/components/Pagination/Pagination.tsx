import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Flex } from "@chakra-ui/react"

export const PaginationComponent = () => {
    return (
        <Flex gap={4}>
            <Button color='#fff' bgColor='#14253d' colorScheme="teal" size='lg' leftIcon={<ArrowBackIcon />}>
                Voltar
            </Button>
            <Button color='#fff' bgColor='#14253d' colorScheme="teal" size='lg' rightIcon={<ArrowForwardIcon />}>
                Próxima
            </Button>
        </Flex>
    )
}
