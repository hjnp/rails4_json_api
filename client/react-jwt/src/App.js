import React, { Component } from "react";
import "./App.css";
import Header from "./components/common/Header";
import { NavLink } from 'react-router-dom';
import Routes from './routes';

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/' activeClassName="current">Home</NavLink></li>
      <li><NavLink to='/login' activeClassName="current">Login</NavLink></li>
      <li><NavLink to='/logout' activeClassName="current">logout</NavLink></li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Navigation />
        <Routes />
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default App;
