import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

const handleChange=(e)=>{
  setInputValue(Number(e.target.value))
}

  return (
    <>
      <h1>COUNTER APP</h1>
      <div className='count'>Count: {count}</div>

      <div className="card">


        <button onClick={() => setCount((count) => count + 1)}>
    Increment
        
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
 Decrement
        </button>
        <button onClick={() => setCount(0)}>
Reset
        </button>
        <button onClick={() => setCount((count) => count + 3)}>
 Increment by 3
        </button>
        <button onClick={() => setCount((count) => count - 3)}>
 Decrement by 3
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
