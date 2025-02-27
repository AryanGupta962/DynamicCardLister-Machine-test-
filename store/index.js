import {createStore} from "redux";
import postListReducer from "./reducers/postListReducer.js";

const store=createStore(postListReducer);

export default store;