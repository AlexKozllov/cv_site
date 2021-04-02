import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReduser = combineReducers({});
const store = configureStore({ reduser: rootReduser });

export { store };
