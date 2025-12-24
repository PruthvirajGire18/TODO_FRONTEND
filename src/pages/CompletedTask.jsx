import React from "react";
import { useAppContext } from "../context/AppContext";
import { CheckCircle2, ClipboardList } from "lucide-react";

function CompletedTasks() {
  const { tasks } = useAppContext();
  const completed = tasks.filter((task) => task.completed);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <CheckCircle2 className="text-green-600 w-7 h-7" />
        <h1 className="text-2xl font-bold text-gray-800">Completed Tasks</h1>
      </div>

      {/* Task List */}
      {completed.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-white shadow-sm rounded-xl p-8 text-gray-500">
          <ClipboardList className="w-10 h-10 mb-3 text-gray-400" />
          <p className="text-lg font-medium">No completed tasks yet</p>
        </div>
      ) : (
        <ul className="w-full max-w-md space-y-3">
          {completed.map((task, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-white border border-green-200 rounded-xl shadow-sm p-3 transition transform hover:-translate-y-1 hover:shadow-md"
            >
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              <span className="text-gray-800 font-medium">{task.task}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CompletedTasks;
