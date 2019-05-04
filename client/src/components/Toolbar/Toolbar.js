import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import $ from 'jquery';

//Own pages
import Home from '../Home/Home';
import Programming from '../Programming/Programming';
import Webfun from '../WebFun/WebFun';
import Contact from '../Contact/Contact';
import NotFound from '../ErrorPages/404';

//CSS
import './Toolbar.css';
import './../_default/main.css';

//Images
import logo from './img/favicon.png';

class Toolbar extends Component {
    constructor(props){
        //set page title and logo
        document.title = "Adiber";  
        let favicon = document.querySelector('link[rel="shortcut icon"]');
        favicon.setAttribute('href', logo);

        $(document).bind("scroll", function() {
            if($(document).scrollTop() >= 100) {
                $(".nav").css('background-color', '#fff');
                $(".nav").css('height', '25px');
                $(".nav a").css('color', 'black');
                $(".nav .cnt").css('line-height', '25px');
            } else {
                $(".nav").css('background-color', 'rgba(0,0,0,0)');
                $(".nav").css('height', '100px');
                if(window.location.pathname === "/" || window.location.pathname === "/programming") {
                    $(".nav a").css('color', 'white');
                }
                $(".nav .cnt").css('line-height', '100px');
            }
        });
        super();
    }

    render() {
        return(
            <Router>
            <div>
                <div className="nav">
                <div className="cnt">
                    <div className="home">
                        <Link to="/">Adiber</Link>
                    </div>
                    <div className="links">
                    <ul>
                        <li>
                            <Link to="/programming">Programming</Link>
                        </li>
                        <li>
                            <Link to="/webfun">Web-Fun</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="contact">
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/programming" component={Programming} />
                    <Route path="/webfun" component={Webfun} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            </Router>
        );
    }
}

export default Toolbar;