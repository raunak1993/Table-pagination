import { createStore, applyMiddleware } from "redux";

import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { tableReducer } from "../reducers/table";

const store = createStore(tableReducer, applyMiddleware(loggerMiddleware, thunkMiddleware))

export default store