import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RobotState {
  x: number;
  y: number;
  direction: 'N' | 'E' | 'S' | 'W';
}

const initialState: RobotState = {
  x: 0,
  y: 0,
  direction: 'N',
};

const robotSlice = createSlice({
  name: 'robot',
  initialState,
  reducers: {
    moveForward: (state) => {
      switch (state.direction) {
        case 'N':
          state.y = Math.max(0, state.y - 1);
          break;
        case 'E':
          state.x = Math.min(4, state.x + 1);
          break;
        case 'S':
          state.y = Math.min(4, state.y + 1);
          break;
        case 'W':
          state.x = Math.max(0, state.x - 1);
          break;
      }
    },
    rotate: (state, action: PayloadAction<'left' | 'right'>) => {
      const directions: ('N' | 'E' | 'S' | 'W')[] = ['N', 'E', 'S', 'W'];
      const currentIndex = directions.indexOf(state.direction);
      const newIndex = action.payload === 'left'
        ? (currentIndex - 1 + 4) % 4
        : (currentIndex + 1) % 4;
      state.direction = directions[newIndex];
    },
  },
});

export const { moveForward, rotate } = robotSlice.actions;

export const store = configureStore({
  reducer: {
    robot: robotSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;