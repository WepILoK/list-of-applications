import produce, {Draft} from "immer";
import {LoadingStatus} from "../../types";
import {IActions, ActionsType} from "./contracts/actionTypes";
import {IState} from "./contracts/state";

const initialListItemsState: IState = {
    priorities: [],
    statuses: [],
    orders: [],
    order: undefined,
    status: LoadingStatus.NEVER
}

export const listItemsReducer = produce((draft: Draft<IState>, action: IActions) => {
    switch (action.type) {
        case ActionsType.SET_LOADING_STATUS:
            draft.status = action.payload
            break;
        case ActionsType.SET_LIST_ITEMS:
            draft.orders = action.payload.reverse()
            draft.status = LoadingStatus.LOADED
            break;
        case ActionsType.CREATE_ITEM:
            draft.orders.splice(0, 0, action.payload)
            draft.status = LoadingStatus.LOADING
            break;
        case ActionsType.SET_PRIORITIES_OR_STATUSES:
            draft.priorities = action.payload.priorities
            draft.statuses = action.payload.statuses
            draft.status = LoadingStatus.LOADED
            break;
        default:
            break;
    }
}, initialListItemsState)