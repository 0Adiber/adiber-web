import React, { Component } from 'react';
import $ from 'jquery';

import Project from '../../components/Project/Project';

//CSS
import './Projects.scss';

//configs
var HOST = require('../../configs/host.json').host;

class Projects extends Component {
    constructor(props) {
        super(props);

        console.log(HOST)

        this.state = {
            posts: {
                error: null,
                isLoaded: false,
                items: [],
            }
        };
    }
    componentDidMount() {
        $(".nav a").css('color', 'white');
        $(window).scrollTop(0);

        //fetch posts
        fetch(`${HOST}/projects`, { method: "GET" })
            .then(res => {
                if(!res.ok)
                    throw Error("Could not reach Endpoint")
                return res.json()
            })
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        posts: {
                            isLoaded: true,
                            items: result.items
                        }
                    });
                },
                (error) => {
                    this.setState({
                        posts: {
                            isLoaded: true,
                            error
                        },
                    });
                }
            ).catch(error => {
                this.setState({
                    posts: {
                        isLoaded: true,
                        error
                    }
                })
            });
    }

    posts() {
        const {error, isLoaded, items} = this.state.posts;
        if(error) {
            return <div>Error: { error.message }</div>
        } else if(!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div className="projects-wrapper">
                    {items.map(item => (
                        <Project language={item.language} version={item.version} title={item.title} image={item.image} description={item.description} api={item.api} github={item.github} docs={item.docs} file={item.file}/>
                    ))}
                </div>
            );
        }
    }

    render() {
        const flies = [];
        for (let i = 0; i < 20; i++) {
            flies.push(<div className="firefly"></div>);
        }
        return(
            <div>
                <div className="projects-content">
                    <div className="inner-content project-content">
                        {flies}
                        <div className="content-wrap-in">
                            {this.posts()}           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
