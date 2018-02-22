import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Routes from './Routes';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="is-full-screen">
          <Header />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;