import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Programming.css';

//Header images
import bgs from './img/HeaderImg';

class Programming extends Component {
    componentDidMount() {
        $(".nav a").css('color', 'white');

        let path = Math.floor(Math.random()*bgs.length);

        $("#header").css('background-image', 'url('+bgs[path]+')');
        $(window).scrollTop(0);
    }
    render() {
        return(
            <div>
                <div id="header" >
                </div>
                <div className="content">
                    <div className="inner-content black">
                        <div className="content-wrap-in">
                            <h2>Github repositories</h2>
                            <div></div>      
                        </div>
                    </div>
                    <div className="inner-content white">
                        <div className="content-wrap-in">
                            <h3>NSA is watching you</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Programming;
