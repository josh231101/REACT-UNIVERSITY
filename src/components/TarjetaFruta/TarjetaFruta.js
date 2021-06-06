import React from "react";
//import "./TarjetaFruta.css";
// Esto funciona ya que webpack revisa
// los imports de todos los archivos, toma ese css y lo inyectaa la app.
// CSS MODULES
import styles from "./TarjetaFruta.module.css";
// UN módulo de css no se aplica auto
// Necesitamos acceder a styles.card o styles['card--active']

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
    // Dynamic classes with React
    const clases = styles.card + ` ${cantidad && styles["card--active"]}`;

    return (
      <div className={clases}>
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
