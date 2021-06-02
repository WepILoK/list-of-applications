import {RootState} from "../../store";
import {IState} from "./contracts/state";

export const selectListItemsState = (state: RootState): IState => state.listItems

export const selectListItems = (state: RootState): IState['listItems'] =>
    selectListItemsState(state).listItems

export const selectItem = (state: RootState): IState['item'] =>
    selectListItemsState(state).item

export const selectItemLoadingStatus = (state: RootState): IState['itemStatus'] =>
    selectListItemsState(state).itemStatus

export const selectStatuses = (state: RootState): IState['statuses'] =>
    selectListItemsState(state).statuses

export const selectPriorities = (state: RootState): IState['priorities'] =>
    selectListItemsState(state).priorities

export const selectUsers = (state: RootState): IState['users'] =>
    selectListItemsState(state).users
