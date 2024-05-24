import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);

  return (
    <nav className="bg-gray-800 my-3 mx-auto max-w-7xl flex justify-between items-center py-5 px-10 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-white">
        <Link
          to={isAuthenticated ? "/tasks" : "/"}
          className="hover:text-indigo-400"
        >
          Task Manager
        </Link>
      </h1>
      <ul className="flex gap-x-4 items-center">
        {isAuthenticated ? (
          <>
            <li className="text-white font-semibold">
              Welcome, <span className="text-indigo-400">{user.username}</span>
            </li>
            <li>
              <Link
                to="/add-task"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                Add Task
              </Link>
            </li>
            <li>
              <button
                onClick={() => logout()}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
