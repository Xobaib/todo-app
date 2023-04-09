const { combineReducers } = require("redux");
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({ todoReducer });
