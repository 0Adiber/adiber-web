import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Programming.css';

class Programming extends Component {
    componentDidMount() {
        $(".nav a").css('color', 'black');
    }
    render() {
        return(
            <div className="wrapper-all">
                <div className="content">
                    <div className="inner-content black">
                        <div className="content-wrap-in">
                            <h2>Github repository</h2>
                            <p>hahahahhaha<br />hahahahhaha<br />hahahahhaha<br />hahahahhaha<br /></p>
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
