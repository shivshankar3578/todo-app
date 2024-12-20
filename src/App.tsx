import React from 'react';
import Todo from './components/todo';
console.log("envv",process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  import('./mock/todo-mock');
}

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo & Reminders</h1>
      <Todo />
    </div>
  );
};

export default App;