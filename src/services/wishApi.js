import api from './api';

export async function getWishlist(token) {
  const response = await api.get('/wish',{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}