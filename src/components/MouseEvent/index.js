import React, { Component } from "react";

const styles = {
  width: "250px",
  height: "250px",
  padding: "24px",
  boxSizing: "border-box",
  background: "#d2e6fe"
};

class MouseEvent extends Component {
  state = {
    x: 0,
    y: 0
  };

  paintCoord = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  render() {
    return (
      <div style={styles} onMouseMove={this.paintCoord}>
        x : {this.state.x} <br />y : {this.state.y}
      </div>
    );
  }
}

export default MouseEvent;
