import React, { useState } from 'react';
import './style.css'

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  function increase(num1, num2) {
    return -(-num1 - num2);
  }
  function decrease(num1, num2) {
    return (num1 - num2);
  }
  function times(num1, num2) {
    return (num1 * num2);
  }
  function division(num1, num2) {
    return (num1 / num2);
  }
  function reset() {
    setNumber1(0);
    setNumber2(0);
    setResult(0);
  }
  return (
    <div className='calculadora'>
      <div className='orientacao'>
        <h2>Digite os numeros nos espacos abaixo</h2>
      </div>
      <div className='valores'>
        <input placeholder='Primero Número' value={number1} onChange={(e) => setNumber1(e.target.value)} />
        <input placeholder='Segundo Número' value={number2} onChange={(e) => setNumber2(e.target.value)} />
      </div>
      <div clasname='operadores'>
        <button className="soma" onClick={() => setResult(increase(number1, number2))}>+</button>
        <button className="diferenca" onClick={() => setResult(decrease(number1, number2))}>-</button>
        <button className='multiplicacao' onClick={() => setResult(times(number1, number2))}>*</button>
        <button className='divisao' onClick={() => setResult(division(number1, number2))}>/</button>
        <button className='reset' onClick={() => reset()}>reset</button>
      </div>
      <div className='result'>
        <h3>Resultado:{result}</h3>
      </div>
    </div >
  )
}
