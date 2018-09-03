import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReduce from './reduce'

const sagaMiddleware = createSagaMiddleware({
    logger: function (level, ...args) {
        console.log(2)
    },
    onError(error) {
        console.error(error);
    },
})
const store = createStore(rootReduce, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default {
    ...store,
    run: sagaMiddleware.run
}