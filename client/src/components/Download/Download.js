import React, { Component } from 'react';

//CSS
import './Download.css';

class Download extends Component {
    render(){
        return(
            <div className="post-wrapper">
                <h3>{this.props.title} <span className="post-version">{this.props.version}</span></h3>
                <img src={this.props.image} alt={this.props.title}/>
                <p>{this.props.description}</p>
                <span className="post-api">Api: {this.props.api}</span>
                <a href={this.props.github} rel="noopener noreferrer">Github</a>
                <a href={this.props.docs} rel="noopener noreferrer">Docs</a>
            </div>
        );
    }
}

export default Download;