import React, { Component } from "react";

import { TextInput } from "../UI";

import AuthService from "../service/Auth.service";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";


class LoginPage extends Component {
  state = {
    credentials: {
      email: "user@example.com",
      password: "monkey67"
    }
  };

  Auth = new AuthService();


  onChange = (event) => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({ credentials: credentials });
  }

  onSave = (event) => {
    const { history } = this.props;
    console.log("​LoginPage -> onSave -> event", this.props);
    event.preventDefault();

    this.Auth.login(this.state.credentials.email, this.state.credentials.password)
      .then(res => {
        console.log('​LoginPage -> onSave -> res SSSS', res);
        history.push('/');
      }).catch(err => {
        console.log('​LoginPage -> onSave -> err', err);

      });
  }

  render() {
    return (
      <div>
        <h1>Login Us</h1>
        <form>
          <TextInput
            name="email"
            label="email"
            value={this.state.credentials.email}
            onChange={this.onChange}
          />

          <TextInput
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}
          />

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}
          />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);