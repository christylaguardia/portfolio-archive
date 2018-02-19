import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  state = {
    open: false
  }

  toggleMenu = () => this.setState(state => ({ open: !state.open }))

  render() {
    const { user, logout } = this.props;
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
            <span>Christy La Guardia</span>
          </div>
          <button
            className={`navbar-burger burger ${this.state.open ? 'is-active' : ''}`}
            data-target="burger-options" onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div id="burger-options"
          className={`navbar-menu ${this.state.open ? 'is-active' : ''}`}
          onClick={this.toggleMenu} >
          <div className="navbar-end">
            <Link className="navbar-item" to="/">Chat</Link>
            <Link className="navbar-item" to="/about">About</Link>
            <Link className="navbar-item" to="/projects">Projects</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;