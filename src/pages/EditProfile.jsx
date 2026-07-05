import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { updateProfile } from '../services/api';

export default function EditProfile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [form, setForm] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    phone: user.phone || '',
    email: user.email,
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'El correo no es válido';
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
      const updated = await updateProfile(user.id, form);
      localStorage.setItem('user', JSON.stringify(updated));
      navigate('/profile');
    } catch (res) {
      if (res.errors) setErrors(res.errors);
      else setServerError(res.message || 'No se pudo actualizar');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="card" noValidate>
        <h1 className="mb-1 text-lg font-bold text-gray-900">Editar datos</h1>
        <p className="mb-6 text-sm text-gray-500">Actualiza tu información de contacto.</p>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="label">Nombre</label>
            <input className="input" name="first_name" value={form.first_name} onChange={handleChange} />
            {errors.first_name && <p className="field-error">{errors.first_name}</p>}
          </div>
          <div className="flex-1">
            <label className="label">Apellidos</label>
            <input className="input" name="last_name" value={form.last_name} onChange={handleChange} />
            {errors.last_name && <p className="field-error">{errors.last_name}</p>}
          </div>
        </div>

        <div className="mt-4">
          <label className="label">Teléfono</label>
          <input className="input" name="phone" value={form.phone} onChange={handleChange} />
        </div>

        <div className="mt-4">
          <label className="label">Correo electrónico</label>
          <input className="input" name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>

        {serverError && <p className="field-error mt-4">{serverError}</p>}

        <div className="mt-6 flex gap-3">
          <button type="button" onClick={() => navigate('/profile')} className="btn border border-gray-200 bg-white text-gray-700">
            Cancelar
          </button>
          <button type="submit" disabled={loading} className="btn-lime">
            {loading ? 'Guardando...' : 'Guardar cambios'}
          </button>
        </div>
      </form>
    </div>
  );
}
