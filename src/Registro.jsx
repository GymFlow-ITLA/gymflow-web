import React, { useState } from 'react';

export default function Registro({ onIrALogin, onRegistroSuccess }) {
  const [formData, setFormData] = useState({
    nombre: '', apellidos: '', cedula: '', correo: '', telefono: '', password: '', terminos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f3f4f6', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', margin: 0 }}>
      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
        
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
          <div style={{ backgroundColor: '#bfff00', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '10px', position: 'relative' }}>
              <div style={{ width: '14px', height: '2px', backgroundColor: '#111827', position: 'absolute' }}></div>
              <div style={{ width: '3px', height: '10px', backgroundColor: '#111827', borderRadius: '1px', position: 'absolute', left: 0 }}></div>
              <div style={{ width: '3px', height: '10px', backgroundColor: '#111827', borderRadius: '1px', position: 'absolute', right: 0 }}></div>
            </div>
          </div>
          <span style={{ fontSize: '24px', fontWeight: '750', color: '#111827', letterSpacing: '-0.5px' }}>GymFlow</span>
        </div>

        <div style={{ color: '#84cc16', fontSize: '11px', fontWeight: 'bold', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Crear cuenta</div>
        <h2 style={{ margin: '0 0 5px 0', fontSize: '24px', color: '#111827' }}>Empieza a entrenar sin filas</h2>
        <p style={{ color: '#6b7280', fontSize: '14px', marginTop: 0, marginBottom: '20px' }}>Regístrate para gestionar tu membresía desde el teléfono.</p>

        <form>
          {/* Nombre y Apellidos en una fila */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ flex: 1, marginBottom: '15px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Nombre</label>
              <input type="text" name="nombre" placeholder="Darianny" value={formData.nombre} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ flex: 1, marginBottom: '15px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Apellidos</label>
              <input type="text" name="apellidos" placeholder="Luciano Veras" value={formData.apellidos} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' }} />
            </div>
          </div>

          {/* Otros campos */}
          {['Cédula', 'Correo electrónico', 'Teléfono', 'Contraseña'].map((label, i) => {
            const names = ['cedula', 'correo', 'telefono', 'password'];
            const types = ['text', 'email', 'password', 'password'];
            const placeholders = ['001 0000000 0', 'tu@correo.com', '809 000 0000', 'Mínimo 8 caracteres'];
            return (
              <div key={i} style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>{label}</label>
                <input type={types[i]} name={names[i]} placeholder={placeholders[i]} value={formData[names[i]]} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' }} />
                {(i === 0 || i === 3) && <small style={{ color: '#9ca3af', display: 'block', marginTop: '5px', fontSize: '12px' }}>{i === 0 ? '11 dígitos, sin guiones.' : 'Usa mayúsculas, números y un símbolo.'}</small>}
              </div>
            );
          })}

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '20px', marginBottom: '20px' }}>
            <input type="checkbox" name="terminos" checked={formData.terminos} onChange={handleChange} />
            <label style={{ fontSize: '13px', color: '#374151', cursor: 'pointer' }}>
              Acepto los <span style={{ textDecoration: 'underline' }}>Términos de uso</span> y la <span style={{ textDecoration: 'underline' }}>Política de privacidad</span>.
            </label>
          </div>

          <button type="button" onClick={onRegistroSuccess} style={{ width: '100%', padding: '12px', backgroundColor: '#111827', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>
            Crear cuenta
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '20px', color: '#374151' }}>
          ¿Ya tienes cuenta? <span onClick={onIrALogin} style={{ fontWeight: 'bold', color: '#111827', textDecoration: 'underline', cursor: 'pointer' }}>Inicia sesión</span>
        </p>
      </div>
    </div>
  );
}