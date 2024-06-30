import React, { useState } from 'react';
import './App.css'

export default function UI() {
  const [inputValue, setInputValue] = useState({
    task: ''
  });

  const [todo, setTodo] = useState([]);

  const handleTask = (e) => {
    e.preventDefault();
    setTodo([...todo, { id: Date.now(), task: inputValue.task }]);
    setInputValue({ task: '' }); // Clear input after adding
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
  

  return (
    <div>
      <body>
        <div className="mt-5">
          <h1 className="text-center font-poetsen font-bold text-3xl">TO-DO APP</h1>
        </div>
        <div className="w-2/4 h-auto bg-white m-auto mt-12 rounded-lg py-6">
          <input
            className="ml-12 text-sm custom-input w-7/12 m-5 px-9 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter task here"
            type="text"
            id="unique-input"
            value={inputValue.task}
            onChange={handleChange}
          />
          <button onClick={handleTask} className="text-end ml-16 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">Add Task</button>
          <div>
          {todo.map((item) => (
            <div key={item.id} className="flex justify-between mb-6">
              <div className="flex items-center">
                <span className="ml-16 mr-6 cursor-pointer">✏️</span>
                <p onClick={() => toggleStrikeThrough(item.id)} className="cursor-pointer" style={{ textDecoration: item.strikeThrough ? 'line-through' : 'none' }}>
                  {item.task}
                </p>
              </div>
              <button id="task-item" onClick={() => del(item.id)} className="flex mr-28">&times;</button>
            </div>
          ))}
        </div>
          
           
        </div>
      </body>
    </div>
  );
}
