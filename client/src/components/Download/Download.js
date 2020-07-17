import React, { Component } from 'react';

//CSS
import './Download.css';

//configs
var HOST = require('../../configs/host.json');

class Download extends Component {
    render(){
        return(
            <div className="post-wrapper">
                <h3>{this.props.title} <span className="post-version">{this.props.version}</span></h3>
                <div className="post-img-wrapper">
                    <img src={this.props.image.replace('$HOST', HOST.host)} alt={this.props.title}/>
                </div>
                <div className="post-text">
                    <p>{this.props.description}</p>
                    <span className="post-api">Api: {this.props.api}</span>
                </div>
                <div className="post-links">
                    <a href={this.props.github} rel="noopener noreferrer">Github</a>
                    <a href={this.props.docs} rel="noopener noreferrer">Docs</a>
                </div>
            </div>
        );
    }
}

export default Download;