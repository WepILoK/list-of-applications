import {IState, LoadingStatus} from "./contracts/state";
import {
    ActionsType,
    IFetchCreateItem, IFetchItem,
    IFetchListItems, IFetchPrioritiesAndStatusesAndUsers, ISetItem, ISetItemLoadingStatus,
    ISetListItems,
    ISetPrioritiesAndStatusesAndUsers, IUpdateItem
} from "./contracts/actionTypes";
import {ITextAreaValues} from "../../../pages/ApplicationsList/components/CreateApplication";


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

export const updateItem = (payload: {id: number, comment: string, statusId: number, executorId: number}): IUpdateItem => ({
    type: ActionsType.UPDATE_ITEM,
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

export const fetchPrioritiesAndStatusesAndUsers = (): IFetchPrioritiesAndStatusesAndUsers => ({
    type: ActionsType.FETCH_PRIORITIES_AND_STATUSES_AND_USERS,
})

export const setPrioritiesAndStatusesAndUsers = (payload: { priorities: IState['priorities'], statuses: IState['statuses'], users: IState['users'] }): ISetPrioritiesAndStatusesAndUsers => ({
    type: ActionsType.SET_PRIORITIES_AND_STATUSES_AND_USERS,
    payload
})
