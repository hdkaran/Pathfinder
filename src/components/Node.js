import React, { Component } from "react";
import "./Node.css";

export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row
    } = this.props;

    const addClassName = () => {
      if (isFinish) return "node-finish";
      else {
        if (isStart) return "node-start";
        else {
          if (isWall) return "node-wall";
          else return "";
        }
      }
    };

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${addClassName()}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      ></div>
    );
  }
}
