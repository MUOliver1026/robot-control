import React from 'react';

interface RobotProps {
  x: number;
  y: number;
  direction: 'N' | 'E' | 'S' | 'W';
}

const Robot: React.FC<RobotProps> = ({ x, y, direction }) => {
  // Map directions to arrow symbols
  const directionArrow = {
    'N': '↑',
    'E': '→',
    'S': '↓',
    'W': '←'
  };

  return (
    <div className="absolute bg-bellroy-orange text-white flex items-center justify-center w-1/5 h-1/5 text-2xl font-bold rounded-full"
         style={{ left: `${x * 20}%`, top: `${y * 20}%`, transition: 'all 0.3s' }}>
        {/* Robot body (circle) with centered direction arrow */}
        {directionArrow[direction]}
    </div>
  );
};

export default Robot;