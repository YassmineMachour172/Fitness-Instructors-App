//import { all } from "axios";
import loggedReducer from "./isLogged";
import emailReducer from "./email";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isLogged:loggedReducer,
    emailReducer
})

export default allReducers;