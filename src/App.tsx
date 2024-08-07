import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from './components/Grid';
import { RootState, moveForward, rotate } from './store';

const App: React.FC = () => {
  // State to track robot's position and direction
  const dispatch = useDispatch();
  const { x, y, direction } = useSelector((state: RootState) => state.robot);

  return (
    <div className="h-screen w-screen bg-bellroy-blue flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-bellroy-tan mb-8">Robot Control</h1>
      <Grid robotX={x} robotY={y} robotDirection={direction} />
      <div className="mt-8 flex gap-4">
        <button onClick={() => dispatch(moveForward())} className="bg-bellroy-orange text-white px-4 py-2 rounded hover:bg-opacity-80 transition">
          Move Forward
        </button>
        <button onClick={() => dispatch(rotate('left'))} className="bg-bellroy-tan text-bellroy-blue px-4 py-2 rounded hover:bg-opacity-80 transition">
          Rotate Left
        </button>
        <button onClick={() => dispatch(rotate('right'))} className="bg-bellroy-tan text-bellroy-blue px-4 py-2 rounded hover:bg-opacity-80 transition">
          Rotate Right
        </button>
      </div>
    </div>
  );
};

export default App;