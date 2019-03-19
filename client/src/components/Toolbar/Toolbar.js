import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';

//Own pages
import Home from '../Home/Home';
import Programming from '../Programming/Programming';

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
                $(".nav a").css('color', 'white');
                $(".nav .cnt").css('line-height', '100px');
            }
        });
        console.log("ICH GBIN BEHIDNERTES REJACTJS");
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