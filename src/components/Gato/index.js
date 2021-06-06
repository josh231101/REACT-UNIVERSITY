import React, { Component } from "react";

class Gato extends Component {
  render() {
    return (
      <div>
        <h2>Gatito 😼</h2>
        <pre>{JSON.stringify(this.props, null, 4)}</pre>
      </div>
    );
  }
}

export default Gato;
