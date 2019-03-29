import React, { Component } from 'react';
import $ from 'jquery';

//CSS

class Programming extends Component {
    componentDidMount() {
        $(".nav a").css('color', 'black');
        $(window).scrollTop(0);
    }
    render() {
        return(
            <div className="wrapper-all">
                <div className="content">
                    404 Not Found
                </div>
            </div>
        );
    }
}

export default Programming;
