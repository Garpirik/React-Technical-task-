import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./usersReducer";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
    users: usersReducer
})

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;

