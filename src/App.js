import React from "react";
import TarjetaFruta from "./components/TarjetaFruta";
import "./components/Assign";
import "./components/Assign/spread";
import "./components/Arrays/spread";
import Video from "./components/StateFunc/index";
import "./styles.css";

const App = () => {
  return (
    <>
      <TarjetaFruta name="Sandia" price={10} />
      <TarjetaFruta name="Naranjas" price={5.4} />
      <hr />
      <h1>Mutating the state of a component with function</h1>
      <Video />
    </>
  );
};
export default App;
