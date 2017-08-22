import React, {Component} from 'react';
import {HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import router from './router.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the main landing!</h1>
        <p>So happy</p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about/faq">FAQ</Link>
        <Link to="/people">People</Link>
        {router}
      </div>
    );
  }
}

export default App;
