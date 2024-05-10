import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors }, // Rename to avoid naming conflict
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {registerErrors &&
          Array.isArray(registerErrors) &&
          registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error}
            </div>
          ))}

        <h1 className="text-2xl font-bold text-center">Register</h1>

        <form
          onSubmit={handleSubmit((values) => signup(values))}
          className="mt-4"
        >
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
          />
          {formErrors.username && (
            <p className="text-red-500">Username is required</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {formErrors.email && (
            <p className="text-red-500">Email is required</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
          />
          {formErrors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2"
          >
            Register
          </button>
        </form>

        <p className="flex gap-x-2 justify-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
