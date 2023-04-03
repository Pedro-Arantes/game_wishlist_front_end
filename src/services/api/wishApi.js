import useToken from '@/hooks/useToken';
import api from './api';

export async function getWishlist(token) {
  const response = await api.get('/wish',{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}
export async function getWishByGameId(gameId) {
  const token = useToken()
  const response = await api.get(`/wish/${gameId}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}
export async function postWish(gameId) {
  const token = useToken()
  const response = await api.post(`/wish/${gameId}`,null,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}
export async function delWish(Id) {
  const token = useToken()
  const response = await api.delete(`/wish/${Id}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}