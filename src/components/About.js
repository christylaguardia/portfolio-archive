import React from 'react';
import { TextLink } from './Links';

const About = () => (
  <section className="section">
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <div className="content">
          <h2 className="title">
            <span>Christy La&nbsp;Guardia</span>
          </h2>
          <h3 className="subtitle">
            Software Engineer
          </h3>
          <p>
            I love finding simple solutions to complex problems.
          </p>
          <p>
            That’s why I’m living my dream as a full stack JavaScript developer.
          </p>
          <p>
            After hours, you might find me on a trail with my beagle, Charlie, making pottery or exploring Portland’s many delicious and unique ice creameries.
          </p>
          <TextLink title="See my code on GitHub." url="https://github.com/christylaguardia/" />
          <TextLink title="Email me." url="mailto:christy@laguardia.io" />
        </div>
      </div>
    </div>
  </section>
);

export default About;