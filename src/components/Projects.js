import React, { Component } from 'react';
import Loading from './Loading';
import { IconTextLink } from './Links';
import projectData from '../data/projects.json';

const Project = ({ project }) => (
  <div>
    <h2>{project.title}</h2>

    <div className="buttons">
      {project.url && <IconTextLink title="View App" url={project.ref} icon="external-link" />}
      <IconTextLink title="GitHub" url={project.github} icon="external-link" />
    </div>

    {project.image &&
      <p>
        <img src={`/images/${project.image}`}
          alt={project.title}
          style={{ maxHeight: '50vh' }} />
      </p>}

    <p>{project.description}</p>

  </div>
);

class Projects extends Component {

  // state = {
  //   loading: true,
  //   data: []
  // }

  // componentWillMount() {
  //   projectsRef.once('value')
  //     .then(snapshot => {
  //       const data = snapshot.val().reverse();
  //       console.log('fetched data', data);
  //       this.setState({
  //         loading: false,
  //         data
  //       })
  //     });
  // }

  render() {
    // const { title } = this.props.match.params;
    // console.log('project', title);

    return (
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="content">
            {projectData.map((proj, index) => <Project key={index} project={proj} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;