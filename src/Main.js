import React from 'react';
import { Route} from 'react-router-dom';

import Yo from './pages/Yo'
import Lectura from './pages/Lectura'
import Consumos from './pages/Consumos'
import Soporte from './pages/Soporte'

const Main =()=> {
    return (
      <div className = "mainControl">
        <div><Route path="/yo" component={Yo} /></div>
        <Route path="/Lectura" component={Lectura} />
        <Route path="/Consumo" component={Consumos} />
        <Route path="/Soporte" component={Soporte} />
      </div>
  ); 
}

export default Main;