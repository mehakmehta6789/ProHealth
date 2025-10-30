import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DontorContext";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 rounded-r-full transition-all duration-300 cursor-pointer text-[#41729F] hover:bg-[#C2B2FA]/40 hover:shadow-md ${
      isActive
        ? "bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] text-white shadow-lg"
        : ""
    }`;

  return (
    <div className="min-h-screen bg-[#EAE8F9] border-r border-[#C2B2FA]/50 shadow-md pt-6">
      {aToken && (
        <ul className="mt-4 space-y-2">
          <NavLink className={linkClass} to="/admin-dashboard">
            <img src={assets.home_icon} alt="" className="w-5 h-5" />
            <p className="hidden md:block font-medium">Dashboard</p>
          </NavLink>

          <NavLink className={linkClass} to="/all-appointments">
            <img src={assets.appointment_icon} alt="" className="w-5 h-5" />
            <p className="hidden md:block font-medium">Appointments</p>
          </NavLink>

          <NavLink className={linkClass} to="/add-doctor">
            <img src={assets.add_icon} alt="" className="w-5 h-5" />
            <p className="hidden md:block font-medium">Add Doctor</p>
          </NavLink>

          <NavLink className={linkClass} to="/doctor-list">
            <img src={assets.people_icon} alt="" className="w-5 h-5" />
            <p className="hidden md:block font-medium">Doctor List</p>
          </NavLink>
        </ul>
      )}

      {dToken && (
        <ul className="mt-4 space-y-2">
          <NavLink className={linkClass} to="/doctor-dashboard">
            <img src={assets.home_icon} alt="" className="w-5 h-5" />
            <p className="hidden md:block font-medium">Dashboard</p>
          </NavLink>

          <NavLink className={linkClass} to="/doctor-appointments">
            <img src={assets.appointment_icon} alt="" className="w-5 h-5" />
            <p className="hidden md:block font-medium">Appointments</p>
          </NavLink>

          <NavLink className={linkClass} to="/doctor-profile">
            <img src={assets.people_icon} alt="" className="w-5 h-5" />
            <p className="hidden md:block font-medium">Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
