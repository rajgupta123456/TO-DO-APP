// src/api/mockApi.js

// Mock API functions
export const fetchTodos = () => {
  return Promise.resolve([
    { id: 1, title: 'Buy groceries', description: 'Milk, Bread, Cheese', completed: false },
    { id: 2, title: 'Do laundry', description: 'Wash clothes', completed: true },
    // Add more todos as needed
  ]);
};

// Define mock functions for creating, updating, and deleting todos
export const createTodo = (newTodo) => {
  return Promise.resolve(newTodo); // Mock implementation
};

export const updateTodo = (updatedTodo) => {
  return Promise.resolve(updatedTodo); // Mock implementation
};

export const deleteTodo = (id) => {
  return Promise.resolve(id); // Mock implementation
};
