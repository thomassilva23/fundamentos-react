import "./index.css";
import ReactDOM from "react-dom";
import React from "react";

//COMPONENTS
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

ReactDOM.render(
  <div id="app">
    <Primeiro />
    <ComParametro titulo="Segundo Componente" aluno="Pedro Silva" nota={9.3} />
    <Fragmento />
  </div>,
  document.getElementById("root")
);
