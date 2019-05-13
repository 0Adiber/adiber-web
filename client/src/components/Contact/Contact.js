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
        fetch('http://localhost:33333/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    name: document.getElementById("inName").innerText,
                    email: document.getElementById("inMail").innerText,
                    message: document.getElementById("inMsg").innerText
                }
            })
        }).then((response)=> {
            if(response.status === 200) {
                console.log("Success");
                //redirect to home
                //say that form sent
            } else {
                console.log("no Success")
                //dont redirect to home
                //say that form not sent
            }
        });
    }

    render() {
        return(
            <div>
                <div className="inner-content" id="setThisBg">
                    <div id="wrap-this-shit">
                        <div className="content-wrap-in">
                            <div id="contact-form">
                                <input id="inName" type="text" name="name" required placeholder="Name"/><span className="line"></span>
                                <input id="inMail" type="text" name="email" required placeholder="E-Mail"/><span className="line"></span>
                                <textarea id="inMsg" type="text" name="msg" required placeholder="Type your message here..."/>
                                <button name="submit" id="btnSub" onClick={this.postForm}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
