import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Programming.css';

//Header images
import bgs from './img/HeaderImg';

//Images
import javaImg from './img/java.png';

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
        
        fetch("http://themurli.net:33333/github", { method: "GET" })
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
                        <th>Name</th><th>Description</th><th className="td-middle rez-rem">Who?</th><th className="th-min td-middle rez-rem">Created at</th><th className="th-min td-middle rez-rem">Last edit</th><th className="td-middle">Size(kb)</th>
                    </tr>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td><td>{item.description}</td><td className="td-middle rez-rem">{(item.owner.id === 44465736) ? "Me" : "Me & Friends"}</td>
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
                <div id="header" >
                </div>
                <div className="content">
                    <div className="inner-content black">
                        <div className="content-wrap-in">
                            <h2>Github repositories</h2>
                            <div id="git-projects">{this.github()}</div>  
                        </div>
                    </div>
                    <div className="inner-content white">
                        <div className="content-wrap-in">
                            <h2>At the moment I am working with</h2>
                            <div className="programming-language-wrapper">
                                <div className="programming-language-icon">
                                    <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer"><img src={javaImg} alt="Java-Logo" /></a>
                                </div>
                                <div className="programming-language-text">
                                    We are learning JAVA at school.
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
