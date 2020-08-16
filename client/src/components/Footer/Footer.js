import React, { Component } from 'react';

//CSS
import './Footer.scss';

//Fontawesome
import { faDiscord, faInstagram, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
    render(){
        return(
            <div className="footer-wrapper">
                <div className="footer-top">
                    <h3>Links</h3>
                    <div className="footer-logos">
                        <div className="footer-logo-wrapper">
                            <a className="footer-link" href="https://twitter.com/Aadiber" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
                            </a>
                            <span>@Aadiber</span>
                        </div>
                        <div className="footer-logo-wrapper">
                            <a className="footer-link" href="https://www.instagram.com/adib3r/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
                            </a>
                            <span>@adib3r</span>
                        </div>
                        <div className="footer-logo-wrapper">
                            <a className="footer-link" href="https://discord.gg/7uFGcAE" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="footer-icon" icon={faDiscord} />
                            </a>
                            <span>@MurliGmbH</span>
                        </div>
                        <div className="footer-logo-wrapper">
                            <a className="footer-link" href="https://github.com/0Adiber" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="footer-icon" icon={faGithub} />
                            </a>
                            <span>@0Adiber</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;