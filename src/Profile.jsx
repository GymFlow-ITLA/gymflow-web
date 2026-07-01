<<<<<<< HEAD
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
=======
import React, { useState } from 'react';

export default function Registro({ onIrALogin }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    cedula: '',
    correo: '',
    telefono: '',
    password: '',
    terminos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
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
          <div style={{ backgroundColor: '#bfff00', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '10px', position: 'relative' }}>
              <div style={{ width: '14px', height: '2px', backgroundColor: '#111827', position: 'absolute' }}></div>
              <div style={{ content: "''", width: '3px', height: '10px', backgroundColor: '#111827', borderRadius: '1px', position: 'absolute', left: 0 }}></div>
              <div style={{ content: "''", width: '3px', height: '10px', backgroundColor: '#111827', borderRadius: '1px', position: 'absolute', right: 0 }}></div>
            </div>
          </div>
          <span style={{ fontSize: '24px', fontWeight: '750', color: '#111827', letterSpacing: '-0.5px' }}>GymFlow</span>
        </div>

        <div style={{ color: '#84cc16', fontSize: '11px', fontWeight: 'bold', marginTop: '25px', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Empieza Gratis</div>
        <h2 style={{ margin: '0 0 5px 0', fontSize: '24px', color: '#111827' }}>Crea tu cuenta</h2>
        <p style={{ color: '#6b7280', fontSize: '14px', marginTop: 0, marginBottom: '20px' }}>Regístrate para gestionar tus membresías.</p>

        <form>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Nombre</label>
            <input type="text" name="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box', fontSize: '14px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Apellidos</label>
            <input type="text" name="apellidos" placeholder="Tus apellidos" value={formData.apellidos} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box', fontSize: '14px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Cédula (11 dígitos)</label>
            <input type="text" name="cedula" placeholder="00100000000" maxLength="11" value={formData.cedula} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box', fontSize: '14px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Correo electrónico</label>
            <input type="email" name="correo" placeholder="tu@correo.com" value={formData.correo} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box', fontSize: '14px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Número de Teléfono</label>
            <input type="tel" name="telefono" placeholder="809-000-0000" value={formData.telefono} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box', fontSize: '14px' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Contraseña</label>
            <input type="password" name="password" placeholder="Mínimo 8 caracteres" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box', fontSize: '14px' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <input type="checkbox" name="terminos" id="terminos" checked={formData.terminos} onChange={handleChange} />
            <label htmlFor="terminos" style={{ fontSize: '13px', color: '#374151', fontWeight: 'normal', margin: 0 }}>
              Acepto las <strong>Políticas de Privacidad</strong> y <strong>Términos de Uso</strong>.
            </label>
          </div>

          <button type="button" style={{ width: '100%', padding: '12px', backgroundColor: '#111827', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>
            Registrarme
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '25px', color: '#374151' }}>
          ¿Ya tienes cuenta? <span onClick={onIrALogin} style={{ fontWeight: 'bold', color: '#111827', textDecoration: 'underline', cursor: 'pointer' }}>Inicia sesión</span>
        </p>
>>>>>>> dda9973fd0d52a7fe021b1b848b2aec2b42667e1
      </div>
    </div>
  );
}