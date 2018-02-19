import React from 'react';

export const TextLink = ({ title, url }) => (
  <p className="button is-text">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <span>{title}</span>
    </a>
  </p>
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
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <span className="icon">
        <i className={`fa fa-${icon}`} aria-hidden="true"></i>
      </span>
    </a>
  </li>
);

export const EmailLink = () => (
  <li>
    <a href="mailto:christy@laguardia.io" target="_blank" rel="noopener noreferrer">
      <span className="icon">
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </span>
    </a>
  </li>
);