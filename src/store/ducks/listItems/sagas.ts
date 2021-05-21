import {call, put, takeLatest} from 'redux-saga/effects';
import {LoadingStatus} from "../../types";
import {IListItemsState, InItem} from "./contracts/state";
import {Api} from "../../../api/api";
import {ActionsType, IFetchCreateItem} from "./contracts/actionTypes";
import {createItem, setListItems, setLoadingStatus} from "./actionCreators";

export function* fetchListItemsRequest() {
    try {
        yield put(setLoadingStatus(LoadingStatus.LOADING))
        const items: IListItemsState['items'] = yield call(Api.fetchList)
        yield put(setListItems(items))
    } catch (error) {
        yield put(setLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* fetchCreateItemsRequest({payload}: IFetchCreateItem) {
    try {
        yield put(setLoadingStatus(LoadingStatus.LOADING))
        const id: InItem['id'] = yield call(Api.createItem, payload)
        yield put(createItem({...payload, id }))
        yield put(setLoadingStatus(LoadingStatus.SUCCESS))
    } catch (error) {
        yield put(setLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* listItemsSaga() {
    yield takeLatest(ActionsType.FETCH_LIST_ITEMS, fetchListItemsRequest)
    yield takeLatest(ActionsType.FETCH_CREATE_ITEM, fetchCreateItemsRequest)
}