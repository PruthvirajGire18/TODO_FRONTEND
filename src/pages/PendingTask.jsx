import React from "react";
import { useAppContext } from "../context/AppContext";
import { Clock, ClipboardList, AlertCircle } from "lucide-react";

const PendingTask = () => {
  const { tasks } = useAppContext();
  const pendingTask = tasks.filter((t) => !t.completed);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Clock className="text-yellow-500 w-7 h-7" />
        <h1 className="text-2xl font-bold text-gray-800">Pending Tasks</h1>
      </div>

      {/* If no pending tasks */}
      {pendingTask.length === 0 ? (
        <div className="bg-white shadow-sm rounded-xl p-8 flex flex-col items-center text-gray-500">
          <ClipboardList className="w-10 h-10 mb-3 text-gray-400" />
          <p className="text-lg font-medium">All tasks are completed 🎉</p>
        </div>
      ) : (
        <ul className="w-full max-w-md space-y-3">
          {pendingTask.map((t, i) => (
            <li
              key={i}
              className="flex items-center gap-3 bg-white border border-yellow-200 rounded-xl shadow-sm p-3 transition transform hover:-translate-y-1 hover:shadow-md"
            >
              <AlertCircle className="text-yellow-500 w-5 h-5" />
              <span className="text-gray-800 font-medium">{t.task}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PendingTask;
