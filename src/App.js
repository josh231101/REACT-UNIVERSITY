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
import Hijo from "./components/HIjo";
import "./components/Destructure";

const App = () => {
  const [state, setState] = React.useState({ name: "Mushu" });
  const [text, setText] = React.useState("");
  const otrosDatos = {
    raza: "tropical",
    peleasNocturnas: 400
  };
  const manejador = (text) => setText(text);
  return (
    <>
      <h1> Section 4: React Core</h1>
      <TarjetaFruta name="Sandia" price={10} />
      <TarjetaFruta name="Naranjas" price={5.4} />
      <hr />
      <h2>Mutating the state of a component with function</h2>
      <Video />
      <hr />
      <Gato name="Minino" padre="lucy" age={2} {...otrosDatos} {...state} />
      <hr />
      <MouseEvent />
      <hr />
      <h2>Persist events</h2>
      <Events />
      <hr />
      <h2>Create personalized events</h2>
      <div className="box blue">
        <Hijo onSaludo={manejador} />
        <h3>{text}</h3>
      </div>
      <hr />
      <h2>Prop children</h2>
      <Banner>Hello Folks</Banner>
    </>
  );
};

const Banner = ({ children, company }) => {
  const cStyles = {
    border: "1px solid black",
    background: "lightgreen",
    padding: "32px"
  };
  return (
    <div style={cStyles}>
      <h4>{company}</h4>
      <p>{children}</p>
    </div>
  );
};

export default App;
