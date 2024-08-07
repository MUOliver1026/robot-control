import React, { useState } from 'react';
import Grid from './components/Grid';

const App: React.FC = () => {
  // State to track robot's position and direction
  const [robotX, setRobotX] = useState(0);
  const [robotY, setRobotY] = useState(0);
  const [robotDirection, setRobotDirection] = useState<'N' | 'E' | 'S' | 'W'>('N');

  // Function to move the robot forward
  const moveForward = () => {
    switch (robotDirection) {
      case 'N':
        // Move up, but not above the grid
        setRobotY((y) => Math.max(0, y - 1));
        break;
      case 'E':
        // Move right, but not beyond the grid
        setRobotX((x) => Math.min(4, x + 1));
        break;
      case 'S':
        // Move down, but not below the grid
        setRobotY((y) => Math.min(4, y + 1));
        break;
      case 'W':
        // Move left, but not beyond the grid
        setRobotX((x) => Math.max(0, x - 1));
        break;
    }
  };

  // Function to rotate the robot
  const rotate = (direction: 'left' | 'right') => {
    const directions: ('N' | 'E' | 'S' | 'W')[] = ['N', 'E', 'S', 'W'];
    const currentIndex = directions.indexOf(robotDirection);
    let newIndex;
    if (direction === 'left') {
      // Rotate left (counterclockwise)
      newIndex = (currentIndex - 1 + 4) % 4;
    } else {
      // Rotate right (clockwise)
      newIndex = (currentIndex + 1) % 4;
    }
    setRobotDirection(directions[newIndex]);
  };

  return (
    <div className="min-h-screen bg-bellroy-blue flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-bellroy-tan mb-8">Robot Control</h1>
      {/* Pass robot state to Grid component */}
      <Grid robotX={robotX} robotY={robotY} robotDirection={robotDirection} />
      <div className="mt-8 flex gap-4">
        {/* Control buttons */}
        <button onClick={moveForward} className="bg-bellroy-orange text-white px-4 py-2 rounded hover:bg-opacity-80 transition">
          Move Forward
        </button>
        <button onClick={() => rotate('left')} className="bg-bellroy-tan text-bellroy-blue px-4 py-2 rounded hover:bg-opacity-80 transition">
          Rotate Left
        </button>
        <button onClick={() => rotate('right')} className="bg-bellroy-tan text-bellroy-blue px-4 py-2 rounded hover:bg-opacity-80 transition">
          Rotate Right
        </button>
      </div>
    </div>
  );
};

export default App;