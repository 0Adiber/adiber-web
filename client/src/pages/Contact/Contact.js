import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Contact.css';

//Images
import instagram from './img/instagram.png';
import discord from './img/discord.png';

class Contact extends Component {
    componentDidMount() {
        $(".nav a").css('color', 'white');

        $(window).scrollTop(0);
    }

    render() {
        return(
            <div>
                <div className="inner-content" id="setThisBg">
                    <div id="wrap-this-shit">
                        <div className="content-wrap-in">
                            <div className="contact-div">
                                <a href="https://www.instagram.com/adib3r/" rel="noopener noreferrer" target="_blank"><img alt="Instagram" src={instagram} /></a>
                                <span className="contact-big">Instagram</span><span className="contact-small">Wanna send me some memes? - way to go</span>
                            </div>
                            <div className="contact-div">
                                <a href="https://discord.gg/7uFGcAE" rel="noopener noreferrer" target="_blank"><img alt="Discord" src={discord} /></a>
                                <span className="contact-big">Discord</span><span className="contact-small">This is my official Discord-Server -&gt; use this to really contact me</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
