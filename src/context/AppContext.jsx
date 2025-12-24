import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // ✅ Fetch logged-in user's tasks
  const fetchTasks = async () => {
    try {
      const res = await api.get("/task/get-tasks"); // ❌ no userId
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ✅ Add task
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      const res = await api.post("/task/add-task", { task }); // ❌ no userId
      setTask("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // ✅ Toggle complete
  const handleToggleComplete = async (id, currentStatus) => {
    try {
      await api.put(`/task/update-task/${id}`, {
        completed: !currentStatus,
      });
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // ✅ Delete task
  const handleDelete = async (id) => {
    try {
      await api.delete(`/task/del-task/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        navigate,
        task,
        setTask,
        tasks,
        handleAddTask,
        handleToggleComplete,
        handleDelete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
