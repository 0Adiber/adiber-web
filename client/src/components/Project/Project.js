import React, { Component } from 'react';

//CSS
import './Project.scss';

//configs
var HOST = require('../../configs/host.json').host;

class Project extends Component {
    render(){
        var cardStyle = {
            backgroundImage: `url(${this.props.image.replace('$HOST', HOST)})`,
        }
        console.log(cardStyle)
        return(

            <div className="project-card">
                <div className="card-front" style={cardStyle}>
                    {/*<h3>{this.props.title} <span className="post-version">v{this.props.version}</span></h3>*/}
                </div>
                <div className="card-back">
                    <h3>{this.props.title} <span className="post-version">v{this.props.version}</span></h3>
                    <div className="card-text">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="card-links">
                        <a href={this.props.github} rel="noopener noreferrer" target="_blank">Github</a>
                        {this.props.docs ? <a href={this.props.docs} rel="noopener noreferrer" target="_blank">Docs</a>:""}
                        {this.props.file ? <a href={this.props.file.replace('$HOST', HOST.host)} target="_blank" rel="noopener noreferrer">Download</a>:""}
                    </div>
                </div>
                
                {/*<div className="post-wrapper">
                <h3>{this.props.title} <span className="post-version">v{this.props.version}</span></h3>
                <div className="post-img-wrapper">
                    <img src={this.props.image.replace('$HOST', HOST.host)} alt={this.props.title}/>
                </div>
                <div className="post-text">
                    <p>{this.props.description}</p>
                    {this.props.api !== "--" ? <span className="post-api">Api: {this.props.api}</span>:""}
                </div>
                <div className="post-links">
                    <a href={this.props.github} rel="noopener noreferrer" target="_blank">Github</a>
                    {this.props.docs !== "--" ? <a href={this.props.docs} rel="noopener noreferrer" target="_blank">Docs</a>:""}
                    <a href={this.props.file.replace('$HOST', HOST.host)} target="_blank" rel="noopener noreferrer">Download</a>
                </div>
                </div>*/}
            </div>

        );
    }
}

export default Project;