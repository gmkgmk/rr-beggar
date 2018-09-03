import React, { Component } from 'react';
import RouterContext from './store'

export default class Router extends Component {
    componentWillMount() {
        const { history } = this.props;
        this.unlisten = history.listen(() => {
            this.setState({
                match: this.computeMatch(history.location.pathname)
            });
        });
    }
    componentWillUnmount() {
        this.unlisten()
    }
    computeMatch(pathname) {
        return {
            path: "/",
            url: "/",
            params: {},
        };
    }
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