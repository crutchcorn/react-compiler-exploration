import { createSlice } from "@reduxjs/toolkit";

let count = 1000;
const initialState = {
  items: Array.from({ length: 1000 }, (_, i) => i + 1),
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    reset() {
      count = 1000;
      return initialState;
    },
    addItem(state) {
      state.items.push(++count);
    },
  },
});

export const { reset, addItem } = testSlice.actions;
export const testReducer = testSlice.reducer;
