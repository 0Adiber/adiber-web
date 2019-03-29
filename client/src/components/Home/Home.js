import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Home.css';

class Home extends Component {
    componentDidMount() {
        $(".nav a").css('color', 'white');
        $(window).scrollTop(0);
    }

    scrollMore() {
        console.log("hi");
        $("html, body").animate({ scrollTop: window.innerHeight-65 }, 1000);
    }

    render() {
        return(
            <div>
                <div className="header">
                    <div className="text">
                        <h1>Adiber</h1>
                        <p>I am a young developer, who is also interested in Cyber Security & studying Information Technology.</p>
                    </div>
                    <div id="more" onClick={this.scrollMore}>
                        <p>More</p>
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
                            <br />you
                            <br />you
                            <br />you
                            <br />you
                            <br />you
                            <br />you
                            <br />you
                            <br />you
                            <br />you
                            <br />you
                            <br />you
                            <br />you
                            <br />you
                            <br />you

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;