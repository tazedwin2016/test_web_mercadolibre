import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import routes from "./routes";
import GlobalState from "./stateGlobal/globalState";
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import BarraBusqueda from "./components/BarraBusqueda/BarraBusqueda";
import './App.scss';

function App() {
  return (
    //State global de la aplicacion
    <GlobalState>
      <Router>
          <BarraBusqueda/>
          <Breadcrumb/>
          {/* Cargamos las rutas de la aplicacion */}
            {routes}  
      </Router>
    </GlobalState>
  );
}

export default App;
