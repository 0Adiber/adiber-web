import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Programming.css';

//Header images
import bgs from './img/HeaderImg';

//Images
import csharpImg from './img/c#.png';
import cppImg from './img/cpp.svg';
import javaImg from './img/java.svg';
import cImg from './img/c.png';
import jsImg from './img/js.svg';
import htmlImg from './img/html.svg';
import cssImg from './img/css.svg';
import phpImg from './img/php.svg';
import pythonImg from './img/python.svg';
import reactjsImg from './img/reactjs.svg';
import nodejsImg from './img/nodejs.svg';
import expressjsImg from './img/expressjs.svg';
import goImg from './img/go.png';

//languages
var languages = []

//configs
var HOST = require('../../configs/host.json');

class Programming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gitOwn: {
                error: null,
                isLoaded: false,
                items: [],
            },
            gitAlda: {
                error: null,
                isLoaded: false,
                items: [],
            },
        };
    }
    componentDidMount() {
        $(".nav a").css('color', 'white');

        let path = Math.floor(Math.random()*bgs.length);

        $("#header").css('background-image', 'url('+bgs[path]+')');
        $(window).scrollTop(0);

        languages = require('./languages.json').items

        //fetch github own
        fetch(`http://${HOST.host}:33333/github`, { method: "GET" })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        gitOwn: {
                            isLoaded: true,
                            items: result.items
                        }
                    });
                },
                (error) => {
                    this.setState({
                        gitOwn: {
                            isLoaded: true,
                            error
                        },
                    });
                }
            );

        //fetch github alda
        fetch(`http://${HOST.host}:33333/gitalda`, { method: "GET" })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        gitAlda: {
                            isLoaded: true,
                            items: result.items
                        }
                    });
                },
                (error) => {
                    this.setState({
                        gitAlda: {
                            isLoaded: true,
                            error
                        },
                    });
                }
            );

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

    github(specific) {
        const {error, isLoaded, items} = (specific === "own" ? this.state.gitOwn : this.state.gitAlda);
        if(error) {
            return <div>Error: { error.message }</div>
        } else if(!isLoaded) {
            return <div>Loading ...</div>
        } else {
            setTimeout(() => {this.resizeGithub()}, 30);
            return (
                <table className="git-table" id={"git-table-" + specific}>
                <tbody>
                    <tr>
                        <th>Name</th><th>Description</th><th className="td-middle rez-rem">Owner</th><th className="th-min td-middle rez-rem">Created at</th><th className="th-min td-middle rez-rem">Last edit</th><th className="td-middle">Size(kB)</th>
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
                            <div className="inner-section">
                                <h3>My Public Github Repos</h3>
                                <div className="git-projects">{this.github("own")}</div>
                            </div>
                            <div className="inner-section">
                                <h3>Organisation: Alda-DHIF17</h3>
                                <div className="git-projects">{this.github("alda")}</div>
                            </div>                            
                        </div>
                    </div>
                    <div className="inner-content white">
                        <div className="content-wrap-in">
                            <h2>Programming Languages I use</h2>

                            <div id="programming-languages">
                                
                                {
                                    languages.map(l => {
                                        return (
                                            <div className="programming-language-wrapper" id={`programming-language-${l.title}`}>
                                                <div className="programming-language-icon">
                                                    <a href={l.href} target="_blank" rel="noopener noreferrer"><img src={require(`${l.img}`)} alt={l.alt} /></a>
                                                </div>
                                                <div className="programming-language-text">
                                                    {l.text}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="inner-content black">
                        <div className="content-wrap-in">
                            <h2>Fuhn</h2>
                            <p>This section is just about stuff I programmed, but which is completely unecessary (probably).</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Programming;
