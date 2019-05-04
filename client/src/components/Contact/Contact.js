import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Contact.css';
//Background images
import bgs from './img/BgImgs.js';

class Contact extends Component {
    componentDidMount() {
        $(".nav a").css('color', 'black');

        let path = Math.floor(Math.random()*bgs.length);
        $("#setThisBg").css('background-image', 'url('+bgs[path]+')');

        $(window).scrollTop(0);
    }

    postForm() {
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    name: "John",
                    email: "john@example.com"
                }
            })
        });
    }

    render() {
        return(
            <div>
                <div className="inner-content" id="setThisBg">
                    <div id="wrap-this-shit">
                        <div className="content-wrap-in">
                            <form id="contact-form">
                                <input type="text" name="name" required placeholder="Name"/>
                                <input type="text" name="email" required placeholder="E-Mail"/>
                                <input type="text" name="msg" required placeholder="Type your message here..."/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
