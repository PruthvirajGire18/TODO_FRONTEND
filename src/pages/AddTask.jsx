import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import api from "../api";

const AddTask = () => {
  const {task,setTask,tasks,setTasks,handleAddTask,handleToggleComplete,handleDelete}=useAppContext();


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          📝 To-Do List
        </h1>

        {/* Input + Button */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleAddTask}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-5 py-2 rounded-lg transition-all shadow-md"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        
      </div>
    </div>
  );
};

export default AddTask;
