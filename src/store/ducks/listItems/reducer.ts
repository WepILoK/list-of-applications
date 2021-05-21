import produce, {Draft} from "immer";
import {LoadingStatus} from "../../types";
import {IActions, ActionsType} from "./contracts/actionTypes";
import {IListItemsState} from "./contracts/state";

const initialListItemsState: IListItemsState = {
    items: [],
    status: LoadingStatus.NEVER
}

export const listItemsReducer = produce((draft: Draft<IListItemsState>, action: IActions) => {
    switch (action.type) {
        case ActionsType.SET_LOADING_STATUS:
            draft.status = action.payload
            break;
        case ActionsType.SET_LIST_ITEMS:
            draft.items = action.payload.reverse()
            draft.status = LoadingStatus.LOADED
            break;
        case ActionsType.CREATE_ITEM:
            draft.items.splice(0, 0, action.payload)
            draft.status = LoadingStatus.LOADING
            break;
        default:
            break;
    }
}, initialListItemsState)