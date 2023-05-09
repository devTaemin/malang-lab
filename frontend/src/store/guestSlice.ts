import { createSlice } from '@reduxjs/toolkit';

type Guest = {
  pin: string;
  nickname: string;
  imageUrl: string;
};

const initialState: Guest = {
  pin: '',
  nickname: '',
  imageUrl: '',
};

export const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    // pin setting
    setPinAction(state, action) {
      state.pin = action.payload;
    },
    // nickname setting
    setNicknameAction(state, action) {
      state.nickname = action.payload;
    },
  },
});

export const { setPinAction, setNicknameAction } = guestSlice.actions;
export default guestSlice.reducer;
