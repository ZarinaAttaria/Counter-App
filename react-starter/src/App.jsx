import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const handleChange=()=>{
  setCount(e.target.value)
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
        </div>
    
    </>
  )
}

export default App
