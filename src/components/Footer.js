import React from 'react';
import { IconLink, EmailLink } from './Links';

const Footer = () => (
  <nav className="tabs">
    <div className="container">
      <ul>
        <EmailLink />
        <IconLink icon="github" url="https://github.com/christylaguardia/" />
        <IconLink icon="linkedin" url="https://www.linkedin.com/in/christy-la-guardia/" />
        <IconLink icon="medium" url="https://medium.com/@christylaguardia/" />
        <IconLink icon="twitter" url="https://twitter.com/c_la_guardia" />
        <IconLink icon="codepen" url="https://codepen.io/christylaguardia/" />
        <IconLink icon="code" url="https://www.codewars.com/users/christylaguardia" />
      </ul>
    </div>
  </nav>
);

export default Footer;