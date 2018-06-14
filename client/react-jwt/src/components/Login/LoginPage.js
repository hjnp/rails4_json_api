import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as sessionActions from "../../actions/sessionActions";

const TextInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  type = "text"
}) => {
  let wrapperClass = ["form-group"];

  if (error && error.length > 0) {
    wrapperClass.push("has-error");
  }

  return (
    <div className={wrapperClass.join(" ")}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

class LoginPage extends Component {
  state = {
    credentials: {
      email: "user@example.com",
      password: "monkey67"
    }
  };

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({ credentials: credentials });
  }

  onSave(event) {
    console.log('​LoginPage -> onSave -> event', this.state.credentials, this.props.actions);
    event.preventDefault();
    this.props.actions.loginUser(this.state.credentials);
  }

  render() {
    return (
      <div>
        <h3>LoginPage</h3>
        <form>
        < TextInput
            name="email"
            label="email"
            value={this.state.credentials.email}
            onChange={this.onChange}/>

          < TextInput
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>

          < input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}/>
        </form>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
