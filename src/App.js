import React from "react";
import "./styles.css";

class App extends React.Component {
  // Una clase tiene métodos
  // funciones
  constructor() {
    // El constructor es el método que se ejecuta cuando se crea el componente
    super();
    // Binding this into our methods
    this.update = this.update.bind(this);
    this.substract = this.substract.bind(this);
    // Aquí inicializamos el estado
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
      </div>
    );
  }
}

export default App;
