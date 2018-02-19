import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Loading from './Loading';
import { IconTextLink } from './Links';
import projectData from '../data/projects.json';

const Project = ({ project }) => (
  <div className="content">
    <h2>{project.title}</h2>

    {project.image &&
      <p>
        <img src={`/images/${project.image}`}
          alt={project.title}
          style={{ maxHeight: '50vh' }} />
      </p>}

    <p>{project.description}</p>

    <p className="tags">
      {project.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
    </p>

    {project.url && <IconTextLink title="View App" url={project.ref} icon="external-link" />}
    <IconTextLink title="GitHub" url={project.github} icon="external-link" />
  </div>
);

// class Projects extends Component {

//   render() {
//     const { project } = this.props.match.params;
//     console.log('project', project);
//     let proj = null;

//     if (!project) proj = projectData[0];
//     else proj = projectData.filter(p => p.name === project)

//     return (
//       <div className="columns is-centered">
//         <div className="column is-two-thirds">
//           <div className="content">
//             <Project project={proj} />)}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


class Projects extends Component {

  state = {
    projects: projectData.reverse()
  }

  render() {
    return (
      // <ul>
      //   {this.state.projects.map(p => <li><Link to={`/projects/${p.name}`}>{p.title}</Link></li>)}
      // </ul>
      <div>
        {this.state.projects.map((p, i) => <Project project={p}/>)}
      </div>
    );
  }
}

export default Projects;