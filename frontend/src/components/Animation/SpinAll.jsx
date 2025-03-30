import React from "react";

import "./spinAll.css";

export function SpinAll() {
  return (
    <div className="container">
      {Array.from({ length: 8 }, (_, ringIndex) => (
        <div key={ringIndex} className={`ring ring-${ringIndex + 1}`}>
          {Array.from({ length: 4 }, (_, dotIndex) => (
            <div key={dotIndex} className={`dot dot-${dotIndex + 1}`}></div>
          ))}
        </div>
      ))}
    </div>
  );
}
