import api from './api';

export async function getGames() {
  const response = await api.get('/games');
  return response;
}
export async function getGameById(id) {
  const response = await api.get(`/games/unique/${id}`);
  return response;
}

export async function postGame(name,image,platform,genre){
  const obj ={
    name,
    image,
    platform,
    genre
  }
  const response = await api.post('/games',obj)
  return response;
}