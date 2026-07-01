import React from 'react';

export default function Home({ onIrAPerfil }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh', 
      backgroundColor: '#f3f4f6',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" 
    }}>
      {/* Barra superior */}
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
        <span 
          onClick={onIrAPerfil} 
          style={{ cursor: 'pointer', fontWeight: 'bold', color: '#111827', textDecoration: 'underline' }}
        >
          Perfil
        </span>
      </div>

      {/* Contenido centrado */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ backgroundColor: '#bfff00', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '25px', height: '15px', position: 'relative' }}>
              <div style={{ width: '20px', height: '3px', backgroundColor: '#111827', position: 'absolute' }}></div>
              <div style={{ width: '4px', height: '15px', backgroundColor: '#111827', borderRadius: '1px', position: 'absolute', left: 0 }}></div>
              <div style={{ width: '4px', height: '15px', backgroundColor: '#111827', borderRadius: '1px', position: 'absolute', right: 0 }}></div>
            </div>
          </div>
          
          <h1 style={{ fontSize: '48px', color: '#111827', margin: '0 0 10px 0' }}>GymFlow</h1>
          <p style={{ color: '#6b7280', fontSize: '18px', margin: 0 }}>Bienvenido a tu entrenamiento</p>
        </div>
      </div>
    </div>
  );
}