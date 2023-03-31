import useToken from '@/hooks/useToken';
import api from './api';

export async function avgGrade(gameId) {
  const response = await api.get(`/grades/${gameId}`);
  return response;
}
export async function upsertGrade(gameId,grade) {
  const token = useToken()
  console.log(gameId,grade)

  const response = await api.post(`/grades`,{gameId,grade},{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}