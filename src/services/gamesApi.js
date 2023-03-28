import api from './api';

export async function getGames() {
  const response = await api.get('/games');
  return response;
}