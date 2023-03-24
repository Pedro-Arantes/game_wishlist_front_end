import api from './api';

export async function register(name,email, cpf,password) {
  const response = await api.post('/registration', {name, email, password ,cpf});
  return response;
}