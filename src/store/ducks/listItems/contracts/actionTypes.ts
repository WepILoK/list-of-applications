import {Action} from "redux";
import {IState, LoadingStatus} from "./state";

import {ITextAreaValues} from "../../../../pages/ApplicationsList/components/CreateApplication";

export enum ActionsType {
    FETCH_LIST_ITEMS = 'listItems/FETCH_LIST_ITEMS',
    SET_LIST_ITEMS = 'listItems/SET_LIST_ITEMS',
    FETCH_ITEM = 'listItems/FETCH_ITEM',
    SET_ITEM = 'listItems/SET_ITEM',
    UPDATE_ITEM = 'listItems/UPDATE_ITEM',
    SET_ITEM_LOADING_STATUS = 'listItems/SET_ITEM_LOADING_STATUS',
    FETCH_CREATE_ITEM = 'listItems/FETCH_CREATE_ITEM',
    FETCH_PRIORITIES_AND_STATUSES_AND_USERS = 'listItems/FETCH_PRIORITIES_AND_STATUSES_AND_USERS',
    SET_PRIORITIES_AND_STATUSES_AND_USERS = 'listItems/SET_PRIORITIES_AND_STATUSES_AND_USERS',
}

export interface IFetchListItems extends Action<ActionsType> {
    type: ActionsType.FETCH_LIST_ITEMS
}

export interface ISetListItems extends Action<ActionsType> {
    type: ActionsType.SET_LIST_ITEMS,
    payload: IState['listItems']
}

export interface IFetchItem extends Action<ActionsType> {
    type: ActionsType.FETCH_ITEM
    payload: number
}

export interface ISetItem extends Action<ActionsType> {
    type: ActionsType.SET_ITEM,
    payload: IState['item']
}

export interface IUpdateItem extends Action<ActionsType> {
    type: ActionsType.UPDATE_ITEM,
    payload: {id: number, comment: string, statusId: number, executorId: number}
}

export interface IFetchCreateItem extends Action<ActionsType> {
    type: ActionsType.FETCH_CREATE_ITEM,
    payload: ITextAreaValues
}

export interface IFetchPrioritiesAndStatusesAndUsers extends Action<ActionsType> {
    type: ActionsType.FETCH_PRIORITIES_AND_STATUSES_AND_USERS,
}

export interface ISetPrioritiesAndStatusesAndUsers extends Action<ActionsType> {
    type: ActionsType.SET_PRIORITIES_AND_STATUSES_AND_USERS,
    payload: { priorities: IState['priorities'], statuses: IState['statuses'], users: IState['users'] }
}

export interface ISetItemLoadingStatus extends Action<ActionsType> {
    type: ActionsType.SET_ITEM_LOADING_STATUS
    payload: LoadingStatus
}

export type IActions =
    IFetchListItems
    | ISetListItems
    | IFetchCreateItem
    | IFetchPrioritiesAndStatusesAndUsers
    | ISetPrioritiesAndStatusesAndUsers
    | IFetchItem
    | ISetItem
    | ISetItemLoadingStatus
    | IUpdateItem