// src/components/TodoList.js

import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, searchTerm } = useContext(TodoContext);

  const filteredTodos = todos.filter(todo => {
    if (typeof todo.title === 'string') {
      return todo.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false; // Exclude non-string titles
  });

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
