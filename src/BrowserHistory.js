import React, { Component } from 'react'
import { createBrowserHistory } from "history"
import Router from './router'
class BrowserHistory extends Component {
    history = createBrowserHistory(this.props)
    render() {
        return (
            <Router history={this.history} children={this.props.children} />
        )
    }
}
export default BrowserHistory