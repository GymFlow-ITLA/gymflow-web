import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { useAuth } from '../hooks/useAuth';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
        <Logo />
        <Link to="/profile" className="text-sm font-bold text-gray-900 underline">Mi perfil</Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Hola{user ? `, ${user.first_name}` : ''} 👋
          </h1>
          <p className="mt-2 text-lg text-gray-500">Bienvenido a tu entrenamiento.</p>
        </div>
      </main>
    </div>
  );
}
