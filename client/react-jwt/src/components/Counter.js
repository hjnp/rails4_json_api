import React, { Component } from "react";

// React component
export default class Counter extends Component {
  render() {
    const { count, wish_value, onIncreaseClick, onUpdateClick } = this.props;
    return (
      <div>
        <p>Counter widget</p>
        <span>{count}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <input value={wish_value || ''} type="text" onChange={onUpdateClick} />
      </div>
    );
  }
}
