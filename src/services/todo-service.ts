import axios from 'axios';
import { Todo } from '../components/todo';

// Base Axios instance
const api = axios.create({
  baseURL: '/api', // Adjust the base URL as needed
});
// Fetch all todos
export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await api.get<Todo[]>('/todos');
  return response.data;
};

// Add a new todo
export const createTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
  const response = await api.post<Todo>('/todos', todo);
  return response.data;
};

// Delete a todo by ID
export const deleteTodo = async (id: number): Promise<void> => {
  await api.delete(`/todos/${id}`);
};

export default api;