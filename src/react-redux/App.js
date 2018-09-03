import React, { Component } from 'react'
import store from './createSrote'
import { Provider } from 'react-redux'
import sagaRoot from './sagas'

store.run(sagaRoot)
class App extends Component {
    componentDidMount() {
        store.subscribe(function () {
            // console.log(store.getState())
        })
        store.dispatch({
            type: "FETCH_REQUESTED"
        })
    }
    render() {
        return (
            <Provider store={store}>
                <h1 >
                    chinese
                </h1 >
            </Provider>
        )
    }
}

export default App;
