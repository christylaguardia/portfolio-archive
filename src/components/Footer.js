import React from 'react';

const SocialLink = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <span className="icon is-large">
      <i className={`fa fa-${icon} fa-lg`} aria-hidden="true"></i>
    </span>
  </a>
);

const EmailLink = () => (
  <a href="mailto:christy@laguardia.io">
    <span className="icon is-large">
      <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
    </span>
  </a>
);

// const Footer = () => (
//   <section className="hero is-medium is-primary is-bold">  {/* is-max-height is-max-width */}
//     <div className="hero-body"> {/* is-vertical-center" */}
//       <div className="container">
//         <h1 className="title">
//           Christy La Guardia
//         </h1>
//         <h2 className="subtitle">
//           Software Engineer
//         </h2>
//         <p>
//           <EmailLink />
//           <SocialLink icon="github" url="https://github.com/christylaguardia/" />
//           <SocialLink icon="linkedin" url="https://www.linkedin.com/in/christy-la-guardia/" />
//           <SocialLink icon="medium" url="https://medium.com/@christylaguardia/" />
//           <SocialLink icon="twitter" url="https://twitter.com/c_la_guardia" />
//         </p>
//       </div>
//     </div>
//   </section>
// );

// TODO is-active
const Footer = () => (
  <nav className="tabs">
    <div className="container">
      <ul>
        <EmailLink />
        <SocialLink icon="github" url="https://github.com/christylaguardia/" />
        <SocialLink icon="linkedin" url="https://www.linkedin.com/in/christy-la-guardia/" />
        <SocialLink icon="medium" url="https://medium.com/@christylaguardia/" />
        <SocialLink icon="twitter" url="https://twitter.com/c_la_guardia" />
        <SocialLink icon="codepen" url="https://codepen.io/christylaguardia/" />
        <SocialLink icon="code" url="https://www.codewars.com/users/christylaguardia" />
      </ul>
    </div>
  </nav>
);

export default Footer;