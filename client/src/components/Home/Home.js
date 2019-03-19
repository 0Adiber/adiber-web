import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Home.css';

class Home extends Component {
    componentDidMount() {
        $(".nav a").css('color', 'white');
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
                    <div className="inner-content black">
                        <div className="content-wrap-in">
                            <h2>What I do</h2>
                            <p>I am still attending school, what makes it sometimes difficult to do what I actually want.
                                 On weekends though I can pretty much do stuff I like. As for example learning new things in maths
                                 , learning a (programming) language or watch some Netflix. Playing computer games is sometimes
                                 also something I do as a matter of pleasure.</p>
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