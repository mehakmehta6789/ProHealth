import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Banner = () => {
  const navigate = useNavigate();
  const { token } = useContext(AppContext);

  const handleCreateAccount = () => {
    navigate("/login");
    window.scrollTo(0, 0); // scroll to top
  };

  return (
    <div className="flex flex-col md:flex-row items-center my-20 md:mx-10 rounded-lg 
                    bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] shadow-lg px-6 sm:px-10 md:px-12 lg:px-16 relative pb-10 md:pb-0">
      
      {/*---------------- Left Side ---------------- */}
      <div className="flex-1 py-10 md:py-16 text-center md:text-left z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          Book Appointment
        </h2>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white">
          With 100+ Trusted Doctors
        </p>

        {!token && (
          <button
            onClick={handleCreateAccount}
            className="mt-6 bg-white text-[#41729F] text-sm sm:text-base px-8 py-3 rounded-full font-medium 
                       hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Create Account
          </button>
        )}
      </div>

      {/*---------------- Right Side Image ---------------- */}
      <div className="hidden md:flex md:w-1/2 lg:w-[370px] relative justify-end">
        <img
          src={assets.appointment_img}
          alt="Doctor Appointment Illustration"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
