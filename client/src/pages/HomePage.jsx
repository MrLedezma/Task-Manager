import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Task Manager</h1>
        <p className="text-lg mb-4">
          Task Manager is your personal task management tool that helps you keep
          track of your tasks effortlessly. Whether you need to manage your
          daily to-do list or track your project milestones, Task Manager is
          here to help.
        </p>
        <p className="text-lg mb-6">
          Sign up or log in to start organizing your tasks. Add new tasks, edit
          existing ones, and keep an eye on your deadlines with our simple and
          intuitive interface.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {" "}
          {/* Centering the buttons horizontally */}
          <Link
            to="/login"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition duration-300 mb-4 md:mb-0"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Features:</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Create and manage tasks with ease.</li>
          <li>Edit and update your tasks anytime.</li>
          <li>View all your tasks in a simple and organized manner.</li>
          <li>Secure authentication to keep your data safe.</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
