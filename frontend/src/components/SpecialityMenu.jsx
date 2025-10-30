import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-6 py-16 bg-[#EAE8F9] text-[#41729F]"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold text-center">Find by Speciality</h1>
      <p className="sm:w-1/2 text-center text-base sm:text-lg text-gray-700">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>

      <div className="flex sm:justify-center gap-6 pt-6 w-full overflow-x-auto px-4">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center min-w-[120px] sm:min-w-[150px] cursor-pointer flex-shrink-0 transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-b from-[#FFB6C1] to-[#A7C7E7] rounded-lg p-3"
          >
            <div className="w-36 h-36 sm:w-44 sm:h-44 mb-2 flex items-center justify-center overflow-hidden rounded-full">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={item.speciality}
              />
            </div>
            <p className="font-medium text-center text-sm sm:text-base md:text-lg break-words">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
