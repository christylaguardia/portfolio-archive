import React from 'react';

export const TextLink = ({ title, url }) => (
  <a className="button is-text" href={url} target="_blank" rel="noopener noreferrer">
    <span>{title}</span>
  </a>
);

export const IconTextLink = ({ title, url, icon }) => (
  <p className="button">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <span className="icon">
        <i className={`fa fa-${icon}`} aria-hidden="true"></i>
      </span>
      <span>{title}</span>
    </a>
  </p>
);

export const IconLink = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <span className="icon">
      <i className={`fa fa-${icon}`} aria-hidden="true"></i>
    </span>
  </a>
);

export const EmailLink = () => (
  <a href="mailto:christy@laguardia.io" target="_blank" rel="noopener noreferrer">
    <span className="icon">
      <i className="fa fa-envelope" aria-hidden="true"></i>
    </span>
  </a>
);