import { API_URL } from '../config';

async function request(path, options = {}) {
  const token = localStorage.getItem('token');
  const res = await fetch(API_URL + path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw data;
  return data;
}

export function register(user) {
  return request('/api/auth/register', { method: 'POST', body: JSON.stringify(user) });
}

export function login(credentials) {
  return request('/api/auth/login', { method: 'POST', body: JSON.stringify(credentials) });
}

export function getProfile(id) {
  return request(`/api/users/${id}`);
}

export function updateProfile(id, data) {
  return request(`/api/users/${id}`, { method: 'PUT', body: JSON.stringify(data) });
}

export function deleteAccount(id) {
  return request(`/api/users/${id}`, { method: 'DELETE' });
}
