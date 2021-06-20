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
                            <p>I am Adrian, a 18-year old student from Austria. Studying IT at the HTBLA Kaindorf</p>
                        </div>
                    </div>
                    <div className="inner-content white">
                        <div className="content-wrap-in">
                            <h2>What I do</h2>
                            <p>I am still attending school, what makes it sometimes difficult to do what I actually want.
                                    On weekends though I can pretty much do stuff I like. As for example learning new things
                                    , learning a (programming) language or watching some Netflix. Playing computer games is sometimes
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
                                </ul>
                        </div>
                    </div>
                    <div className="inner-content white">
                        <div className="content-wrap-in">
                            <h2>What got me interested in IT?</h2>
                            <p>When I was in 3rd grade of secondary school, I learned touch typing, which were the beginnings of my IT career. 
                                But same as all great things, my journey really started with Minecraft. I enjoyed playing various Minigames on different Minecraft Servers, 
                                which led me into creating my own Server, resulting in my first (but not last) experience with Linux (Debian). Soon I understood, that using other people's
                                Plugins is not gonna work out for me, so I started learning how to program Minecraft Plugins (~12 years of age), which is how my (bumpy) Java journey started.
                            </p>
                        </div>
                    </div>
                    <div className="inner-content black">
                        <div className="content-wrap-in">
                            <h2>Hobbies</h2>
                            <p>Today's World is a fast changing World - So am I 😄. Some days I like to read for hours, others I don't. Then I just wanna program, while the next day I can't take a look at any code</p>
                            <h3>Programming</h3>
                            <p>As you probably guessed, I like programming. I find myself especially interested in working with other people's APIs</p>
                            <h3>Cybersecurity</h3>
                            <p>CTFing with <a href="https://github.com/B34nB01z" target="_blank" rel="noopener noreferrer" className="pretty-link">@Beanboiz</a> and <a href="https://hack.more.systems/" target="_blank" rel="noopener noreferrer" className="pretty-link">@LosFuzzys</a> - whilst always learning something new</p>
                            <h3>Gaming</h3>
                            <p>As your typical IT Guy, I also play some games. At the moment not really a lot of it, but there were times. My most favourite games are CS:GO, Rocket League and the all-time star Minecraft.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
