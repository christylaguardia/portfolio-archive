import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Routes from './Routes';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <Router>
        <section className="hero is-fullheight">
          <div className="hero-head is-primary">
            <Header />
          </div>
          <div className="hero-body is-light">
            <div className="container has-text-centered">
              <Routes />
            </div>
          </div>
          <div className="hero-foot is-primary">
            <Footer />
          </div>
        </section>
      </Router>
    );
  }
}

export default App;