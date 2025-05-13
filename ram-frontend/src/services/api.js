import axios from 'axios';
const API_URL = 'http://localhost:8080/api/rams';

export const getRams = () => axios.get(API_URL);
export const getRamById = (id) => axios.get(`${API_URL}/${id}`);
export const createRam = (ram) => axios.post(API_URL, ram);
export const updateRam = (id, ram) => axios.put(`${API_URL}/${id}`, ram);
export const deleteRam = (id) => axios.delete(`${API_URL}/${id}`);
export const getRamTypes = () => axios.get('http://localhost:8080/api/ram-types');
