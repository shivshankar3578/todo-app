import React, { useEffect, useState } from 'react';
import { AddTodo } from '.';


const TodoForm: React.FC<{addTodo: AddTodo}> = ({ addTodo }) => {
  const [text, setText] = useState<string>(''); // Specify the state type

  // Set default dueDate to current date and time on component mount
  //  useEffect(() => {
  //   const currentDateTime = new Date().toISOString().slice(0, 16); // Get current date and time in 'YYYY-MM-DDTHH:mm' format
  //   setDueDate(currentDateTime);
  // }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevent adding empty todos
    addTodo(text); // Call the addTodo function passed as a prop
    setText(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        className="todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Update state on input change
        placeholder="Add a new todo"
      />
      {/* <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setText(e.target.value)} // Update state on input change
      /> */}
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
