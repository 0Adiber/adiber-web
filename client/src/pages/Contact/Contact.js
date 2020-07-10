import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Contact.css';

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
                                <img alt="Instagram" />
                                <span className="contact-big">Instagram</span><span className="contact-small">Wanna send me some memes? - way to go</span>
                            </div>
                            <div className="contact-div">
                                <img alt="Discord" />
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
