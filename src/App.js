import React from "react";
import "./styles.css";

class App extends React.Component {
  // Una clase tiene métodos
  // funciones
  constructor() {
    // El constructor es el método que se ejecuta cuando se crea el componente
    super();
    // Binding this into our methods
    // SMART WAY TO BIND THIS
    const METHODS = ["update", "substract", "refresh"];
    METHODS.forEach((method) => {
      this[method] = this[method].bind(this);
    });

    this.state = {
      cantidad: 0
    };
  }

  update() {
    this.setState({ cantidad: this.state.cantidad + 1 });
  }
  substract() {
    this.setState({ cantidad: this.state.cantidad - 1 });
  }
  refresh() {
    this.setState({ cantidad: 0 });
  }
  render() {
    const { edad, nombre } = this.props;
    return (
      <div>
        <h3>Hola</h3>
        <p>
          Soy {nombre} y tengo {edad}
        </p>
        <h4>Cantidad de clicks: {this.state.cantidad}</h4>
        <button onClick={this.update}>Add</button>
        <button onClick={this.substract}> substract</button>
        <button onClick={this.update.bind(this)}>
          binding this in the function
        </button>
        <button onClick={this.refresh}>Reset</button>
      </div>
    );
  }
}

export default App;
