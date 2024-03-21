import './index.css';

import React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from "./App";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
// Arrow Function
// const hello = () => {

// }

// React uses old style function
// function Hello({name, age}) {
//   // console.log(props);
//   // const name = props.name;
//   // const age = props.age;
//   // This line below is same above but in 1 line
//   // const {name, age} = props;

//   return (
//     <div className="container">
//       <h1>I am {name}, {age} years old!</h1>
//     </div>
//   );
// }
