import React, { useState } from 'react';
import './cssSection.css';

const CssSection = () => {
  const [squares, setSquares] = useState(Array.from({ length: 256 }));

  const handleClick = (index) => {
    setSquares((prevSquares) => {
      const newSquares = [...prevSquares];
      newSquares[index] = !newSquares[index];
      return newSquares;
    });
  };

  return (
    <div className='mainCssSection'>
      {squares.map((isFilled, i) => (
        <div
          key={i}
          className={`square ${isFilled ? 'filled' : ''}`}
          onClick={() => handleClick(i)}
        ></div>
      ))}
    </div>
  );
};

export default CssSection;
