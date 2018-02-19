import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  state = {
    open: false
  }

  toggleMenu = () => this.setState(state => ({ open: !state.open }))

  render() {
    return (
      <nav className="navbar is-transparent is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">Christy La Guardia</Link>
          <button data-target="nom-nom-burger"
            className={`navbar-burger burger ${this.state.open ? 'is-active' : ''}`}
            onClick={this.toggleMenu} >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div id="nom-nom-burger"
          className={`navbar-menu ${this.state.open ? 'is-active' : ''}`}
          onClick={this.toggleMenu} >
          <div className="navbar-end">
            <Link className="navbar-item" to="/about">About</Link>
            <Link className="navbar-item" to="/projects">Projects</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;