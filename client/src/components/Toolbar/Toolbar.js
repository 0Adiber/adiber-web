import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Own pages
import Home from '../Home/Home';

//CSS
import './Toolbar.css';

function Toolbar() {
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
            <Route path="/programming" component={Home} />
            <Route path="/webfun" component={Home} />
        </div>
        </Router>
    );
}

export default Toolbar;