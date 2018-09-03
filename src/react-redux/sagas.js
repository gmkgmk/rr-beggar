import { call, put, take, takeLatest, fork } from "redux-saga/effects";
import { takeEvery } from 'redux-saga'
import Api from './service'
function* fetchData(action) {
    const data = yield call(Api.getProducts, action)
    yield put({ type: "FETCH_SUCCEEDED", data })
}

export function* watchFetchData() {
    yield takeEvery('FETCH_REQUESTED', fetchData)
}
function* watchAndLog() {
    while (true) {
        yield* takeEvery('*', function* logger(action) {
            console.log('action', action)
            console.log('state after', action)
        })
    }
}
export default function* root() {
    yield fork(watchAndLog)
    yield fork(watchFetchData)
}
