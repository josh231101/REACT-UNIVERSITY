import React from "react";
import TarjetaFruta from "./components/TarjetaFruta";
import "./components/Assign";
import "./components/Assign/spread";
import "./components/Arrays/spread";
import Video from "./components/StateFunc/index";
import "./styles.css";
import Gato from "./components/Gato";
import MouseEvent from "./components/MouseEvent";
import Events from "./components/Events";

const App = () => {
  const [state, setState] = React.useState({ name: "Mushu" });

  const otrosDatos = {
    raza: "tropical",
    peleasNocturnas: 400
  };
  return (
    <>
      <h1> React Core</h1>
      <TarjetaFruta name="Sandia" price={10} />
      <TarjetaFruta name="Naranjas" price={5.4} />
      <hr />
      <h1>Mutating the state of a component with function</h1>
      <Video />
      <hr />
      <Gato name="Minino" padre="lucy" age={2} {...otrosDatos} {...state} />
      <hr />
      <MouseEvent />
      <hr />
      <h2>Persist events</h2>
      <Events />
      <hr />
    </>
  );
};
export default App;
