import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { backendUrl, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState("Sign Up"); // "Sign Up" or "Login"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Sign Up") {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          password,
          email,
        });

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success(data.message);
          navigate("/doctors");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, {
          password,
          email,
        });

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success("Login successful");
          navigate("/doctors");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center bg-[#EAE8F9] p-4"
    >
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[320px] sm:min-w-96 border rounded-xl shadow-lg bg-white text-[#41729F]">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-[#C2B2FA]">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p className="text-[#41729F]">Full Name</p>
            <input
              className="border border-[#A7C7E7] rounded w-full p-2 mt-1 text-[#41729F]"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p className="text-[#41729F]">Email</p>
          <input
            className="border border-[#A7C7E7] rounded w-full p-2 mt-1 text-[#41729F]"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p className="text-[#41729F]">Password</p>
          <input
            className="border border-[#A7C7E7] rounded w-full p-2 mt-1 text-[#41729F]"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-md text-base font-medium 
                     bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] text-white 
                     hover:from-[#A7C7E7] hover:to-[#FFB6C1] transition-all duration-300"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p className="text-sm text-[#41729F]">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="underline cursor-pointer text-[#C2B2FA]"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-sm text-[#41729F]">
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="underline cursor-pointer text-[#C2B2FA]"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
