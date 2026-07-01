import React, { useState } from 'react';
import Registro from './Registro';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';
import EditProfile from './EditProfile';

function App() {
  const [pantallaActual, setPantallaActual] = useState('registro');

  return (
    <>
      {/* PANTALLA 1: Registro */}
      {pantallaActual === 'registro' && (
        <Registro 
          onIrALogin={() => setPantallaActual('login')} 
          onRegistroSuccess={() => setPantallaActual('home')} 
        />
      )}

      {/* PANTALLA 2: Login */}
      {pantallaActual === 'login' && (
        <Login 
          onIrARegistro={() => setPantallaActual('registro')} 
          onLoginSuccess={() => setPantallaActual('home')} 
        />
      )}

      {/* PANTALLA 3: Home */}
      {pantallaActual === 'home' && (
        <Home onIrAPerfil={() => setPantallaActual('profile')} />
      )}

      {/* PANTALLA 4: Perfil */}
      {pantallaActual === 'profile' && (
        <Profile 
          onEliminarCuenta={() => setPantallaActual('registro')}
          onIrAEditar={() => setPantallaActual('editProfile')}
        />
      )}

      {/* PANTALLA 5: Editar Perfil */}
      {pantallaActual === 'editProfile' && (
        <EditProfile 
          onGuardar={() => setPantallaActual('profile')} 
          onCancelar={() => setPantallaActual('profile')} 
        />
      )}
    </>
  );
}

export default App;