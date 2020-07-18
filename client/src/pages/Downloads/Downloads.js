import React, { Component } from 'react';
import $ from 'jquery';

import Download from '../../components/Download/Download';

//CSS
import './Downloads.scss';

//configs
var HOST = require('../../configs/host.json');

class Downloads extends Component {
    constructor(props) {
        super(props);
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
        fetch(`${HOST.host}/downloads`, { method: "GET" })
            .then(res => res.json())
            .then(
                (result) => {
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
            );
    }

    posts() {
        const {error, isLoaded, items} = this.state.posts;
        if(error) {
            return <div>Error: { error.message }</div>
        } else if(!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div className="downloads-wrapper">
                    {items.map(item => (
                        <Download language={item.language} version={item.version} title={item.title} image={item.image} description={item.description} api={item.api} github={item.github} docs={item.docs} file={item.file}/>
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
                <div className="content">
                    <div className="inner-content download-content">
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

export default Downloads;
