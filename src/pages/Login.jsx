import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { useAuth } from '../hooks/useAuth';
import { login as loginApi } from '../services/api';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await loginApi(form);
      login(data);
      navigate('/');
    } catch (res) {
      setError(res.message || 'No se pudo iniciar sesión');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="card border-b-4 border-lime-500">
        <Logo />
        <p className="mt-6 text-xs font-bold uppercase tracking-wide text-lime-600">Bienvenido de vuelta</p>
        <h1 className="mb-1 text-2xl font-bold text-gray-900">Entra a tu cuenta</h1>
        <p className="mb-6 text-sm text-gray-500">Gestiona tu membresía y mantente al día.</p>

        <div>
          <label className="label">Correo electrónico</label>
          <input className="input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@correo.com" />
        </div>

        <div className="mt-4">
          <label className="label">Contraseña</label>
          <input className="input" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Tu contraseña" />
        </div>

        {error && <p className="field-error mt-4">{error}</p>}

        <button type="submit" disabled={loading} className="btn-dark mt-6">
          {loading ? 'Entrando...' : 'Iniciar sesión'}
        </button>

        <p className="mt-5 text-center text-sm text-gray-600">
          ¿Primera vez aquí?{' '}
          <Link to="/register" className="font-bold text-gray-900 underline">Crea tu cuenta</Link>
        </p>
      </form>
    </div>
  );
}
