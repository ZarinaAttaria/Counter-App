import { useState } from 'react'
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
      <div className='count'>Your Count is: {count}</div>

      <div className="card">

<div className='button-row'>

        <button type="button" class="btn btn-info incColor" onClick={() => setCount((count) => count + 1)}>
    Increment (+1)
        
        </button>
        <button type="button" class="btn btn-info decColor" onClick={() => setCount((count) => count - 1)}>
 Decrement (-1)
        </button>
</div>

        <div className='button-row'>
        <button type="button" class="btn btn-info incColor" onClick={() => setCount((count) => count + 3)}>
 Increment (+3)
        </button>
        <button type="button" class="btn btn-info decColor"  onClick={() => setCount((count) => count - 3)}>
 Decrement (-3)
        </button>
        </div>
       
        <input  class="form-control me-2 inp"  aria-label="Search" type='text' value={inputValue} onChange={handleChange} placeholder='Enter number here'/>

<div className='button-row'>

        <button type="button" class="btn btn-info incColor" onClick={()=> setCount(count + inputValue)}>
            Increment
        </button>
        <button type="button" class="btn btn-info decColor" onClick={()=> setCount(count - inputValue)}>
 Decrement
        </button>
</div>
<button type="button" class="btn btn-danger resetBtn " onClick={() => setCount(0)}>
Reset
        </button>
        </div>
    
    </>
  )
}

export default App
