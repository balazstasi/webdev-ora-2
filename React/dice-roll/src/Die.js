import React from "react";
import "./Die.css";

export default function Die(props) {
  // const getWordByNum = () => {
  //   if (props.value === 1) return "one";
  //   if (props.value === 2) return "two";
  //   if (props.value === 3) return "three";
  //   if (props.value === 4) return "four";
  //   if (props.value === 5) return "five";
  //   if (props.value === 6) return "six";
  // };

  // return <i className={`fas fa-dice-${getWordByNum()}`}></i>;
  return (
    <i
      className={`Die ${props.rolling && "rolling"} fas fa-dice-${props.value}`}
    ></i>
  );
}
