import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function addValue() {
    if (counter < 97) {
      setCounter(counter + 1);
    }
  }

  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function jumpValueByTwo() {
    if (counter <= 95) { // Ensure counter stays within 0 to 97
      setCounter((prevValue) => prevValue + 2);
    } else if (counter === 96) {
      setCounter(97); // Edge case for when counter is at 96
    }
  }

  return (
    <>
      <h1>Aldehyde and Ketone</h1>
      <h2>Counter value: {counter}</h2>
      <div className="button-container">
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
        <button onClick={jumpValueByTwo}>Jump Two Value</button>
      </div>
    </>
  );
}

export default App;
