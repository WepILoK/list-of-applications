import {combineReducers} from "redux";
import {listItemsReducer} from "./ducks/listItems/reducer";

export const rootReducer = combineReducers({
    listItems: listItemsReducer,
});