import React, { Component } from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from "../modules/counter";

import AuthService from '../service/Auth.service';

class Home extends Component {
  
  constructor(){
    super();
    this.Auth = new AuthService();
  }

  componentDidMount() {
    this.Auth.fetch(`http://localhost:3000/users`, { method: "GET" })
    .then(res => {
    console.log('​Home -> componentDidMount -> res', res);
      
    })
  }
  render() {
    const {
      count,
      increment,
      isIncrementing,
      incrementAsync,
      decrement,
      decrementAsync,
      isDecrementing,
      changePage
    } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>Count: {count}</p>

        <p>
          <button onClick={increment} disabled={isIncrementing}>
            Increment
          </button>
          <button onClick={incrementAsync} disabled={isIncrementing}>
            Increment Async
          </button>
        </p>

        <p>
          <button onClick={decrement} disabled={isDecrementing}>
            Decrementing
          </button>
          <button onClick={decrementAsync} disabled={isDecrementing}>
            Decrement Async
          </button>
        </p>

        <p>
          <button onClick={() => changePage()}>
            Go to about page via redux
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
