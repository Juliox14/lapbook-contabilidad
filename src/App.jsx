import { useState } from 'react'
import Lapbook from './components/Lapbook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lapbook />
    </>
  )
}

export default App
