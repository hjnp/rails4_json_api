import React, { Component } from "react";
import AuthService from "./Auth.service";

import { push } from "react-router-redux";

export default (withAuth = AuthComponent => {
  const Auth = new AuthService();

  return class AuthWrapped extends Component {
    constructor() {
      super();
      this.state = {
        user: null
      };
    }

    componentWillMount() {
      if (!Auth.loggedIn()) {
        push("/login");
      } else {
        try {
          const profile = Auth.getProfile();
          this.setState({
            user: profile
          });
        } catch (err) {
          Auth.logout();
          push("/login");
        }
      }
    }

    render() {
      if (this.state.user) {
        return <AuthComponent {...this.props} {...this.state} />;
      } else {
        return null;
      }
    }
    
  };
});
