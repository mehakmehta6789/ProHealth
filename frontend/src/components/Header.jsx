import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 md:px-10 lg:px-20 items-center">
        {/* Left side */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw]">
          <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-snug">
            Book Appointment <br />
            With Trusted Doctors
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light mt-4">
            <img className="w-28" src={assets.group_profiles} alt="Group Profiles" />
            <p>
              Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
              schedule your appointment hassle-free.
            </p>
          </div>
          <a
            className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300 mt-6"
            href="#speciality"
          >
            Book appointment
            <img className="w-3" src={assets.arrow_icon} alt="Arrow" />
          </a>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            className="w-full md:max-w-[500px] h-auto rounded-lg shadow-lg"
            src={assets.header_img}
            alt="Doctors Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
