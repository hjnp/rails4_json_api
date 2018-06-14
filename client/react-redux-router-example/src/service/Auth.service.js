import decode from "jwt-decode";

export default class AuthService {
  constructor(domain) {
    this.domain = domain || `http://localhost:3000`;
  }

  login = (email, password) => {
    const headers = {
      Accept: "application/json",
      "Content-type": "application/json"
    };
    const url = `${this.domain}/auth/sign_in`;
    const options = {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    };

    return fetch(url, {
      headers,
      ...options
    }).then(resp => {
      console.log("​AuthService -> login -> resp", resp.headers.get("Access-Token"));
      this.setToken(resp.headers.get("Access-Token"))
    });
  };

  fetch = (url, options) => {
    const headers = {
      Accept: "application/json",
      "Content-type": "application/json"
    };

    if (this.loggedIn()) {
      headers["Authorization"] = `Bearer ${this.getToken()}`;
    }

    return fetch(url, {
      headers,
      ...options
    })
      // .then(this._checkStatus)
      .then(response => response.json());
  };

  getToken = () => {
    return localStorage.getItem("jwt");
  };

  setToken = token => {
    return localStorage.setItem("jwt", token);
  };

  loggedIn = () => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  };

  isTokenExpired = token => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log("​}catch -> e", e);
      return false;
    }
  };

  logout = () => {
    localStorage.removeItem("jwt");
  };

  getProfile = () => {
    return decode(this.getToken());
  };

  _checkStatus = response => {
    console.log(
      "​XXXXXXXXXX_checkStatus -> response",
      response
    );
    if (response.status >= 200 && response < 305) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };
}
