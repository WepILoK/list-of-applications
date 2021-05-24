import {RootState} from "../../store";
import {IState} from "./contracts/state";
import {LoadingStatus} from "../../types";

export const selectListItemsState = (state: RootState): IState => state.listItems

export const selectListItems = (state: RootState): IState['listItems'] =>
    selectListItemsState(state).listItems

export const selectItem = (state: RootState): IState['item'] =>
    selectListItemsState(state).item

export const selectItemLoadedStatus = (state: RootState): boolean =>
    selectListItemsState(state).itemStatus === LoadingStatus.LOADED

export const selectItemLoadingStatus = (state: RootState): IState['itemStatus'] =>
    selectListItemsState(state).itemStatus

export const selectListItemsLoadingStatus = (state: RootState): IState['listItemsStatus'] =>
    selectListItemsState(state).listItemsStatus

export const selectStatuses = (state: RootState): IState['statuses'] =>
    selectListItemsState(state).statuses

export const selectPriorities = (state: RootState): IState['priorities'] =>
    selectListItemsState(state).priorities

export const selectUsers = (state: RootState): IState['users'] =>
    selectListItemsState(state).users
