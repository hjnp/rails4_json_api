import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
 
import { Main } from './Routes'


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">| Home |</Link>
          <Link to="/login"> | Login | </Link>
          <Link to="/about-us">| About |</Link>
        </header>

        <Main />
      </div>
    );
  }
}

export default App;
