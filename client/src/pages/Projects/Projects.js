import React, { Component } from 'react';
import $ from 'jquery';

import Project from '../../components/Project/Project';

//CSS
import './Projects.scss';

//RES
import projectsJson from './res/projects';

class Projects extends Component {
  componentDidMount() {
    $(".nav a").css('color', 'white');
    $(window).scrollTop(0);
  }

  posts() {
    return (
      <div className="projects-wrapper">
        {projectsJson.items.map(item => (
          <Project key={item.title} language={item.language} version={item.version} title={item.title} image={item.image} description={item.description} api={item.api} github={item.github} docs={item.docs} file={item.file} />
        ))}
      </div>
    );
  }

  render() {
    const flies = [];
    for (let i = 0; i < 20; i++) {
      flies.push(<div key={`firefly-${i}`} className="firefly"></div>);
    }
    return (
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
