import React from 'react';

const SocialLink = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <span class="icon">
      <i className={`fa fa-${icon}`} aria-hidden="true"></i>
    </span>
  </a>
);

const EmailLink = () => (
  <a href="mailto:christy@laguardia.io">
    <span class="icon">
      <i className="fa fa-envelope" aria-hidden="true"></i>
    </span>
  </a>
);

const About = () => (
  <section className="hero is-primary is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Christy La Guardia
        </h1>
        <h2 className="subtitle">
          Software Engineer
        </h2>
        <p>
          <EmailLink />
          <SocialLink icon="envelope" url="mailto:christy@laguardia.io" />
          <SocialLink icon="github" url="https://github.com/christylaguardia/" />
          <SocialLink icon="linkedin" url="https://www.linkedin.com/in/christy-la-guardia/" />
          <SocialLink icon="medium" url="https://medium.com/@christylaguardia/" />
          <SocialLink icon="twitter" url="https://twitter.com/c_la_guardia" />
        </p>
      </div>
    </div>
  </section>
);

export default About;