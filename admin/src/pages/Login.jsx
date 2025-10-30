import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DontorContext";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 rounded-xl bg-[#EAE8F9] shadow-lg">
        {/* Header */}
        <p className="text-2xl font-semibold text-[#41729F]">
          {state} Login
        </p>

        {/* Email */}
        <div className="w-full flex flex-col gap-1">
          <label className="text-[#5E5E5E] text-sm">Email</label>
          <input
            className="border border-[#A7C7E7] rounded w-full p-2 mt-1 bg-white text-[#41729F] focus:outline-none focus:ring-2 focus:ring-[#C2B2FA]"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Password */}
        <div className="w-full flex flex-col gap-1">
          <label className="text-[#5E5E5E] text-sm">Password</label>
          <input
            className="border border-[#A7C7E7] rounded w-full p-2 mt-1 bg-white text-[#41729F] focus:outline-none focus:ring-2 focus:ring-[#C2B2FA]"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {/* Submit button */}
        <button className="bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] text-white w-full py-2 rounded-md text-base font-medium hover:opacity-90 transition-all">
          Login
        </button>

        {/* Toggle login type */}
        {state === "Admin" ? (
          <p className="mt-2 text-[#41729F] text-sm">
            Doctor Login?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p className="mt-2 text-[#41729F] text-sm">
            Admin Login?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              Click Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
