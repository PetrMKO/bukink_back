import {createStoreHook} from "react-redux";
import {searchReducer} from "./searchReducer";
import {createStore} from "redux";


export const store = createStore(searchReducer)