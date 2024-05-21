import { createSlice } from "@reduxjs/toolkit";

const initialCount = 10000;
let count = initialCount;
const initialState = {
  items: Array.from({ length: initialCount }, (_, i) => i + 1),
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    reset() {
      count = initialCount;
      return initialState;
    },
    addItem(state) {
      state.items.push(++count);
    },
  },
});

export const { reset, addItem } = testSlice.actions;
export const testReducer = testSlice.reducer;
