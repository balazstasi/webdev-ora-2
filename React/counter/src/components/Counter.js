import React, { Component } from "react";

export default class Counter extends Component {
  static defaultProps = {
    startingValue: 5,
  };

  render() {
    return (
      <div>
        <h1>
          Button Pressed: <strong>{this.props.value}</strong> times!
        </h1>
        <button onClick={this.props.add}>ADD</button>
      </div>
    );
  }
}
