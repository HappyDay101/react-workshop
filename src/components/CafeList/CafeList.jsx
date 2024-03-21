import React from 'react';
import Cafe from "../Cafe/Cafe";
import "./CafeList.css";

// rsf + tab creates skelton of React Component
function CafeList({cafes}) {
  // const names = ["DDSK SAIGON KITCHEN", "Common", "Starbucks"];

  return (
    <div className="cafe-list">
      {cafes.map((cafe) => (
        <Cafe cafe={cafe} key={cafe} />
      ))}
    </div>
  );
}

export default CafeList;
