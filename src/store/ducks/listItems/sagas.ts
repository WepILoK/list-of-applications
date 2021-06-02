import {call, put, takeLatest} from 'redux-saga/effects';
import {LoadingStatus} from "../../types";
import {InItem, IState} from "./contracts/state";
import {Api} from "../../../api/api";
import {ActionsType, IFetchCreateItem, IFetchItem, IUpdateItem} from "./contracts/actionTypes";
import {
    fetchItem,
    setItem,
    setItemLoadingStatus,
    setListItems,
    setPrioritiesAndStatusesAndUsers
} from "./actionCreators";

export function* fetchListItemsRequest() {
    try {
        const items: IState['listItems'] = yield call(Api.fetchListItems)
        yield put(setListItems(items))
    } catch (error) {
        new Error(error)
    }
}
export function* fetchItemRequest({payload}: IFetchItem) {
    try {
        yield put(setItemLoadingStatus(LoadingStatus.LOADING))
        const item: IState['item'] = yield call(Api.fetchItem, payload)
        yield put(setItem(item))
        yield put(setItemLoadingStatus(LoadingStatus.EDIT))
    } catch (error) {
        yield put(setItemLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* fetchPrioritiesOrStatusesRequest() {
    try {
        const priorities: IState['priorities'] = yield call(Api.fetchPriorities)
        const statuses: IState['statuses'] = yield call(Api.fetchStatuses)
        const users: IState['users'] = yield call(Api.fetchUsers)
        yield put(setPrioritiesAndStatusesAndUsers({priorities, statuses, users}))
    } catch (error) {
        new Error(error)
    }
}

export function* createItemRequest({payload}: IFetchCreateItem) {
    try {
        yield put(setItemLoadingStatus(LoadingStatus.LOADING))
        const id: InItem['id']= yield call(Api.createItem, payload)
        yield put(fetchItem(id))
    } catch (error) {
        yield put(setItemLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* updateItemRequest({payload}: IUpdateItem) {
    try {
        yield put(setItemLoadingStatus(LoadingStatus.LOADING))
        yield call(Api.updateItem, payload)
        yield put(setItemLoadingStatus(LoadingStatus.SUCCESS))
    } catch (error) {
        yield put(setItemLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* listItemsSaga() {
    yield takeLatest(ActionsType.FETCH_LIST_ITEMS, fetchListItemsRequest)
    yield takeLatest(ActionsType.FETCH_PRIORITIES_AND_STATUSES_AND_USERS, fetchPrioritiesOrStatusesRequest)
    yield takeLatest(ActionsType.FETCH_ITEM, fetchItemRequest)
    yield takeLatest(ActionsType.FETCH_CREATE_ITEM, createItemRequest)
    yield takeLatest(ActionsType.UPDATE_ITEM, updateItemRequest)
}