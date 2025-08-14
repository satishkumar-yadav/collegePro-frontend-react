import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      localStorage.setItem("token", data.token);
      enqueueSnackbar("Logged in!", { variant: "success" });
      navigate("/dashboard");
    } catch {
      enqueueSnackbar("Invalid credentials", { variant: "error" });
    }
  };

  return (
    <form className="max-w-md mx-auto py-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <select {...register("role", { required: true })}>
        <option value="">Login As</option>
        <option value="admin">Admin</option>
        <option value="faculty">Faculty</option>
        <option value="student">Student</option>
      </select>
      <input type="text" placeholder="Email/Aadhar" {...register("username", { required: true })} />
      <input type="password" placeholder="Password" {...register("password", { required: true })} />
      <button type="submit" className="btn-primary">Login</button>
    </form>
  );
}
