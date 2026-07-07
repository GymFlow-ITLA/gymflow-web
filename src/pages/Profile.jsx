import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getProfile, deleteAccount } from '../services/api';

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    if (!user) return;
    getProfile(user.id)
      .then(setProfile)
      .catch(() => setError('No se pudo cargar el perfil'));
  }, [user]);

  async function handleDelete() {
    try {
      await deleteAccount(user.id);
      logout();
      navigate('/login');
    } catch {
      setError('No se pudo eliminar la cuenta');
    }
  }

  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  if (!profile) return <div className="p-8 text-center text-gray-500">Cargando...</div>;

  const initials = `${profile.first_name[0] || ''}${profile.last_name[0] || ''}`.toUpperCase();
  const fields = [
    { label: 'Nombre completo', value: `${profile.first_name} ${profile.last_name}` },
    { label: 'Cédula', value: profile.cedula },
    { label: 'Teléfono', value: profile.phone || '—' },
    { label: 'Correo', value: profile.email },
  ];

  return (
    <div className="flex min-h-screen justify-center bg-gray-100 p-6">
      <div className="card">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase text-gray-400">Mi perfil</span>
          <Link to="/" className="text-xs font-bold text-gray-900 underline">Inicio</Link>
        </div>

        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-900 text-lg font-bold text-white">
            {initials}
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">{profile.first_name} {profile.last_name}</h1>
            <p className="text-sm text-gray-500">{profile.email}</p>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase text-gray-900">Datos personales</h2>
          <Link to="/profile/edit" className="text-xs font-bold underline">Editar</Link>
        </div>

        <div className="mb-8 space-y-4">
          {fields.map((f) => (
            <div key={f.label}>
              <p className="text-xs text-gray-500">{f.label}</p>
              <p className="text-sm font-medium text-gray-900">{f.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-red-100 bg-red-50 p-4">
          <h3 className="text-sm font-bold text-red-800">Eliminar cuenta</h3>
          <p className="mt-1 text-xs text-red-700">Tu cuenta se desactivará y no podrás volver a iniciar sesión.</p>
          {!confirming ? (
            <button
              onClick={() => setConfirming(true)}
              className="mt-4 w-full rounded-lg border border-red-200 bg-white py-2 text-xs font-bold text-red-600"
            >
              Eliminar mi cuenta
            </button>
          ) : (
            <div className="mt-4">
              <p className="mb-2 text-xs font-bold text-red-800">¿Seguro? Esta acción no se puede deshacer.</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setConfirming(false)}
                  className="flex-1 rounded-lg border border-gray-200 bg-white py-2 text-xs font-bold text-gray-700"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-1 rounded-lg bg-red-600 py-2 text-xs font-bold text-white"
                >
                  Sí, eliminar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
