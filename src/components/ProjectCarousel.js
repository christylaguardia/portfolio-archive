import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projectData from '../data/projects.json';


const Buttons = ({ url, github }) => (
  <div className="field">
    <div className="buttons">
      {url &&
        <a className="button is-text"
          href={url} target="_blank" rel="noopener noreferrer">
          View App</a>}
      <a className="button is-text"
        href={github} target="_blank" rel="noopener noreferrer">
        Source Code</a>
    </div>
  </div>
);

const Title = ({ project }) => (
  <div className="columns is-vcentered">
    <div className="column">
      <p className="title">{project.title}</p>
      <p className="subtitle">{project.summary}</p>
    </div>
    <div className="column is-narrow">
      <Buttons url={project.url} github={project.github} />
    </div>
  </div>
);

const Tags = ({ tags }) => (
  <p className="tags">
    {tags.map((t, i) => <span key={i} className="tag is-primary">{t}</span>)}
  </p>
);

const Project = ({ project }) => (
  <div className="content">
    <Title project={project} />
    <Tags tags={project.tags} />
    {project.image &&
      <p>
        <img src={`/images/${project.image}`}
          alt={project.title}
          style={{ maxHeight: '50vh' }} />
      </p>}
    <p>{project.description}</p>
  </div>
);

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    ></div>
  );
}

const NextArrow = ({ className, style, onClick }) => (
  <span className={`${className} icon is-large`} onClick={onClick}>
    <i className="fa fa-chevron-circle-right fa-3x" aria-hidden="true"></i>
  </span>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}>
    <span className="icon" onClick={onClick}>
      <i className="fa fa-angle-left fa-lg" aria-hidden="true"></i>
    </span>
  </div>
);


class ProjectCarousel extends PureComponent {
  render() {
    const settings = {
      accessibility: true,
      dots: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <section className="section">
        <div className="container">
          <Slider {...settings}>
            {projectData.map((p, i) => <div key={i}><Project project={p} /></div>)}
          </Slider>
        </div>
      </section>
    );
  }
}

export default ProjectCarousel;