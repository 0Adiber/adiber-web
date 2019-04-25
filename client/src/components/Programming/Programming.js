import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './Programming.css';

//Header images
import bgs from './img/HeaderImg';

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
        
        fetch("http://localhost:33333/github", { method: "GET" })
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

    }

    github() {
        const {error, isLoaded, items} = this.state;
        if(error) {
            return <div>Error: { error.message }</div>
        } else if(!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <table id="git-table">
                    <tr>
                        <th>Name</th><th>Description</th><th>Created at</th><th>Last edit</th><th>Size(kb)</th>
                    </tr>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td> <td>{item.price}</td>
                        </tr>
                    ))}
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
                            <div id="git-projects">{ this.github() }</div>  
                        </div>
                    </div>
                    <div className="inner-content white">
                        <div className="content-wrap-in">
                            <h3>NSA is watching you</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Programming;
