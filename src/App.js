import React from "react";
import "./styles.css";
import TarjetaFruta from "./components/TarjetaFruta";

const App = () => {
  return (
    <>
      <TarjetaFruta name="Sandia" price={10} />
      <TarjetaFruta name="Naranjas" price={5.4} />
    </>
  );
};
export default App;
