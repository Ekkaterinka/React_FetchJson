import Data from './components/Data'

import './App.css'

function App() {

  return (
    <>
      <Data url={"http://localhost:7070/data"} />
      <Data url={"http://localhost:7070/loading"} />
      <Data url={"http://localhost:7070/error"} />
    </>
  )
}

export default App
