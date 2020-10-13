import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Bienvenido from "./components/Bienvenido/Bienvenido";
import ResultadoDeLaBusqueda from "./components/ResultadosDeLaBusqueda/ResultadoDeLaBusqueda";
import DetalleDelProducto from "./components/DetalleDelProducto/DetalleDelProducto";

let routes = (
  <Switch>
    <Route exact path="/">
      <Bienvenido />
    </Route>
    <Route exact path="/items">
      <ResultadoDeLaBusqueda />
    </Route>
    <Route exact path="/items/:id">
      <DetalleDelProducto />
    </Route>
    <Route path="*">
      <Bienvenido />
    </Route>
  </Switch>
);

export default routes;