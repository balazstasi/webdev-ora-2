import React from "react";
import Hello from "./Hello.js";

class MultiHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldWrite: true,
    };
  }

  hideText = () => {
    this.setState({ shouldWrite: !this.state.shouldWrite });
  };

  makeMultiHellos() {
    let result = [];
    for (let i = 0; i < this.props.number; i++) {
      let age = Math.ceil(Math.random() * 100);
      result.push(<Hello age={age} key={i} />);
    }

    console.log(result);

    return result;
  }

  render() {
    return (
      // ures tag, mivel csak 1 ertekkel terhetunk vissza egy fg-ben
      // es ugyanez a React komponensekre is igaz
      <>
        <button onClick={this.hideText}>
          {this.state.shouldWrite ? "Elrejtes" : "Megjelenites"}
        </button>
        {this.state.shouldWrite && this.makeMultiHellos()}
      </>
    );
  }
}

export default MultiHello;
