import {IState} from "./contracts/state";
import {
    ActionsType,
    IFetchCreateItem, IFetchItem,
    IFetchListItems, IFetchPrioritiesOrStatuses, ISetItem, ISetItemLoadingStatus,
    ISetListItems,
    ISetListItemsLoadingStatus, ISetPrioritiesOrStatuses
} from "./contracts/actionTypes";
import {LoadingStatus} from "../../types";
import {ITextAreaValues} from "../../../components/CreateApplication";


export const fetchListItems = (): IFetchListItems => ({
    type: ActionsType.FETCH_LIST_ITEMS,
})

export const setListItems = (payload: IState['listItems']): ISetListItems => ({
    type: ActionsType.SET_LIST_ITEMS,
    payload
})
export const fetchItem = (payload: number): IFetchItem => ({
    type: ActionsType.FETCH_ITEM,
    payload
})

export const setItem = (payload: IState['item']): ISetItem => ({
    type: ActionsType.SET_ITEM,
    payload
})

export const setListItemsLoadingStatus = (payload: LoadingStatus): ISetListItemsLoadingStatus => ({
    type: ActionsType.SET_LIST_ITEMS_LOADING_STATUS,
    payload
})

export const setItemLoadingStatus = (payload: LoadingStatus): ISetItemLoadingStatus => ({
    type: ActionsType.SET_ITEM_LOADING_STATUS,
    payload
})

export const fetchCreateItem = (payload: ITextAreaValues): IFetchCreateItem => ({
    type: ActionsType.FETCH_CREATE_ITEM,
    payload
})

export const fetchPrioritiesOrStatuses = (): IFetchPrioritiesOrStatuses => ({
    type: ActionsType.FETCH_PRIORITIES_OR_STATUSES,
})

export const setPrioritiesOrStatuses = (payload: {priorities: IState['priorities'], statuses: IState['statuses']}): ISetPrioritiesOrStatuses => ({
    type: ActionsType.SET_PRIORITIES_OR_STATUSES,
    payload
})
