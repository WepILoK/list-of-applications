import {IState} from "./contracts/state";
import {
    ActionsType,
    ICreateItem,
    IFetchCreateItem,
    IFetchListItems, IFetchPrioritiesOrStatuses,
    ISetListItems,
    ISetLoadingStatus, ISetPrioritiesOrStatuses
} from "./contracts/actionTypes";
import {LoadingStatus} from "../../types";
import {ITextAreaValues} from "../../../components/CreateApplication";


export const fetchListItems = (): IFetchListItems => ({
    type: ActionsType.FETCH_LIST_ITEMS,
})

export const setListItems = (payload: IState['orders']): ISetListItems => ({
    type: ActionsType.SET_LIST_ITEMS,
    payload
})

export const setLoadingStatus = (payload: LoadingStatus): ISetLoadingStatus => ({
    type: ActionsType.SET_LOADING_STATUS,
    payload
})

export const createItem = (payload: ITextAreaValues & { id: number } ): ICreateItem => ({
    type: ActionsType.CREATE_ITEM,
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
