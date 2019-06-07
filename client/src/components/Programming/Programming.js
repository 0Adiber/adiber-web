import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Programming.css';

//Header images
import bgs from './img/HeaderImg';

//Images
import csharpImg from './img/c#.png';
import javaImg from './img/java.png';
import cImg from './img/c.png';

//configs
var HOST = require('../_configs/host.json');

class Programming extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }
    componentDidMount() {
        $(".nav a").css('color', 'white');

        let path = Math.floor(Math.random()*bgs.length);

        $("#header").css('background-image', 'url('+bgs[path]+')');
        $(window).scrollTop(0);

        fetch(`http://${HOST.host}:33333/github`, { method: "GET" })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

        window.addEventListener('resize', this.resizeGithub);
    }

    resizeGithub() {
        let  ells = document.getElementsByClassName("rez-rem");
        if(window.innerWidth < 750) {
            for(let e of ells) {
                e.style.display = "none";
            }
        } else {
            for(let e of ells) {
                e.style.display = "";
            }
        }
    }

    github() {
        const {error, isLoaded, items} = this.state;
        if(error) {
            return <div>Error: { error.message }</div>
        } else if(!isLoaded) {
            return <div>Loading ...</div>
        } else {
            setTimeout(() => {this.resizeGithub()}, 30);
            return (
                <table id="git-table">
                <tbody>
                    <tr>
                        <th>Name</th><th>Description</th><th className="td-middle rez-rem">Owner?</th><th className="th-min td-middle rez-rem">Created at</th><th className="th-min td-middle rez-rem">Last edit</th><th className="td-middle">Size(kb)</th>
                    </tr>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a></td><td>{item.description}</td><td className="td-middle rez-rem">{item.owner.user}</td>
                            <td className="td-middle rez-rem">{item.created_at.split("T")[0]}</td><td className="td-middle rez-rem">{item.updated_at.split("T")[0]}</td><td className="td-middle">{item.size}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            );
        }
    }

    render() {
        return(
            <div>
                <div id="header">
                </div>
                <div className="content">
                    <div className="inner-content black">
                        <div className="content-wrap-in">
                            <h2>Github repositories</h2>
                            <h3>Own/&Friend's</h3>
                            <div id="git-projects">{this.github()}</div>
                            <h3>Organisation: Alda-DHIF17</h3>
                        </div>
                    </div>
                    <div className="inner-content white">
                        <div className="content-wrap-in">
                            <h2>Programming Languages I use</h2>
                            <div id="programming-languages">
                                <div className="programming-language-wrapper" id="programming-language-java">
                                    <div className="programming-language-icon">
                                        <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer"><img src={javaImg} alt="Java-Logo" /></a>
                                    </div>
                                    <div className="programming-language-text">
                                        2018/19 (10th grade) we are primarily learning JAVA in school.
                                    </div>
                                </div>
                                <div className="programming-language-wrapper" id="programming-language-c#">
                                    <div className="programming-language-icon">
                                        <a href="https://docs.microsoft.com/de-de/dotnet/csharp/" target="_blank" rel="noopener noreferrer"><img src={csharpImg} alt="C#-Logo" /></a>
                                    </div>
                                    <div className="programming-language-text">
                                        Using it for an optional subject called ALDA.
                                    </div>
                                </div>
                                <div className="programming-language-wrapper" id="programming-language-c">
                                    <div className="programming-language-icon">
                                        <a href="https://en.wikipedia.org/wiki/The_C_Programming_Language" target="_blank" rel="noopener noreferrer"><img src={cImg} alt="C-Logo" /></a>
                                    </div>
                                    <div className="programming-language-text">
                                        2017/18 (9th grade) we were learning C in school.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inner-content black">
                        <div className="content-wrap-in">
                            <h2>Web-Fun</h2>
                            <p>Web-Fun is just a neat name I came up with for things, that I programmed, but are unecessary or funny in some way.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Programming;
