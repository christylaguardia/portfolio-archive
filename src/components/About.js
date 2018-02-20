import React from 'react';
import { TextLink } from './Links';

const About = () => (
  <div className="columns is-centered">
    <div className="column is-two-thirds">
      <div className="content">
        <h1 className="title">
          Christy La Guardia
        </h1>
        <h2 className="subtitle">
          Software Engineer
        </h2>
        <p>
          I love finding simple solutions to complex problems.
        </p>
        <p>
          That’s why I’m living the dream as a full stack JavaScript developer. After hours, you might find me on a trail with my beagle, Charlie, making pottery or exploring Portland’s many delicious and unique ice creameries.
        </p>
        <TextLink title="See my code on GitHub." url="https://github.com/christylaguardia/" />
        <TextLink title="Email me." url="mailto:christy@laguardia.io" />
      </div>
    </div>
  </div>
);

export default About;