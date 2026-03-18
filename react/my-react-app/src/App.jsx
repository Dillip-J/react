import { useState } from "react";
import { add, subtract, multiply, divide } from "./math";

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const calculate = () => {

    const a = Number(num1);
    const b = Number(num2);

    let res;

    if (operator === "+") {
      res = add(a, b);
    }
    else if (operator === "-") {
      res = subtract(a, b);
    }
    else if (operator === "*") {
      res = multiply(a, b);
    }
    else if (operator === "/") {
      res = divide(a, b);
    }

    setResult(res);
  };

  return (
    <div>
      <h2>React Calculator</h2>

      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={calculate}>Calculate</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   return (
//     <>
//     <section id="center">
//          <div className="hero">
//            <img src={heroImg} className="base" width="170" height="179" alt="" />
//            <img src={reactLogo} className="framework" alt="React logo" />
//            <img src={viteLogo} className="vite" alt="Vite logo" />         
//            </div>
//       <h1>Hello Dillip 🚀</h1>
//       <p>My first React app is running.</p>
//     </section>
//     </>
//   )
// }


// export default App
