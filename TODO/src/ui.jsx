import React from 'react'

export default function UI() {
  return (
    <div>
      <body>
        <div className="mt-5">
          <h1 className="text-center font-poetsen font-bold text-3xl">TO-DO APP</h1>
        </div>  
        <div className="w-2/4 h-20 bg-white m-auto mt-12 rounded-lg">
        <input
          class="ml-12 text-sm custom-input w-96 m-5 px-9 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
          placeholder="Enter task here"
          type="text"
          id="unique-input"
        />
          <button class="text-end ml-20 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">Add Task</button>
        </div>
     </body>
    </div>
  )
}
