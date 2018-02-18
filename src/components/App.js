import React, { Component } from 'react';
import About from './About';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-half">
            <About />
          </div>
          <div className="column is-half">
            Second column
          </div>
        </div>

      </div>
    );
  }
}

export default App;
