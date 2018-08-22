import React, { Component } from 'react';
import RouterContext from './store'

export default class Router extends Component {
    render() {
        const { children } = this.props
        return children ?
            <RouterContext.Provider value={{
                history: this.props.history,
            }}>
                {React.Children.only(children)}
            </RouterContext.Provider >
            : null
    }
}