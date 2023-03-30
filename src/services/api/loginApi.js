import useToken from '@/hooks/useToken';
import api from './api';

export async function login(email, password) {
  const response = await api.post('/login', { email, password });
  return response;
}

export async function logout(){
  const token = useToken()
  const response = await api.delete("/session",{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response ;
}