import {RootState} from "../../store";
import {IState} from "./contracts/state";

export const selectListItemsState = (state: RootState): IState => state.listItems

export const selectListItems = (state: RootState): IState['listItems'] =>
    selectListItemsState(state).listItems

export const selectItem = (state: RootState): IState['item'] =>
    selectListItemsState(state).item

export const selectItemLoadingStatus = (state: RootState): IState['itemStatus'] =>
    selectListItemsState(state).itemStatus

export const selectListItemsLoadingStatus = (state: RootState): IState['listItemsStatus'] =>
    selectListItemsState(state).listItemsStatus

export const selectStatuses = (state: RootState): IState['statuses'] =>
    selectListItemsState(state).statuses
