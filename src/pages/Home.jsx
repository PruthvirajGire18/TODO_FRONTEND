import React from "react";
import heroImg from "../assets/todo.png"; 
import { useAppContext } from "../context/AppContext";
// 👆 apni image ko 'src/assets' folder me daal aur yaha import kar
// Example path: src/assets/hero-todo.png

const HeroSection = () => {
  const {navigate}=useAppContext();
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-8 md:px-20 bg-gradient-to-r from-blue-50 to-indigo-100">
      {/* Left Text Content */}
      <div className="max-w-xl text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Stay Organized, Stay Focused ✨
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Manage your daily tasks efficiently, set priorities, and boost your productivity with ease.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <button onClick={()=>navigate('/add-task')} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-all">
            Get Started
          </button>

          <button className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side Illustration */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <img
          src={heroImg}
          alt="To-Do Illustration"
          className="w-72 md:w-[420px] drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
