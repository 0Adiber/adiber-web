import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Youtube.css';

class Youtube extends Component {
    componentDidMount() {
        $(".nav a").css('color', 'black');
        $(window).scrollTop(0);
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

export default Youtube;
