import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconTextLink } from './Links';
import projectData from '../data/projects.json';


export const Button = ({ title, url, icon }) => (
  <a href={url}
    target="_blank"
    rel="noopener noreferrer">
    <span className="icon">
      <i className={`fa fa-${icon}`} aria-hidden="true"></i>
    </span>
    <span>{title}</span>
  </a>
);

const Project = ({ project }) => (
  <section className="section">
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <div className="content">
          <h2 className="title">{project.title}</h2>
          <h3 className="subtitle">{project.summary}</h3>

          <div className="buttons has-addons">
            {project.url && <Button title="View App" url={project.ref} icon="external-link" />}
            <Button title="GitHub" url={project.github} icon="github" />
          </div>

          {project.image &&
            <p>
              <img src={`/images/${project.image}`}
                alt={project.title}
                style={{ maxHeight: '50vh' }} />
            </p>}

          <p>{project.description}</p>

          <p className="tags">
            {project.tags.map((t, i) => <span key={i} className="tag is-primary">{t}</span>)}
          </p>
          
        </div>
      </div>
    </div>
  </section>
);

class Projects extends Component {

  state = {
    projects: projectData.reverse()
  }

  render() {
    return (
      <div className="content">
        {this.state.projects.map((p, i) => <Project key={i} project={p}/>)}
      </div>
    );
  }
}

export default Projects;