import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Chat from './Chat';
import About from './About';
import Projects from './Projects';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Chat} />
    <Route path="/about" component={About} />
    {/* <Route path="/projects/:title" component={Projects} /> */}
    <Route path="/projects" component={Projects} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
