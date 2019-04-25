import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './errors.css';

class Programming extends Component {
    componentDidMount() {
        $(".nav a").css('color', 'black');
        $(window).scrollTop(0);
    }
    render() {
        return(
            <div className="wrapper-all">
                <div className="content-wrap-in">
                    <div className="content">
                        <div id="error"><h3>404 <span id="red">Not</span> Found</h3>
                            <p>The Page you requested could not be found. If you think that's an error, please contact me.</p><br />
                            <p>Click <a href="/">here</a> to return back to Home</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
}

export default Programming;
