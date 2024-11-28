import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  // Handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle evaluation of the expression
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Handle clearing the input
  const handleClear = () => {
    setInput('');
  };

  // Handle deleting the last character
  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="App">
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
          }

          .App {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          .calculator {
            width: 280px;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .display {
            width: 100%;
            height: 60px;
            text-align: right;
            font-size: 2.5rem;
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 10px;
            background-color: #f9f9f9;
            color: #333;
          }

          .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 10px;
          }

          .btn {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
            cursor: pointer;
            border: none;
            background-color: #f0f0f0;
            border-radius: 10px;
            transition: background-color 0.3s ease;
          }

          .btn:hover {
            background-color: #ddd;
          }

          .operator {
            background-color: #f9a825;
            color: white;
          }

          .operator:hover {
            background-color: #f57f17;
          }

          .clear {
            background-color: #e53935;
            color: white;
          }

          .clear:hover {
            background-color: #d32f2f;
          }

          .delete {
            background-color: #8e24aa;
            color: white;
          }

          .delete:hover {
            background-color: #7b1fa2;
          }

          .equals {
            background-color: #43a047;
            color: white;
            grid-column: span 2;
          }

          .equals:hover {
            background-color: #388e3c;
          }

          .zero {
            grid-column: span 2;
          }
        `}
      </style>

      <div className="calculator">
        <input type="text" className="display" value={input} readOnly />
        <div className="buttons">
          <button onClick={handleClear} className="btn clear">C</button>
          <button onClick={handleDelete} className="btn delete">DEL</button>
          <button onClick={() => handleClick('/')} className="btn operator">/</button>
          <button onClick={() => handleClick('*')} className="btn operator">*</button>

          <button onClick={() => handleClick('7')} className="btn">7</button>
          <button onClick={() => handleClick('8')} className="btn">8</button>
          <button onClick={() => handleClick('9')} className="btn">9</button>
          <button onClick={() => handleClick('-')} className="btn operator">-</button>

          <button onClick={() => handleClick('4')} className="btn">4</button>
          <button onClick={() => handleClick('5')} className="btn">5</button>
          <button onClick={() => handleClick('6')} className="btn">6</button>
          <button onClick={() => handleClick('+')} className="btn operator">+</button>

          <button onClick={() => handleClick('1')} className="btn">1</button>
          <button onClick={() => handleClick('2')} className="btn">2</button>
          <button onClick={() => handleClick('3')} className="btn">3</button>
          <button onClick={handleEvaluate} className="btn equals">=</button>

          <button onClick={() => handleClick('0')} className="btn zero">0</button>
          <button onClick={() => handleClick('.')} className="btn">.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
