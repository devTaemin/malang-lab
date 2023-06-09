import { createSlice } from '@reduxjs/toolkit';

export interface RoundInfo {
  keyword: string;
  timeLimit: number;
  round: number;
  isLast: boolean;
  finish: boolean;
  startTime: number;
};

const initialState: RoundInfo = {
  keyword: '',
  timeLimit: 0,
  round: 0,
  isLast: false,
  finish: false,
  startTime: 0,
};

export const roundInfoSlice = createSlice({
  name: 'roundInfo',
  initialState,
  reducers: {
    setRoundInfo(state, action) {
      state.keyword = action.payload.keyword;
      state.timeLimit = action.payload.timeLimit;
      state.round = action.payload.round;
      state.isLast = action.payload.isLast;
      state.finish = false;
      state.startTime = action.payload.startTime;
    },
    setFinish(state) {
      state.finish = true;
    },
  },
});

export const { setRoundInfo, setFinish } = roundInfoSlice.actions;
export default roundInfoSlice.reducer;
