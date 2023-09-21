import { createStore, applyMiddleware } from "redux";
import inforReducer from "./Reducer";
import thunk from "redux-thunk";
const store = createStore(inforReducer, applyMiddleware(thunk));
export default store;