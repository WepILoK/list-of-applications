import {Action} from "redux";
import {IState} from "./state";
import {LoadingStatus} from "../../../types";
import {ITextAreaValues} from "../../../../components/CreateApplication";

export enum ActionsType {
    FETCH_LIST_ITEMS = 'listItems/FETCH_LIST_ITEMS',
    SET_LIST_ITEMS = 'listItems/SET_LIST_ITEMS',
    SET_LOADING_STATUS = 'listItems/SET_LOADING_STATUS',
    CREATE_ITEM = 'listItems/CREATE_ITEM',
    FETCH_CREATE_ITEM = 'listItems/FETCH_CREATE_ITEM',
    FETCH_PRIORITIES_OR_STATUSES = 'listItems/FETCH_PRIORITIES_OR_STATUSES',
    SET_PRIORITIES_OR_STATUSES = 'listItems/SET_PRIORITIES_OR_STATUSES',
}

export interface IFetchListItems extends Action<ActionsType> {
    type: ActionsType.FETCH_LIST_ITEMS
}

export interface ISetListItems extends Action<ActionsType> {
    type: ActionsType.SET_LIST_ITEMS,
    payload: IState['orders']
}

export interface IFetchCreateItem extends Action<ActionsType> {
    type: ActionsType.FETCH_CREATE_ITEM,
    payload: ITextAreaValues
}

export interface ICreateItem extends Action<ActionsType> {
    type: ActionsType.CREATE_ITEM,
    payload: ITextAreaValues & { id: number }
}

export interface IFetchPrioritiesOrStatuses extends Action<ActionsType> {
    type: ActionsType.FETCH_PRIORITIES_OR_STATUSES,
}

export interface ISetPrioritiesOrStatuses extends Action<ActionsType> {
    type: ActionsType.SET_PRIORITIES_OR_STATUSES,
    payload: {priorities: IState['priorities'], statuses: IState['statuses']}
}

export interface ISetLoadingStatus extends Action<ActionsType> {
    type: ActionsType.SET_LOADING_STATUS
    payload: LoadingStatus
}

export type IActions =
    IFetchListItems
    | ISetLoadingStatus
    | ISetListItems
    | ICreateItem
    | IFetchCreateItem
    | IFetchPrioritiesOrStatuses
    | ISetPrioritiesOrStatuses