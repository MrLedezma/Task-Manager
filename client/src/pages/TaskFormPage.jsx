import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate("/tasks");
  });

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-gray-800 max-w-md w-full p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-white mb-4">
          {params.id ? "Edit Task" : "Add New Task"}
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md"
            autoFocus
          />
          <textarea
            rows="3"
            placeholder="Description"
            {...register("description")}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md block mx-auto hover:bg-blue-600 transition duration-300"
          >
            {params.id ? "Update" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
