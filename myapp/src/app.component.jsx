import React, { Component } from 'react';
import logo from './logo.svg';
import './app.component.css';

class AppComponent extends Component {
  render() {
    return (
      <div className="AppComponent">
        <header className="AppComponent-header">
          <img src={logo} className="AppComponent-logo" alt="logo" />
          <h1 className="AppComponent-title">Welcome to React</h1>
        </header>
        <p className="AppComponent-intro">
          To get started, edit <code>src/AppComponent.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default AppComponent;