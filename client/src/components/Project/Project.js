import React, { Component } from 'react';

//CSS
import './Project.scss';

class Project extends Component {
  render() {
    var cardStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL +this.props.image})`,
    }
    return (

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
            {this.props.docs ? <a href={this.props.docs} rel="noopener noreferrer" target="_blank">Docs</a> : ""}
            {this.props.file ? <a href={process.env.PUBLIC_URL + this.props.file} target="_blank" rel="noopener noreferrer">Download</a> : ""}
          </div>
        </div>
      </div>

    );
  }
}

export default Project;