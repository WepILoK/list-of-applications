import {call, put, takeLatest} from 'redux-saga/effects';
import {LoadingStatus} from "../../types";
import {IState, IOrder} from "./contracts/state";
import {Api} from "../../../api/api";
import {ActionsType, IFetchCreateItem} from "./contracts/actionTypes";
import {createItem, setListItems, setLoadingStatus, setPrioritiesOrStatuses} from "./actionCreators";

export function* fetchListItemsRequest() {
    try {
        yield put(setLoadingStatus(LoadingStatus.LOADING))
        const items: IState['orders'] = yield call(Api.fetchOrders)
        yield put(setListItems(items))
    } catch (error) {
        yield put(setLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* fetchCreateItemsRequest({payload}: IFetchCreateItem) {
    try {
        yield put(setLoadingStatus(LoadingStatus.LOADING))
        const id: IOrder['id'] = yield call(Api.createOrder, payload)
        yield put(createItem({...payload, id }))
        yield put(setLoadingStatus(LoadingStatus.LOADED))
    } catch (error) {
        yield put(setLoadingStatus(LoadingStatus.ERROR))
    }
}
export function* fetchPrioritiesOrStatusesRequest() {
    try {
        yield put(setLoadingStatus(LoadingStatus.LOADING))
        const priorities: IState['priorities'] = yield call(Api.fetchPriorities)
        const statuses: IState['statuses'] = yield call(Api.fetchStatuses)
        yield put(setPrioritiesOrStatuses({priorities, statuses}))
    } catch (error) {
        yield put(setLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* listItemsSaga() {
    yield takeLatest(ActionsType.FETCH_LIST_ITEMS, fetchListItemsRequest)
    yield takeLatest(ActionsType.FETCH_CREATE_ITEM, fetchCreateItemsRequest)
    yield takeLatest(ActionsType.FETCH_PRIORITIES_OR_STATUSES, fetchPrioritiesOrStatusesRequest)
}