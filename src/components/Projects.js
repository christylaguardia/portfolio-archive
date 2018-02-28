import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../data/projects.json';

const Buttons = ({ url, github }) => (
  <div className="field">
    <div className="buttons">
      {url &&
        <a className="button is-text"
          href={url} target="_blank" rel="noopener noreferrer">
          View App</a>}
      <a className="button is-text"
        href={github} target="_blank" rel="noopener noreferrer">
        Source Code</a>
    </div>
  </div>
);

const Title = ({ project }) => (
  <div className="columns is-vcentered">
    <div className="column">
      <p className="title">{project.title}</p>
      <p className="subtitle">{project.summary}</p>
    </div>
    <div className="column is-narrow">
      <Buttons url={project.url} github={project.github} />
    </div>
  </div>
);

const Tags = ({ tags }) => (
  <p className="tags">
    {tags.map((t, i) => <span key={i} className="tag is-primary">{t}</span>)}
  </p>
);

const Project = ({ project }) => (
  <div className="content">
    <Title project={project} />
    <Tags tags={project.tags} />
    {project.image &&
      <p>
        <img src={`/images/${project.image}`}
          alt={project.title}
          style={{ maxHeight: '50vh' }} />
      </p>}
    <p>{project.description}</p>
  </div>
);

const Projects = () => (
  <section className="section" >
    <div className="container is-fluid">
      {projectData.map((p, i) => <Project key={i} project={p} />)}
    </div>
  </section>
);


// const Projects = () => (
//   <div className="content">
//     <div className="has-text-centered">
//       {projectData.map((p, i) => 
//         <p  key={i} className="field">
//           <Link className="button is-large is-primary">{p.title}</Link>
//         </p>
//       )}
//     </div>
    
//   </div>
// );

export default Projects;