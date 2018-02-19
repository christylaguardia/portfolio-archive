import React from 'react';

const SocialLink = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <span className="icon is-large">
      <i className={`fa fa-${icon} fa-2x`} aria-hidden="true"></i>
    </span>
  </a>
);

const EmailLink = () => (
  <a href="mailto:christy@laguardia.io">
    <span className="icon is-large">
      <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
    </span>
  </a>
);

const About = () => (
  <section className="hero is-medium is-primary is-bold">  {/* is-max-height is-max-width */}
    <div className="hero-body"> {/* is-vertical-center" */}
      <div className="container">
        <h1 className="title">
          Christy La Guardia
        </h1>
        <h2 className="subtitle">
          Software Engineer
        </h2>
        <p>
          <EmailLink />
          <SocialLink icon="github" url="https://github.com/christylaguardia/" />
          <SocialLink icon="linkedin" url="https://www.linkedin.com/in/christy-la-guardia/" />
          <SocialLink icon="medium" url="https://medium.com/@christylaguardia/" />
          <SocialLink icon="twitter" url="https://twitter.com/c_la_guardia" />
        </p>
        <p><small>paper plane by Chameleon Design from the <a href="https://thenounproject.com/Chamedesign" target="_blank">Noun Project</a></small></p>
      </div>
    </div>
  </section>
);

export default About;