import React, { useState } from 'react';

export default function Login({ onIrARegistro }) {
  const [formData, setFormData] = useState({
    correo: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f3f4f6',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '30px',
        borderBottom: '4px solid #84cc16',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#bfff00', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justify: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '10px', position: 'relative' }}>
              <div style={{ width: '14px', height: '2px', backgroundColor: '#111827', position: 'absolute' }}></div>
              <div style={{ content: "''", width: '3px', height: '10px', backgroundColor: '#111827', borderRadius: '1px', position: 'absolute', left: 0 }}></div>
              <div style={{ content: "''", width: '3px', height: '10px', backgroundColor: '#111827', borderRadius: '1px', position: 'absolute', right: 0 }}></div>
            </div>
          </div>
          <span style={{ fontSize: '24px', fontWeight: '750', color: '#111827', letterSpacing: '-0.5px' }}>GymFlow</span>
        </div>

        <div style={{ color: '#84cc16', fontSize: '11px', fontWeight: 'bold', marginTop: '25px', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Bienvenido de vuelta</div>
        <h2 style={{ margin: '0 0 5px 0', fontSize: '24px', color: '#111827' }}>Entra a tu cuenta</h2>
        <p style={{ color: '#6b7280', fontSize: '14px', marginTop: 0, marginBottom: '20px' }}>Gestiona tu membresía y mantente al día.</p>

        <form>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Correo electrónico</label>
            <input type="email" name="correo" placeholder="tu@correo.com" value={formData.correo} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box', fontSize: '14px' }} />
          </div>

          <div style={{ marginBottom: '5px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Contraseña</label>
            <input type="password" name="password" placeholder="Tu contraseña" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box', fontSize: '14px' }} />
          </div>

          <div style={{ textItems: 'right', textAlign: 'right', marginTop: '5px', marginBottom: '20px' }}>
            <span style={{ fontSize: '13px', textDecoration: 'underline', cursor: 'pointer', color: '#111827', fontWeight: '600' }}>¿Olvidaste tu contraseña?</span>
          </div>

          <button type="button" style={{ width: '100%', padding: '12px', backgroundColor: '#111827', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>
            Iniciar sesión
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', margin: '20px 0', color: '#9ca3af' }}>o</div>

          <button type="button" style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', color: '#111827', border: '1px solid #d1d5db', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%', display: 'inline-block' }}></span>
            Continuar con Google
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '25px', color: '#374151' }}>
          ¿Primera vez aquí? <span onClick={onIrARegistro} style={{ fontWeight: 'bold', color: '#111827', textDecoration: 'underline', cursor: 'pointer' }}>Crea tu cuenta</span>
        </p>
      </div>
    </div>
  );
}