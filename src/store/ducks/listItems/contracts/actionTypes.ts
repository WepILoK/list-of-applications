import {Action} from "redux";
import {IListItemsState} from "./state";
import {LoadingStatus} from "../../../types";
import {ITextAreaValues} from "../../../../components/CreateApplication";

export enum ActionsType {
    FETCH_LIST_ITEMS = 'listItems/FETCH_LIST_ITEMS',
    SET_LIST_ITEMS = 'listItems/SET_LIST_ITEMS',
    SET_LOADING_STATUS = 'listItems/SET_LOADING_STATUS',
    CREATE_ITEM = 'listItems/CREATE_ITEM',
    FETCH_CREATE_ITEM = 'listItems/FETCH_CREATE_ITEM',
}

export interface IFetchListItems extends Action<ActionsType> {
    type: ActionsType.FETCH_LIST_ITEMS
}

export interface ISetListItems extends Action<ActionsType> {
    type: ActionsType.SET_LIST_ITEMS,
    payload: IListItemsState['items']
}

export interface IFetchCreateItem extends Action<ActionsType> {
    type: ActionsType.FETCH_CREATE_ITEM,
    payload: ITextAreaValues
}

export interface ICreateItem extends Action<ActionsType> {
    type: ActionsType.CREATE_ITEM,
    payload: ITextAreaValues & { id: number }
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