import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(1)

const handleChange=(e)=>{
  setInputValue(Number(e.target.value))
}

  return (
    <>
      
      <div className="card">
      Count: {count}

        <button onClick={() => setCount((count) => count + 1)}>
    Increment
        
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
 Decrement
        </button>
        <button onClick={() => setCount(0)}>
Reset
        </button>
        <input type='text' value={inputValue} onChange={handleChange}/>

        <button onClick={()=> setCount(count + inputValue)}>
 Increment
        </button>
        <button onClick={()=> setCount(count - inputValue)}>
 Decrement
        </button>
        </div>
    
    </>
  )
}

export default App
