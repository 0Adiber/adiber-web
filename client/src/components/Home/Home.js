import React, { Component } from 'react';

//CSS
import './Home.css';

class Home extends Component {
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
                    <div className="inner-content black">
                        <div className="content-wrap-in">
                            <h2>What I do</h2>
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

export default Home;