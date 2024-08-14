// src/components/TodoItem.js

import React from 'react';
import { useTodos } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { updateTodoItem, deleteTodoItem } = useTodos();

  const toggleComplete = () => {
    updateTodoItem(todo.id, { ...todo, completed: !todo.completed });
  };

  const handleDelete = () => {
    deleteTodoItem(todo.id);
  };

  return (
    <li className="flex justify-between items-center p-4 mb-2 bg-white rounded-lg shadow-md">
      <div>
        <h3 className={`text-lg font-bold ${todo.completed ? 'line-through' : ''}`}>
          {todo.title}
        </h3>
        <p className="text-gray-600">{todo.description}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleComplete}
          className={`px-4 py-2 rounded-lg ${todo.completed ? 'bg-green-500' : 'bg-blue-500'} text-white`}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
