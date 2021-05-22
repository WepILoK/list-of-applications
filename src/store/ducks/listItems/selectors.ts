import {RootState} from "../../store";
import {IState} from "./contracts/state";

export const selectListItemsState = (state: RootState): IState => state.listItems

export const selectListItems = (state: RootState): IState['orders'] =>
    selectListItemsState(state).orders

export const selectLoadingStatus = (state: RootState): IState['status'] =>
    selectListItemsState(state).status

export const selectStatuses = (state: RootState): IState['statuses'] =>
    selectListItemsState(state).statuses
