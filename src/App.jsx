import React, { useState } from 'react';
import Registro from './Registro';
import Login from './Login';

function App() {
  // Este estado controlará cuál pantalla ver: 'registro' o 'login'
  const [pantallaActual, setPantallaActual] = useState('registro');

  return (
    <>
      {pantallaActual === 'registro' ? (
        <Registro onIrALogin={() => setPantallaActual('login')} />
      ) : (
        <Login onIrARegistro={() => setPantallaActual('registro')} />
      )}
    </>
  );
}

export default App;