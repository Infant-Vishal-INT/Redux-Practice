import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import LoggedReducer from "./LoggedReducer";

const rootReducer = combineReducers({
    counter: CounterReducer,
    islogged: LoggedReducer   
});

export default rootReducer;