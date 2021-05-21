import { all } from "redux-saga/effects";
import {listItemsSaga} from "./ducks/listItems/sagas";

export default function* rootSaga() {
    yield all([
        listItemsSaga(),
    ])
}