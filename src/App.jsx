import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import MyTasks from "./pages/MyTasks";
import CompletedTask from "./pages/CompletedTask";
import PendingTask from "./pages/PendingTask";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import "./App.css";

const ProtectedRoute = ({ element }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Protected Routes */}
        <Route path="/add-task" element={<ProtectedRoute element={<AddTask />} />} />
        <Route path="/my-tasks" element={<ProtectedRoute element={<MyTasks />} />} />
        <Route path="/completed-task" element={<ProtectedRoute element={<CompletedTask />} />} />
        <Route path="/pending-task" element={<ProtectedRoute element={<PendingTask />} />} />
      </Routes>
    </>
  );
}

export default App;
