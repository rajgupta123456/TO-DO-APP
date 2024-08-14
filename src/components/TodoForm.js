// src/components/TodoForm.js

import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      const newTodo = { title, description, completed: false };
      addTodo(newTodo); // Ensure addTodo is correctly defined in context
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
