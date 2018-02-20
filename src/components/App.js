import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Routes from './Routes';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <Router>
        <section className="section is-full-screen">
        
          <header>
            <Header />
          </header>

          <main style={{ minHeight: '100%'}}>
            {/* <section className="section"> */}
            {/* <div className="container has-text-centered"> */}
              <Routes />
            {/* </section> */}
          </main>

          {/* <footer> */}
            <Footer />
          {/* </footer> */}

        </section>
      </Router>
    );
  }
}

export default App;