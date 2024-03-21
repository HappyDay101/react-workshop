import './index.css';

import React from 'react';
import * as ReactDOM from 'react-dom/client';

// Arrow Function
// const hello = () => {

// }

function Hello() {
  return <h1>Hello</h1>;
}

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Hello />);
