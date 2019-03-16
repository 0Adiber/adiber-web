import React, { Component } from 'react';

//CSS
import './Footer.css';

//Images
import twitter from './img/twitter.png';
import instagram from './img/instagram.png';
import discord from './img/discord.png';
import github from './img/github.png';

class Footer extends Component {
    render(){
        return(
            <div className="footer-wrapper">
                <div className="footer-top">
                    <h3>Links</h3>
                    <div className="footer-logos">
                        <a href="https://twitter.com/Aadiber" target="_blank" rel="noopener noreferrer"><img src={twitter} id="twitter" alt="Twitter" /></a>
                        <a href="https://www.instagram.com/adib3r/" target="_blank" rel="noopener noreferrer"><img src={instagram} id="insta" alt="Twitter" /></a>
                        <a href="https://discord.gg/7uFGcAE" target="_blank" rel="noopener noreferrer"><img src={discord} id="dc" alt="Twitter" /></a>
                        <a href="https://github.com/0Adiber" target="_blank" rel="noopener noreferrer"><img src={github} id="git" alt="Twitter" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;