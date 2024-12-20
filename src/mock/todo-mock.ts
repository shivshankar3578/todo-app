import MockAdapter from 'axios-mock-adapter';
import api from '../services/todo-service';
import { Todo } from '../components/todo';

const mock = new MockAdapter(api, { delayResponse: 500 }); // Optional delay for realism

// Mock Todo data
const todos: Todo[] = [
  { id: 1, text: 'Learn React', completed: true },
  { id: 2, text: 'Build a Todo App', completed: true, dueDate: new Date().toDateString()  },
];

// Mock endpoints
mock.onGet('/todos').reply(200, todos);

mock.onPost('/todos').reply((config) => {
  const newTodo = JSON.parse(config.data);
  const createdTodo = { ...newTodo, id: Date.now() };
  todos.push(createdTodo);
  return [201, createdTodo];
});

mock.onDelete(/\/todos\/\d+/).reply((config) => {
  const id = parseInt(config.url!.split('/').pop()!);
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return [200];
  }
  return [404, { message: 'Todo not found' }];
});