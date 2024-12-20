import React from 'react';
import { RemoveTodo, Todo } from '.';

export interface TodoListProps {
    todos: Todo[];
    removeTodo: RemoveTodo
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => (
    <div className="todo-container">
        {
        todos.map((todo) => (
            <div key={todo.id} className="todo-item" > {todo.text}
                <button className="delete-button" onClick={() => removeTodo(todo.id)}>Delete</button>
            </div>
        ))
        }
    </div>
);

export default TodoList;