import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"; // ✅ use your axios instance instead of axios

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // ✅ Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await api.get(`/task/get-tasks/${userId}`);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks(); // load tasks when component mounts
  }, []);

  // ✅ Add new task
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    try {
      const res = await api.post("/task/add-task", { task,userId });
      alert(res.data.message);
      setTask("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // ✅ Toggle completion
  const handleToggleComplete = async (id, currentStatus) => {
    try {
      const res = await api.put(`/task/update-task/${id}`, {
        completed: !currentStatus,
      });
      console.log(res.data.message);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // ✅ Delete a task
  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/task/del-task/${id}`);
      alert(res.data.message);
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
        setTasks,
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
