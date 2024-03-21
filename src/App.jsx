// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CafeList from "./components/CafeList/CafeList";
import React from "react";

export default function App() {
  // const cafes = [];

  // React hook for states
  const [cafes, setCafes] = React.useState([]);
  // cafes which is the stat
  // setCafes is function that changes the state for example: setCafes([..., ...])

  const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes";
  fetch(url)
  .then(response => response.json())
  .then(data => {
    setCafes(data);
    // data.forEach( cafeData => {
    // });
  });

  return(
    <div className="app-frame">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <CafeList cafes={cafes}/>
      </div>
    </div>
  );
}
