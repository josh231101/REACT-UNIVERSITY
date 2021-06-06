import React, { Component } from "react";

export default class Hijo extends Component {
  render() {
    return (
      <div className="box red">
        <p>This is a child</p>
        <button
          onClick={() => this.props.onSaludo(Math.round(Math.random() * 100))}
        >
          Fire event
        </button>
      </div>
    );
  }
}
