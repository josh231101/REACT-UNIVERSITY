import React, { Fragment } from "react";

const Computacion = () => (
  <Fragment>
    <li>Mouse</li>
    <li>Monitor</li>
    <li>Keyboard</li>
  </Fragment>
);

const Genericos = () => (
  <Fragment>
    <li>Pluma</li>
    <li>Escritorio</li>
    <li>Laptop</li>
  </Fragment>
);

const RFragments = () => (
  <div>
    {/**Rendering a list with fragments */}
    <ul>
      <Computacion />
      <Genericos />
    </ul>
  </div>
);

export default RFragments;
