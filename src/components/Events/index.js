import React, { Component } from "react";

export default class Events extends Component {
  state = {
    color: "blue"
  };
  handlerCHnage = (event) => {
    /**
     * Setstate es async,
     * React agrupa y reusa el objeto del evento sintético
     * REact limpia el evento después de que ocurre por lo cual ya
     * no podemos acceder a sus propiedades en operaciones async
     */
    /**
     * SOLUTION 1:
     * event.persist()
     * SOLUTUIN 2:
     * Cachear o almacenar el resultado que queremos pasar
     * JS copea los valores primitivos por valor y no por referencias
     */
    const color = event.target.value;
    this.setState((state) => ({ color }));
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handlerCHnage} />
        <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
      </div>
    );
  }
}
