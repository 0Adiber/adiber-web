import React, { Component } from 'react';

//CSS
import './Home.css';

//Images
import logo from './img/favicon.png';

class Home extends Component {
    constructor(props) {
        document.title = "Adiber";
        var favicon = document.querySelector('link[rel="shortcut icon"]');
        //favicon.setAttribute('type', 'image/png');
        favicon.setAttribute('href', logo);
        super(props);
    }
    render() {
        return(
            <div>
                <div className="header">
                    <div className="text">
                        <h1>Adiber</h1>
                        <p>I am a self-teaching developer, who is studying Information Technology & <br /> trying a lot of things.</p>
                    </div>
                </div>
                <div className="content">
                    <div id="black">
                        <h1>lala</h1>
                    </div>
                    <div id="white">
                        <h1>Test2</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;