import api from './api';

export async function getProfPict() {
    const response = await api.get('/pictures');
    return response;
}