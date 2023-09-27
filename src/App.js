import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
//Ternario --> condicion ? se muestra- verdadero : se muestra falso.

  const cambiarMostrar= () => {
    actualizarMostrar(!mostrarFormulario); //! es el operador de negación. Si mostrarFormuilario === true pasa a
  }

  return (
    <div>
      <Header />
      {/* { mostrarFormulario === true ? <Formulario /> : <div></div>} */}
      {mostrarFormulario  &&  <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
