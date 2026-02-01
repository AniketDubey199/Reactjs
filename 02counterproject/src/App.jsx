import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  const removeCount = () => {
    if(count == 0 ){
      count = 1
    }
    setCount( count - 1)
  }

  return (
    <>
      <h1>Chai aur Code</h1>
      <p>counter : {count} </p>
      <button
        onClick={addCount}>
          Add count</button>
      <br />
      <button
        onClick={removeCount}
      >Decr Count</button>
    </>
  )
}

export default App
