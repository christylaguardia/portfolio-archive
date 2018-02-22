import React from 'react';

const TextLink = ({ title, url }) => (
  <a className="button is-text" href={url} target="_blank" rel="noopener noreferrer">
    <span>{title}</span>
  </a>
);

const About = () => (
  <section className="section">
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <div className="content">
          <p className="title">Christy La&nbsp;Guardia</p>
          <p className="subtitle">Software Engineer</p>
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