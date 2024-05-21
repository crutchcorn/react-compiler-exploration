import { combineReducers } from "@reduxjs/toolkit";
import { testReducer } from "./test-slice.ts";

export const rootReducer = combineReducers({
  test: testReducer,
});
