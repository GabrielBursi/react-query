import { Card, FilterAge, FilterCardPerPage, Pagination } from "./components"

import './index.css'

function App() {

  return (
    <div className="App">
      <nav>
        <FilterAge/>
        <FilterCardPerPage/>
      </nav>
      <main>
        {[1,2,3,1,2,3,1].map(item => (
          <Card key={item}/>
        ))}
      </main>
      <footer>
        <Pagination/>
      </footer>
    </div>
  )
}

export default App
