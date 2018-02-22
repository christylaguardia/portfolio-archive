import React from 'react';

const NavLink = ({ icon, url }) => (
  <a className="navbar-item"
    href={url} target="_blank" rel="noopener noreferrer">
    <span className="icon">
      <i className={`fa fa-${icon} fa-lg`} aria-hidden="true"></i>
    </span>
  </a>
);

const EmailLink = () => (
  <a className="navbar-item"
    href="mailto:christy@laguardia.io" rel="noopener noreferrer">
    <span className="icon">
      <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
    </span>
  </a>
);

const Footer = () => (
  <nav className="navbar is-primary is-fixed-bottom is-fullwidth">
    <div className="navbar-brand">
      <EmailLink />
      <NavLink icon="linkedin" url="https://www.linkedin.com/in/christy-la-guardia/" />
      <NavLink icon="github" url="https://github.com/christylaguardia/" />
      <NavLink icon="codepen" url="https://codepen.io/christylaguardia/" />
      <NavLink icon="twitter" url="https://twitter.com/c_la_guardia" />
      <NavLink icon="medium" url="https://medium.com/@christylaguardia/" />
    </div>
  </nav>
);

export default Footer;