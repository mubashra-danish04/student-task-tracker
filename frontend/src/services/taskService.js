import axios from "axios";

const API_URL = "http://127.0.0.1:8000/task";

export const getTasks = () => axios.get(`${API_URL}/`);
export const createTask = (task) =>{
 console.log(task)
 axios.post(`${API_URL}/create`, task);

}
