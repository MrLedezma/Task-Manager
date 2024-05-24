import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-gray-800 max-w-md w-full p-6 rounded-md shadow-md">
      <div className="text-gray-200 mb-4 font-sans">
        <p className="text-xl font-semibold mb-2">Title: {task.title}</p>
        <p className="text-lg mb-2">Description: {task.description}</p>
        <p className="text-lg mb-2">
          Created Date: {new Date(task.date).toLocaleDateString()}
        </p>
      </div>
      <footer className="flex justify-end">
        <div className="flex gap-2">
          <Link
            to={`/tasks/${task._id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Edit
          </Link>
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Delete
          </button>
        </div>
      </footer>
    </div>
  );
}

export default TaskCard;
