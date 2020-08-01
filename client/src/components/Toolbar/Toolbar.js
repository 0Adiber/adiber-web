import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import $ from 'jquery';

//Own pages
import Home from '../../pages/Home/Home';
import Programming from '../../pages/Programming/Programming';
import Youtube from '../../pages/Youtube/Youtube';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';
import NotFound from '../../pages/ErrorPages/404';

//CSS
import './Toolbar.css';
import '../../styles/main.css';

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
                if(window.location.pathname === "/" || window.location.pathname === "/programming" || window.location.pathname === "/contact" || window.location.pathname === "/projects" || window.location.pathname === "/youtube") {
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
                    <Link to="/"><div className="home">
                            Adiber
                        </div></Link>
                        <div className="left">
                            <ul>
                                <Link to="/programming"><li>
                                    Programming
                                </li></Link>
                                <Link to="/youtube"><li>
                                    Youtube
                                </li></Link>
                                <Link to="/projects"><li>
                                    Projects
                                </li></Link> 
                            </ul>
                        </div>
                        <div className="right">
                        <Link to="/contact"><div className="contact">
                                Contact
                            </div></Link>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/programming" component={Programming} />
                    <Route path="/youtube" component={Youtube} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/projects" component={Projects} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            </Router>
        );
    }
}

export default Toolbar;