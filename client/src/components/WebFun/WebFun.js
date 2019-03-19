import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Webfun.css';

class Programming extends Component {
    componentDidMount() {
        $(".nav a").css('color', 'black');
    }
    render() {
        return(
            <div className="wrapper-all">
                <div className="content">
                </div>
            </div>
        );
    }
}

export default Programming;
