import { createContext,useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // 🚨 GUARD
  if (!user || !user.id) {
    console.error("User not found in localStorage");
  }

  const fetchTasks = async () => {
    if (!user?.id) return;

    try {
      const res = await api.get(`/task/get-tasks/${user.id}`);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!task.trim() || !user?.id) return;

    try {
      await api.post("/task/add-task", {
        task,
        userId: user.id,
      });
      setTask("");
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleComplete = async (id, completed) => {
    await api.put(`/task/update-task/${id}`, {
      completed: !completed,
    });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await api.delete(`/task/del-task/${id}`);
    fetchTasks();
  };

  return (
    <AppContext.Provider
      value={{
        task,
        setTask,
        tasks,
        handleAddTask,
        handleToggleComplete,
        handleDelete,
        navigate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
