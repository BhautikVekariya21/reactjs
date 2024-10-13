import { useState, useEffect } from 'react';
import { TodoProvider } from './components';
import TodoForm from './components/Todoform';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // Update an existing todo
  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...updatedTodo, id } : todo))
    );
  };

  // Delete a todo by id
  const deleteTodo = (id) => {
    console.log('Deleting todo:', id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle the completed status of a todo
  const toggleComplete = (id) => {
    console.log('Toggling complete for:', id);
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Load todos from localStorage on initial render
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // Save todos to localStorage when todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#399fde] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
