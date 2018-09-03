
import React from "react";
import matchPath from "./matchPath";

class Route extends React.Component {

    state = {
        match: this.computeMatch(this.props)
    };

    computeMatch(
        { computedMatch, location, path }
    ) {
        if (computedMatch) return computedMatch;
        return matchPath(location.pathname, { path });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            match: this.computeMatch(nextProps)
        });
    }
    render() {
        const { match } = this.state;
        const { component } = this.props;
        const location = this.props.location;
        const props = { match, location };

        if (component) return match ? React.createElement(component, props) : null;
        return null;
    }
}

export default Route;