import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter", //needs a name
  initialState: initialCounterState, // an initial state. or initialState:initialState
  reducers: {
    // an object or map of all the reducers needed by the slice
    increment(state) {
      state.counter++;
    }, //these are all methods
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
