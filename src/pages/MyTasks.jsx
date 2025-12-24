import React from "react";
import { useAppContext } from "../context/AppContext";

const MyTasks = () => {
  const { tasks ,handleToggleComplete,handleDelete} = useAppContext();

  // // Toggle completed status
  // const handleToggleComplete = (index) => {
  //   const updatedTasks = tasks.map((t, i) =>
  //     i === index ? { ...t, completed: !t.completed } : t
  //   );
  //   setTasks(updatedTasks);
  // };

  // // Delete task
  // const handleDelete = (index) => {
  //   setTasks(tasks.filter((_, i) => i !== index));
  // };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          📝 My Tasks
        </h1>

        {tasks && tasks.length > 0 ? (
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition-all"
              >
                <span
                  className={`flex-1 text-gray-800 ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.task}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleComplete(task._id,task.completed)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      task.completed
                        ? "bg-green-100 text-green-600 border border-green-300 hover:bg-green-200"
                        : "bg-gray-100 text-gray-600 border border-gray-300 hover:bg-green-100 hover:text-green-600"
                    }`}
                  >
                    {task.completed ? "✅ Done" : "Complete"}
                  </button>

                  <button
                    onClick={() => handleDelete(task._id)}
                    className="text-red-500 hover:text-red-600 text-sm font-medium"
                  >
                    ❌ Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm text-center">
            No tasks added yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyTasks;
