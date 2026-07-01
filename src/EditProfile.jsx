import React from 'react';

export default function EditProfile({ onGuardar, onCancelar }) {
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
    border: '1px solid #e5e7eb',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px'
  };

  const inputStyle = {
    width: '100%', padding: '10px', border: '1px solid #e5e7eb',
    borderRadius: '8px', backgroundColor: '#fff', fontSize: '14px', marginTop: '4px', boxSizing: 'border-box'
  };

  const labelStyle = { fontSize: '12px', fontWeight: 'bold', color: '#111827', marginBottom: '4px', display: 'block' };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Info usuario (Cabecera simplificada) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#000', color: '#fff', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', fontWeight: 'bold' }}>DL</div>
          <div>
            <h2 style={{ margin: 0, fontSize: '16px' }}>Editar datos</h2>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '13px' }}>Actualiza tu información</p>
          </div>
        </div>

        <h3 style={{ fontSize: '12px', fontWeight: 'bold', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px', marginBottom: '16px' }}>DATOS PERSONALES</h3>

        {/* Inputs */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nombre</label>
            <input defaultValue="Darianny" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Apellidos</label>
            <input defaultValue="Luciano Veras" style={inputStyle} />
          </div>
        </div>

        <div style={{ marginTop: '16px' }}>
          <label style={labelStyle}>Teléfono</label>
          <input defaultValue="809 000 0000" style={inputStyle} />
        </div>

        <div style={{ marginTop: '16px' }}>
          <label style={labelStyle}>Correo electrónico</label>
          <input defaultValue="darianny@correo.com" style={inputStyle} />
          <p style={{ fontSize: '11px', color: '#6b7280', marginTop: '8px' }}>Si cambias el correo, te enviaremos un código para verificarlo.</p>
        </div>

        {/* Botones */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <button onClick={onCancelar} style={{ flex: 1, padding: '10px', border: '1px solid #e5e7eb', borderRadius: '8px', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Cancelar</button>
          <button onClick={onGuardar} style={{ flex: 1, padding: '10px', border: 'none', borderRadius: '8px', backgroundColor: '#bfff00', cursor: 'pointer', fontWeight: 'bold' }}>Guardar cambios</button>
        </div>
      </div>
    </div>
  );
}