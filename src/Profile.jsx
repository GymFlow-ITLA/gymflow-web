import React from 'react';

// Recibimos las funciones de navegación como props
export default function Profile({ onEliminarCuenta, onIrAEditar }) {
  const containerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f3f4f6',
    display: 'flex',
    justifyContent: 'center',
    padding: '32px',
    minHeight: '100vh'
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #f3f4f6',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Cabecera */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#e5e7eb' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#e5e7eb' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#e5e7eb' }}></div>
          </div>
          <span style={{ color: '#9ca3af', fontSize: '12px', fontWeight: '500' }}>Mi perfil</span>
        </div>

        {/* Info del usuario */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#000', color: '#fff', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontWeight: 'bold', fontSize: '20px' }}>DL</div>
          <div>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>Darianny Luciano</h2>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>darianny@correo.com</p>
          </div>
          <div style={{ marginLeft: 'auto', backgroundColor: '#ecfdf5', padding: '4px 12px', borderRadius: '999px', border: '1px solid #d1fae5', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
            <span style={{ color: '#059669', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>Activa</span>
          </div>
        </div>

        {/* Datos Personales */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '11px', fontWeight: 'bold', color: '#111827', textTransform: 'uppercase', margin: 0 }}>Datos personales</h3>
          {/* AQUÍ ESTABA EL ERROR: AGREGAMOS EL ONCLICK */}
          <button 
            onClick={onIrAEditar} 
            style={{ background: 'none', border: 'none', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Editar
          </button>
        </div>

        <div style={{ marginBottom: '32px' }}>
          {[{l: "Nombre completo", v: "Darianny Luciano Veras"}, {l: "Cédula", v: "001 0000000 0"}, {l: "Teléfono", v: "809 000 0000"}, {l: "Correo", v: "darianny@correo.com"}].map((f, i) => (
            <div key={i} style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0' }}>{f.l}</p>
              <input type="text" defaultValue={f.v} style={{ width: '100%', padding: '12px', border: '1px solid #f3f4f6', borderRadius: '12px', backgroundColor: '#f9fafb', fontSize: '14px', boxSizing: 'border-box' }} />
            </div>
          ))}
        </div>

        {/* Eliminar Cuenta */}
        <div style={{ padding: '16px', backgroundColor: '#fef2f2', borderRadius: '12px', border: '1px solid #fee2e2' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#991b1b', margin: '0 0 4px 0' }}>Eliminar cuenta</h3>
          <p style={{ fontSize: '12px', color: '#b91c1c', margin: '0 0 16px 0', lineHeight: '1.5' }}>Tu cuenta se desactivará. Esta acción no se puede deshacer.</p>
          <button 
            onClick={onEliminarCuenta} 
            style={{ width: '100%', padding: '10px', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '8px', backgroundColor: '#fff', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Eliminar mi cuenta
          </button>
        </div>
      </div>
    </div>
  );
}