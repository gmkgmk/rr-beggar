import React, { Component } from 'react';
import connect from './connect'

class Link extends Component {

    clickHandle = event => {
        event.preventDefault();
        const { to, replace, context: { history } } = this.props;
        if (replace) {
            history.replace(to)
        }
        else {
            history.push(to)
        }
    }
    render() {
        const { children, to } = this.props;
        return (
            <a href={to} onClick={this.clickHandle}>{children}</a>
        )
    }
}
export default connect()(Link)