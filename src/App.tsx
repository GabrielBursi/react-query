import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Modal from 'react-modal';
import { CardComponent, FilterAge, FilterCardPerPage, PaginationComponent } from "./components"

import './index.css'
import { Flex, Spinner } from "@chakra-ui/react";
import { getData } from "./services";

Modal.setAppElement('#root');

function App() {

  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(['star-wars', page], () => getData(page),{
    staleTime: 100000
  })

  return (
    <div className="App">
      <Flex gap={14} w='50%' h='20%' justifyContent='center' alignItems='center'>
        <FilterAge/>
        <FilterCardPerPage/>
      </Flex>
      <main>
        { isLoading ?
          <Spinner size='xl' className="spinner" color="#fff"/>
            :
            data && data.map(person => (
              <CardComponent 
                key={person.name}
                name={person.name}
                birth_year={person.birth_year}
                gender={person.gender}
                height={Number(person.height)}
                mass={Number(person.mass)}
              />
          ))
        }
      </main>
      <footer>
        <PaginationComponent
          page={page}
          setPage={setPage}
        />
      </footer>
    </div>
  )
}

export default App
