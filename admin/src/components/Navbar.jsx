import { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DontorContext";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);

  const logout = () => {
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
    dToken && setDToken("");
    dToken && localStorage.removeItem("dToken");
  };

  return (
    <div className="flex sticky top-0 z-50 justify-between items-center px-4 py-1.5 sm:px-10 border-b shadow-md bg-[#EAE8F9]/90 backdrop-blur-md">
      {/* Left Side: Logo + Role */}
      <div className="flex items-center gap-3 text-sm sm:text-base">
        <img
          className="w-24 sm:w-32 cursor-pointer drop-shadow-md"
          src={assets.admin_logo_logo}
          alt="Admin Logo"
        />
        <p className="px-3 py-0.5 rounded-full border border-[#C2B2FA] text-[#41729F] bg-[#FFFFFF]/70 font-medium">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>

      {/* Right Side: Logout Button */}
      <button
        onClick={logout}
        className="bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] text-white text-sm sm:text-base px-5 py-1 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
