import RouterContext from './store'
import React, { Component } from 'react';

function connect(state) {
    return function (WarpperComponent) {
        return class extends Component {
            render() {
                return (
                    <RouterContext.Consumer>
                        {context => <WarpperComponent {...this.props} context={context} />}
                    </RouterContext.Consumer>
                );
            }
        };
    }
}
export default connect