import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Home.scss';

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
                    <div className="bg"></div>
                    <div className="lightning flashfx"></div>
                    <div className="text">
                        <h1>Adiber</h1>
                        <p>I am a young Developer, who is interested in Cyber Security & studying Information Technology.</p>
                    </div>
                    <div id="more" onClick={this.scrollMore}>
                    </div>
                </div>
                <div className="content">
                    <div className="inner-content black">
                        <div className="content-wrap-in">
                            <h2>Who am I?</h2>
                            <p>I am Adrian, a 17-year old student from Austria. Studying IT at the HTBLA Kaindorf</p>
                        </div>
                    </div>
                    <div className="inner-content white">
                        <div className="content-wrap-in">
                            <h2>What I do</h2>
                            <p>I am still attending school, what makes it sometimes difficult to do what I actually want.
                                    On weekends though I can pretty much do stuff I like. As for example learning new things in maths
                                    , learning a (programming) language or watch some Netflix. Playing computer games is sometimes
                                    also something I do as a matter of pleasure.</p>
                        </div>
                    </div>
                    <div className="inner-content black">
                        <div className="content-wrap-in">
                            <h2>Skills</h2>
                            <p>Over the years I have aquired a lot of skills regarding computers. And over the time I have..</p>
                                <ul>
                                    <li>programmed using different programming languages</li>
                                    <li>learned how to read api documentations</li>
                                    <li>understood desinging concepts (web as well as app)</li>
                                    <li>mastered the art of 100+ WPM</li>
                                    <li>got the hang of how big companies structure their code</li>
                                </ul>
                        </div>
                    </div>
                    <div className="inner-content white">
                        <div className="content-wrap-in">
                            <h2>What got me interested in IT?</h2>
                            <p>When I was about 11 years old, my father tought me touch typing, which were the beginnings of my IT career. 
                                But same as all great things, my journey really started with Minecraft. I really enjoyed playing various Minigames on different Minecraft Servers, 
                                which then led me into creating my own Server, which was my first (but not last) experience with Linux (Debian). Soon I understood, that using other's
                                Plugins is not gonna cut it, so I started learning how to program Minecraft Plugins (at the age of 12), which is how my Java journey started.
                            </p>
                        </div>
                    </div>
                    <div className="inner-content black">
                        <div className="content-wrap-in">
                            <h2>Hobbies</h2>
                            <p>Today's World is a fast changing World - So am I. Some days I like to read for hours, others I don't. Then I just wanna program, while the next day I can't take a look at any code</p>
                            <h3>Sports</h3>
                            <p>I am not really a sports person, the only game I really enjoy playing is Volleyball. 
                                But this does not mean, that I don't care about my physical health. - I visit the gym 2 times a week, which may not seem that much, but it's all I have got time for.</p>
                            <h3>Gaming</h3>
                            <p>As your typical IT Guy, I also play some games. At the moment not really a lot of it, but there were times. My most favourite games are CS:GO, Rocket League and the greatest of all times Minecraft.</p>
                            <h3>Chess</h3>
                            <p>As of July 2020, I really like Chess. Besides watching some games from Hikaru or Botez I also enjoy playing on <a href="https://www.chess.com" target="_blank" rel="noreferrer noopener">Chess.com</a> (especially Puzzles)</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;