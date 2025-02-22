import { useState } from 'react';
import { useAuthStore } from '../store/auth';

export default function Auth() {
  const { login, user, logout } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      {user ? (
        <div>
          <h1 className="text-2xl font-bold">Welcome, {user.email}</h1>
          <button onClick={logout} className="mt-4 bg-red-500 text-white p-2 rounded">Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
      )}
    </div>
  );
}
