import { createSlice } from '@reduxjs/toolkit';

export const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByValue: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByValue } = CounterSlice.actions;

export default CounterSlice.reducer;

export const selectCount = state => state.counter.value;
