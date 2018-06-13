import React, { Component } from "react";

import VisibleCounter from "../../containers/VisibleCounter";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <p>Home page</p>
        login link here...
        <div>
          <h3>Counter redux</h3>
          <div>
            <VisibleCounter />
          </div>
        </div>
      </div>
    );
  }
}
