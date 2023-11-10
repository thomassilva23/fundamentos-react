import React from "react";

import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Aleatorio min={10} max={60} />
    <Fragmento />
    <ComParametro titulo="Segundo Componente" aluno="Pedro Silva" nota={9.3} />
    <Primeiro />
  </div>
);
