import {createStoreHook} from "react-redux";
import {searchFieldsReducer} from "./searchFieldsReducer";
import {createStore} from "redux";


export const store = createStore(searchFieldsReducer)