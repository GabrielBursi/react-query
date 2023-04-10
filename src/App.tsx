import { useEffect, useState } from "react";
import { CardComponent, FilterAge, FilterCardPerPage, PaginationComponent } from "./components"

import './index.css'
import axios from "axios";
import { IData } from "./types";
import { Flex } from "@chakra-ui/react";

function App() {

  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    axios('https://swapi.dev/api/people/').then(({data}: {data: {results: IData[]}}) => {
      setData(data.results);
    })
  }, []);

  return (
    <div className="App">
      <Flex gap={14} w='50%' h='20%' justifyContent='center' alignItems='center'>
        <FilterAge/>
        <FilterCardPerPage/>
      </Flex>
      <main>
        {data.map(person => (
          <CardComponent 
            key={person.name}
            name={person.name}
            birth_year={person.birth_year}
            gender={person.gender}
            height={Number(person.height)}
            mass={Number(person.mass)}
          />
        ))}
      </main>
      <footer>
        <PaginationComponent/>
      </footer>
    </div>
  )
}

export default App
