import React from "react";
import TarjetaFruta from "./components/TarjetaFruta";
import "./styles.css";

const App = () => {
  return (
    <>
      <TarjetaFruta name="Sandia" price={10} />
      <TarjetaFruta name="Naranjas" price={5.4} />
    </>
  );
};
export default App;
