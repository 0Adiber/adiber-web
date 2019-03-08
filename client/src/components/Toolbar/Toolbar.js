import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Own pages
import Home from '../Home/Home';
import Programming from '../Programming/Programming';

//CSS
import './Toolbar.css';

class Toolbar extends Component {
    render() {
        return(
            <Router>
            <div>
                <div className="nav">
                    <div className="home">
                        <Link to="/">Adiber</Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/programming">Programming</Link>
                        </li>
                        <li>
                            <Link to="/webfun">Web-Fun</Link>
                        </li>
                    </ul>
                </div>
                <Route exact path="/" component={Home} />
                <Route path="/programming" component={Programming} />
                <Route path="/webfun" component={Home} />
            </div>
            </Router>
        );
    }
}

export default Toolbar;