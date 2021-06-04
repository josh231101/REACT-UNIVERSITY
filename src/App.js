import React from "react";
import "./styles.css";
import TarjetaFruta from "./components/TarjetaFruta";

const App = () => {
  return (
    <>
      <TarjetaFruta name="Josue" edad={19} />
      <TarjetaFruta name="DAvid" edad={20} />
    </>
  );
};
export default App;
