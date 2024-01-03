import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(5)



  const addValue = () => {
    setCounter(counter + 1)
    console.log(counter)
  }

  const removeVal = () => {
    if (counter > 0)
      setCounter(counter - 1);
    console.log(counter)
  }


  return (
    <>
      <h1>-- HELLO --</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeVal}>remove value</button>
    </>
  )
}

export default App
