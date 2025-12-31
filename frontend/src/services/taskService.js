import axios from "axios";

const API_URL = "http://127.0.0.1:8000/task";


export const getTasks = () => axios.get(`${API_URL}/`);
export const getTaskById = (id) => axios.get(`${API_URL}/${id}`);
export const createTask = (task) => axios.post(`${API_URL}/create`, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id, task) => axios.delete(`${API_URL}/${id}`, task);
export const sortTask = () => axios.get(`${API_URL}/sorted`);
