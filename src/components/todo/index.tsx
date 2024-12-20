import React, { useEffect, useState } from 'react';
import TodoList, { TodoListProps } from './todo-list.tsx';
import { fetchTodos, createTodo, deleteTodo } from '../../services/todo-service';
import { ErrorBoundary } from 'react-error-boundary';

import TodoForm from './todo-form.tsx';

export interface Todo {
  id: number;
  text: string;
  completed?: boolean;
  dueDate?: string;
}
export type RemoveTodo = (id: number) => void
export type AddTodo = (text:string, dueDate?:string) => void

const ErrorFallback = ({ error, resetErrorBoundary }:any) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  useEffect(() => {
      fetchTodos().then(setTodos).catch(console.error)
  }, []);

  const addTodo = async (text: string, dueDate?: string) => {
    const newTodo = await createTodo({ text, completed: false, dueDate });
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };


  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </ErrorBoundary>

  );
};

export default Todo;