// src/context/TodoContext.js

import React, { createContext, useState, useEffect } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/mockApi';

// Create context
export const TodoContext = createContext();

// Provider component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTodos().then(data => setTodos(data));
  }, []);

  const addTodo = async (newTodo) => {
    const addedTodo = await createTodo(newTodo);
    setTodos([...todos, addedTodo]);
  };

  const updateTodoHandler = async (updatedTodo) => {
    const updated = await updateTodo(updatedTodo);
    setTodos(todos.map(todo => todo.id === updated.id ? updated : todo));
  };

  const deleteTodoHandler = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, searchTerm, setSearchTerm, addTodo: addTodo, updateTodo: updateTodoHandler, deleteTodo: deleteTodoHandler }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use context
export const useTodos = () => React.useContext(TodoContext);
