import { createAction } from "@reduxjs/toolkit";

const addTaskRequest = createAction("@todo/addTaskRequest");
const addTaskSuccess = createAction("@todo/addTaskSuccess");
const addTaskError = createAction("@todo/addTaskError");

export { addTaskRequest, addTaskSuccess, addTaskError };
