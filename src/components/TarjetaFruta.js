import React from "react";

class App extends React.Component {
  // Una clase tiene métodos
  // funciones
  state = {
    cantidad: 0
  };

  update = () => {
    this.setState({ cantidad: this.state.cantidad + 1 });
  };
  substract = () => {
    this.setState({ cantidad: this.state.cantidad - 1 });
  };
  refresh = () => {
    this.setState({ cantidad: 0 });
  };

  render() {
    const { name, price } = this.props;
    const { cantidad } = this.state;

    const styles = {
      border: "1px solid black",
      marginBottom: "1em",
      borderRadius: "0.5em",
      padding: "1em",
      background: cantidad ? "linear-gradient(45deg, black, #4a02f7)" : "#FFF",
      color: cantidad ? "#FFF" : "#000",
      transition: "all 400ms ease-out"
    };
    return (
      <div style={styles}>
        <h2>{name}</h2>
        <h4>Cantidad: {cantidad}</h4>
        <button onClick={this.update}>+</button>
        {cantidad > 0 && <button onClick={this.substract}>-</button>}
        {/*<button onClick={this.update.bind(this)}>
          binding this in the function
        </button>*/}
        <button onClick={this.refresh}>Limpiar</button>
        <hr />
        <p>El total es {price * cantidad}</p>
      </div>
    );
  }
}

export default App;
