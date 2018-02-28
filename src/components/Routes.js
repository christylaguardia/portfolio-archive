import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Chat from './Chat';
import About from './About';
import Projects from './Projects';
import ProjectGallery from './ProjectGallery';
import ProjectCarousel from './ProjectCarousel';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Chat} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={ProjectCarousel} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;