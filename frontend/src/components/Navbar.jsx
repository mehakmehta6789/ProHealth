import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-[#EAE8F9]/95 backdrop-blur-sm shadow-sm">
      {/* Compact inner container */}
      <div className="flex items-center justify-between py-2 px-4 md:px-10">
        {/* Logo smaller for balance */}
        <img
          onClick={() => navigate("/")}
          className="w-32 cursor-pointer"
          src={assets.logo_logo}
          alt="Logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          {["/", "/doctors", "/about", "/contact"].map((path, i) => {
            const labels = ["HOME", "ALL DOCTORS", "ABOUT", "CONTACT"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-[#41729F] border-b-2 border-[#C2B2FA]"
                      : "text-[#41729F]/80 hover:text-[#C2B2FA]"
                  }`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </ul>

        {/* Right Side: User/Login */}
        <div className="flex items-center gap-3">
          {token && userData ? (
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <img
                  className="w-8 h-8 rounded-full border border-[#C2B2FA]"
                  src={userData.image}
                  alt=""
                />
                <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              </div>
              <div className="absolute top-full right-0 mt-2 bg-[#C2B2FA]/20 backdrop-blur-md rounded-lg shadow-lg hidden group-hover:flex flex-col min-w-[160px] p-3 gap-2">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-[#41729F] cursor-pointer transition-colors"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-[#41729F] cursor-pointer transition-colors"
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-[#41729F] cursor-pointer transition-colors"
                >
                  Logout
                </p>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] text-white px-5 py-1.5 rounded-full font-medium hidden md:block hover:scale-105 transition-transform duration-200"
            >
              Create Account
            </button>
          )}

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden cursor-pointer"
            src={assets.menu_icon}
            alt="Menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full h-full bg-[#EAE8F9] z-50 transform transition-transform duration-300 md:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#C2B2FA]">
          <img className="w-32" src={assets.logo} alt="Logo" />
          <img
            className="w-6 cursor-pointer"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <ul className="flex flex-col items-center gap-5 mt-6 px-6 text-lg font-medium text-[#41729F]">
          <NavLink onClick={() => setShowMenu(false)} to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/doctors">
            ALL DOCTORS
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact">
            CONTACT
          </NavLink>
          {!token && (
            <button
              onClick={() => {
                setShowMenu(false);
                navigate("/login");
              }}
              className="bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] text-white px-6 py-2 rounded-full mt-4 hover:scale-105 transition-transform duration-200"
            >
              Create Account
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
