import React from 'react';
import Robot from './Robot';

interface GridProps {
  robotX: number;
  robotY: number;
  robotDirection: 'N' | 'E' | 'S' | 'W';
}

const Grid: React.FC<GridProps> = ({ robotX, robotY, robotDirection }) => {
  // Create an array of 25 elements to represent the 5x5 grid
  const cells = Array(25).fill(null);

  return (
    <div className="relative w-80 h-80 bg-bellroy-tan grid grid-cols-5 gap-1 p-1 rounded-lg shadow-lg">
      {/* Render grid cells */}
      {cells.map((_, index) => (
        <div key={index} className="bg-bellroy-blue bg-opacity-10 rounded relative"></div>
      ))}
        {/* Render the Robot component, passing its position and direction */}
        <Robot x={robotX} y={robotY} direction={robotDirection} />
    </div>
  );
};

export default Grid;