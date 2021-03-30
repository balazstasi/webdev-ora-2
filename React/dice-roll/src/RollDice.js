import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

/*

  State: egy fg. belso valtozoi vagy a class belso valtozoi
  Props: egy fg. parameterei

*/
class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);

    this.state = {
      die1: this.props.sides[0],
      die2: this.props.sides[0],
      rolling: false,
    };

    this.roll = this.roll.bind(this);
  }

  roll() {
    // const newDie1 = this.props.sides[
    //   Math.floor(Math.random() * this.props.sides.length)
    // ];
    // const newDie2 = this.props.sides[
    //   Math.floor(Math.random() * this.props.sides.length)
    // ];

    // this.setState({
    //   die1: newDie1,
    //   die2: newDie2,
    // });

    const die1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const die2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({
      die1,
      die2,
      rolling: true,
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div
      // inline
      // style={{
      //   backgroundColor: "red",
      // }}
      >
        <div className="RollDice">
          <div className="RollDice-container">
            <Die value={this.state.die1} rolling={this.state.rolling} />
            <Die value={this.state.die2} rolling={this.state.rolling} />
          </div>
          <button
            onClick={this.roll}
            disabled={this.state.rolling ? true : false}
          >
            {this.state.rolling ? "Rolling..." : "Roll Dice!"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
