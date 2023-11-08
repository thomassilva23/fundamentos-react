import "./index.css";
import ReactDOM from "react-dom";
import React from "react";

//COMPONENTS
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

ReactDOM.render(
  <div>
    <Primeiro />
    <ComParametro titulo="Segundo Componente" aluno="Pedro Silva" nota={9.3} />
  </div>,
  document.getElementById("root")
);
