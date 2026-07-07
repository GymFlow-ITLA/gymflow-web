import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { useAuth } from '../hooks/useAuth';
import { register } from '../services/api';

export default function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({
    first_name: '', last_name: '', cedula: '', email: '', phone: '', password: '',
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const err = {};
    if (!form.first_name.trim()) err.first_name = 'El nombre es requerido';
    if (!form.last_name.trim()) err.last_name = 'Los apellidos son requeridos';
    if (!/^\d{11}$/.test(form.cedula)) err.cedula = 'La cédula debe tener 11 dígitos';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'El correo no es válido';
    if (form.password.length < 8) err.password = 'La contraseña debe tener al menos 8 caracteres';
    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError('');
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setLoading(true);
    try {
      const data = await register(form);
      login(data);
      navigate('/');
    } catch (res) {
      if (res.errors) setErrors(res.errors);
      else setServerError(res.message || 'No se pudo crear la cuenta');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="card" noValidate>
        <Logo />
        <p className="mt-6 text-xs font-bold uppercase tracking-wide text-lime-600">Crear cuenta</p>
        <h1 className="mb-1 text-2xl font-bold text-gray-900">Empieza a entrenar sin filas</h1>
        <p className="mb-6 text-sm text-gray-500">Regístrate para gestionar tu membresía.</p>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="label">Nombre</label>
            <input className="input" name="first_name" value={form.first_name} onChange={handleChange} placeholder="Darianny" />
            {errors.first_name && <p className="field-error">{errors.first_name}</p>}
          </div>
          <div className="flex-1">
            <label className="label">Apellidos</label>
            <input className="input" name="last_name" value={form.last_name} onChange={handleChange} placeholder="Luciano" />
            {errors.last_name && <p className="field-error">{errors.last_name}</p>}
          </div>
        </div>

        <div className="mt-4">
          <label className="label">Cédula</label>
          <input className="input" name="cedula" value={form.cedula} onChange={handleChange} placeholder="00100000000" />
          {errors.cedula && <p className="field-error">{errors.cedula}</p>}
        </div>

        <div className="mt-4">
          <label className="label">Correo electrónico</label>
          <input className="input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@correo.com" />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>

        <div className="mt-4">
          <label className="label">Teléfono</label>
          <input className="input" name="phone" value={form.phone} onChange={handleChange} placeholder="809 000 0000" />
        </div>

        <div className="mt-4">
          <label className="label">Contraseña</label>
          <input className="input" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Mínimo 8 caracteres" />
          {errors.password && <p className="field-error">{errors.password}</p>}
        </div>

        {serverError && <p className="field-error mt-4">{serverError}</p>}

        <button type="submit" disabled={loading} className="btn-dark mt-6">
          {loading ? 'Creando...' : 'Crear cuenta'}
        </button>

        <p className="mt-5 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="font-bold text-gray-900 underline">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
}
