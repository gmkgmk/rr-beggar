import React from "react";
import matchPath from './matchPath'
import connect from './connect'


class Switch extends React.Component {
    render() {
        const { history } = this.props.context;
        const { location } = history
        let match, child;

        React.Children.forEach(this.props.children, element => {
            if (match == null && React.isValidElement(element)) {
                const {
                    path: pathProp,
                } = element.props;
                const path = pathProp

                child = element;
                match = matchPath(
                    location.pathname, { path }
                );
            }
        })
        return match
            ? React.cloneElement(child, { location, computedMatch: match })
            : null;
    }
}

export default connect()(Switch)
