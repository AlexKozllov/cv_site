import { createReducer } from "@reduxjs/toolkit";
import { addTaskSuccess } from "../actions/todoActions";

const todoList = createReducer(
  {},
  { [addTaskSuccess]: (state, action) => action.paiload.task }
);

export { todoList };
