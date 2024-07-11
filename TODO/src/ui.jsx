import React, { useState} from 'react';
import './App.css';

export default function UI() {
  const [inputValue, setInputValue] = useState({ task: '' });
  const [todo, setTodo] = useState([]);
  const [editId, setEditId] = useState(null);

  
  const handleTask = (e) => {
    e.preventDefault();
    if (inputValue.task.trim() !== '') {
      if (editId) {
        setTodo(todo.map(item =>
          item.id === editId ? { ...item, task: inputValue.task.trim() } : item
        ));
        setEditId(null);
      } else {
        setTodo([...todo, { id: Date.now(), task: inputValue.task.trim(), strikeThrough: false }]);
      }
      setInputValue({ task: '' });
    }
  };

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      task: e.target.value
    });
  };

  const toggleStrikeThrough = (id) => {
    setTodo(todo.map(item =>
      item.id === id ? { ...item, strikeThrough: !item.strikeThrough } : item
    ));
  };

  const del = (id) => {
    setTodo(todo.filter(item => item.id !== id));
  };

  const handleEdit = id => {
    const taskToEdit = todo.find(item => item.id === id);
    if (taskToEdit) {
      setInputValue({ task: taskToEdit.task });
      setEditId(id);
    }
  };

  return (
    <div>
      <div className="mt-5">
        <h1 className="text-center font-poetsen font-bold text-3xl">TO-DO APP</h1>
      </div>
      <div className="w-2/4 h-auto bg-white m-auto mt-12 rounded-lg py-6">
        <form onSubmit={handleTask}>
          <input
            className="ml-12 text-sm custom-input w-7/12 m-5 px-9 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter task here"
            type="text"
            id="unique-input"
            value={inputValue.task}
            onChange={handleChange}
          />
          <button type="submit" className="text-end ml-16 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
            {editId ? 'Update Task' : 'Add Task'}
          </button>
        </form>
        <div>
          {todo.map((item) => (
            <div key={item.id} className="flex justify-between mb-6">
              <div className="flex items-center">
                <span onClick={() => handleEdit(item.id)} className="ml-16 mr-6 cursor-pointer">✏️</span>
                <p onClick={() => toggleStrikeThrough(item.id)} className="cursor-pointer" style={{ textDecoration: item.strikeThrough ? 'line-through' : 'none' }}>
                  {item.task}
                </p>
              </div>
              <button id="task-item" onClick={() => del(item.id)} className="flex mr-28">❌</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
