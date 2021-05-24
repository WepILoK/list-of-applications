import {call, put, takeLatest} from 'redux-saga/effects';
import {LoadingStatus} from "../../types";
import {IState} from "./contracts/state";
import {Api} from "../../../api/api";
import {ActionsType, IFetchItem, IUpdateItem} from "./contracts/actionTypes";
import {
    setItem,
    setItemLoadingStatus,
    setListItems,
    setListItemsLoadingStatus,
    setPrioritiesAndStatusesAndUsers
} from "./actionCreators";

export function* fetchListItemsRequest() {
    try {
        yield put(setListItemsLoadingStatus(LoadingStatus.LOADING))
        const items: IState['listItems'] = yield call(Api.fetchListItems)
        yield put(setListItems(items))
    } catch (error) {
        yield put(setListItemsLoadingStatus(LoadingStatus.ERROR))
    }
}
export function* fetchItemRequest({payload}: IFetchItem) {
    try {
        yield put(setItemLoadingStatus(LoadingStatus.LOADING))
        const item: IState['item'] = yield call(Api.fetchItem, payload)
        yield put(setItem(item))
        yield put(setItemLoadingStatus(LoadingStatus.LOADED))
    } catch (error) {
        yield put(setItemLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* fetchPrioritiesOrStatusesRequest() {
    try {
        yield put(setListItemsLoadingStatus(LoadingStatus.LOADING))
        const priorities: IState['priorities'] = yield call(Api.fetchPriorities)
        const statuses: IState['statuses'] = yield call(Api.fetchStatuses)
        const users: IState['users'] = yield call(Api.fetchUsers)
        yield put(setPrioritiesAndStatusesAndUsers({priorities, statuses, users}))
    } catch (error) {
        yield put(setListItemsLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* updateItemRequest({payload}: IUpdateItem) {
    try {
        yield put(setItemLoadingStatus(LoadingStatus.LOADING))
        yield call(Api.updateItem, payload)
        yield put(setItemLoadingStatus(LoadingStatus.LOADED))
    } catch (error) {
        yield put(setListItemsLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* listItemsSaga() {
    yield takeLatest(ActionsType.FETCH_LIST_ITEMS, fetchListItemsRequest)
    yield takeLatest(ActionsType.FETCH_PRIORITIES_AND_STATUSES_AND_USERS, fetchPrioritiesOrStatusesRequest)
    yield takeLatest(ActionsType.FETCH_ITEM, fetchItemRequest)
    yield takeLatest(ActionsType.UPDATE_ITEM, updateItemRequest)
}