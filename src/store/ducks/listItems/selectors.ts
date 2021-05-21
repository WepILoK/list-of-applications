import {RootState} from "../../store";
import {IListItemsState} from "./contracts/state";

export const selectListItemsState = (state: RootState): IListItemsState => state.listItems

export const selectListItems = (state: RootState): IListItemsState['items'] =>
    selectListItemsState(state).items

export const selectLoadingStatus = (state: RootState): IListItemsState['status'] =>
    selectListItemsState(state).status
