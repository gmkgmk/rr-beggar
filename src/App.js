import React, { Component } from 'react'
import Link from "./Link"
import BrowserHistory from './BrowserHistory'
import Switch from './switch'
import Route from './route'
class App extends Component {

    render() {
        return (
            <BrowserHistory className="App">
                <div>
                    <ul>
                        <li>
                            <Link to="/about">about (static)</Link>
                        </li>
                        <li>
                            <Link to="/company">Company (static)</Link>
                        </li>
                        <li>
                            <Link to="/kim">Kim (dynamic)</Link>
                        </li>
                        <li>
                            <Link to="/chris">Chris (dynamic)</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/company" component={Company} />
                        <Route path="/:user" component={User} />
                    </Switch>
                </div>
            </BrowserHistory>
        );
    }
}
const About = () => <h2>About</h2>;
const Company = () => <h2>Company</h2>;
const User = ({ match }) => (
    <div>
        <h2>User:
             {match.params.user}
        </h2>

    </div>
);

export default App;
