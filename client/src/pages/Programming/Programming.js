import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Programming.scss';

//configs
var HOST = require('../../configs/host.json').host;

class Programming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gitOwn: {
                error: null,
                isLoaded: false,
                items: [],
            },
            gitBeans: {
                error: null,
                isLoaded: false,
                items: [],
            },
            languages: {
                error: null,
                isLoaded: false,
                items: [],
            }
        };
    }
    componentDidMount() {
        $(".nav a").css('color', 'white');

        fetch(`${HOST}/apod`).then(res => res.json()).then(res => $("#header").css('background-image', 'url('+res.data+')'))

        $(window).scrollTop(0);

        //fetch github own
        fetch(`${HOST}/github`, { method: "GET" })
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

        //fetch github beanboiz
        fetch(`${HOST}/gitbeans`, { method: "GET" })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        gitBeans: {
                            isLoaded: true,
                            items: result.items
                        }
                    });
                },
                (error) => {
                    this.setState({
                        gitBeans: {
                            isLoaded: true,
                            error
                        },
                    });
                }
            );

        fetch(`${HOST}/languages`, { method: "GET" })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        languages: {
                            isLoaded: true,
                            items: result.items
                        }
                    });
                },
                (error) => {
                    this.setState({
                        languages: {
                            isLoaded: true,
                            error
                        },
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

    github(specific) {
        const {error, isLoaded, items} = (specific === "own" ? this.state.gitOwn : this.state.gitBeans);
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
                        <th>Name</th><th>Description</th><th className="td-middle rez-rem">Owner</th><th className="th-min td-middle rez-rem">Created at</th><th className="th-min td-middle rez-rem">Last edit</th><th className="td-middle">Size(kB)</th><th className="td-middle">Stars</th>
                    </tr>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a></td><td>{item.description}</td><td className="td-middle rez-rem">{item.owner.user}</td>
                            <td className="td-middle rez-rem">{item.created_at.split("T")[0]}</td><td className="td-middle rez-rem">{item.updated_at.split("T")[0]}</td><td className="td-middle">{item.size}</td><td className="td-middle">{item.stars}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            );
        }
    }

    languages() {
        const {error, isLoaded, items} = this.state.languages;
        if(error) {
            return <div>Error: { error.message }</div>
        } else if(!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div id="programming-languages">
                                
                    {
                        items.map(l => {
                            return (
                                <div className="programming-language-wrapper" id={`programming-language-${l.title}`} key={`programming-language-${l.title}`}>
                                    <div className="programming-language-icon">
                                        <a href={l.href} target="_blank" rel="noopener noreferrer"><img src={l.img.replace('$HOST', HOST)} alt={l.alt} /></a>
                                    </div>
                                    <div className="programming-language-text">
                                        {l.text}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
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
                                <h3>Organisation: Beanboiz</h3>
                                <div className="git-projects">{this.github("beans")}</div>
                            </div>              
                        </div>
                    </div>
                    <div className="inner-content white">
                        <div className="content-wrap-in">
                            <h2>Programming Languages I use daily</h2>
                            {this.languages()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Programming;
