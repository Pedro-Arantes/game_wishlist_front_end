import api from './api';

export async function avgGrade(gameId) {
  const response = await api.get(`/grades/${gameId}`);
  return response;
}