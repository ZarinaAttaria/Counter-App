import { useState } from "react";
import "./App.css";

function Button({ onClick, className, children }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value !== "") {
      setInputValue(Number(value));
    } else {
      setInputValue("");
      alert("Enter a valid number");
    }
  };

  const handleIncrement = (value) => {
    setCount((count) => count + value);
  };

  const handleDecrement = (value) => {
    setCount((count) => count - value);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>COUNTER APP</h1>
      <div className="count" data-testid="count">
        Your Count is: {count}
      </div>

      <div className="card">
        <div className="button-row">
          <Button
            className="btn btn-info increment_Color"
            onClick={() => handleIncrement(1)}
          >
            Increment (+1)
          </Button>
          <Button
            className="btn btn-info decrement_Color"
            onClick={() => handleDecrement(1)}
          >
            Decrement (-1)
          </Button>
        </div>

        <div className="button-row">
          <Button
            className="btn btn-info increment_Color"
            onClick={() => handleIncrement(3)}
          >
            Increment (+3)
          </Button>
          <Button
            className="btn btn-info decrement_Color"
            onClick={() => handleDecrement(3)}
          >
            Decrement (-3)
          </Button>
        </div>

        <input
          className="form-control me-2 input_Field"
          aria-label="Search"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter number here"
        />

        <div className="button-row">
          <Button
            className="btn btn-info increment_Color"
            onClick={() => handleIncrement(Number(inputValue))}
          >
            Increment (+{inputValue || 0})
          </Button>
          <Button
            className="btn btn-info decrement_Color"
            onClick={() => handleDecrement(Number(inputValue))}
          >
            Decrement (-{inputValue || 0})
          </Button>
        </div>
        <Button className="btn btn-danger reset_Btn" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </>
  );
}

export default App;
