import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Flex } from "@chakra-ui/react"

interface Props {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export const PaginationComponent = ({page, setPage}: Props) => {
    return (
        <Flex gap={4}>
            <Button 
                color='#fff' 
                bgColor='#14253d' 
                colorScheme="teal" 
                size='lg' 
                leftIcon={<ArrowBackIcon />}
                disabled={page === 1}
                onClick={() => {
                    setPage(oldPage => Math.max(oldPage - 1, 1))
                }}
            >
                Voltar
            </Button>
            {page}
            <Button 
                color='#fff' 
                bgColor='#14253d' 
                colorScheme="teal" 
                size='lg' 
                rightIcon={<ArrowForwardIcon />}
                disabled={page === 8}
                onClick={() => {
                    setPage(oldPage => {
                        if(oldPage === 8){
                            return 8
                        }
                        return oldPage + 1
                    })
                }}
            >
                Próxima
            </Button>
        </Flex>
    )
}
