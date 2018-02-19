import React, { Component } from 'react';
import { projectsRef } from '../services/firebase';

const Project = ({ project }) => (
  <div>
    <h2>{project.title}</h2>
  </div>
);

class Projects extends Component {

  state = {
    loading: true,
    data: []
  }

  componentWillMount() {
    projectsRef.once('value')
      .then(snapshot => {
        const data = snapshot.val();
        console.log('fetched data', data);
        this.setState({
          loading: false,
          data
        })
      });
  }

  render() {
    const { loading, data } = this.state;

    return (
      <div className="container">
        <div className="content">

          { loading
            ? <p>loading...</p>
            : data.map((proj, index) => <Project project={proj} />)}
        </div>
      </div>
    );
  }
}
export default Projects;