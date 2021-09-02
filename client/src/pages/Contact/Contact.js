import React, { Component } from 'react';
import $ from 'jquery';

//Fontawesome
import { faDiscord, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//CSS
import './Contact.css';

//Images

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
                            <div className="content-flex">
                                <div className="contact-div">
                                    <a href="https://www.instagram.com/adib3r/" rel="noopener noreferrer" target="_blank">
                                    <div className="contact-icon-wrapper"><FontAwesomeIcon className="contact-icon" icon={faInstagram} /></div></a>
                                    <span className="contact-big">Instagram</span><span className="contact-small">@adib3r</span>
                                </div>
                                <div className="contact-div">
                                    <a href="https://discord.gg/7uFGcAE" rel="noopener noreferrer" target="_blank">
                                    <div className="contact-icon-wrapper"><FontAwesomeIcon className="contact-icon" icon={faDiscord} /></div></a>
                                    <span className="contact-big">Discord</span><span className="contact-small">@MurliGmbH</span>
                                </div>
                                <div className="contact-div">
                                    <a href="https://github.com/0Adiber" rel="noopener noreferrer" target="_blank">
                                    <div className="contact-icon-wrapper"><FontAwesomeIcon className="contact-icon" icon={faGithub} /></div></a>
                                    <span className="contact-big">Github</span><span className="contact-small">@0Adiber</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
