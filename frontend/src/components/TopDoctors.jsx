import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-6 py-16 bg-[#EAE8F9] text-[#41729F]">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-700">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 px-4">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-[#A7C7E7] rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-b from-[#FFB6C1] to-[#A7C7E7]"
          >
            <img className="bg-[#A7C7E7] w-full h-40 object-cover" src={item.image} alt="" />
            <div className="p-4">
              <div className={`flex items-center gap-2 text-sm text-center ${item.available ? "text-green-500" : "text-gray-500"}`}>
                <p className={`w-2 h-2 ${item.available ? "bg-green-500" : "bg-gray-500"} rounded-full`}></p>
                <p>{item.available ? "Available" : "Not Available"}</p>
              </div>
              <p className="text-[#41729F] text-lg font-medium mt-1">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-gradient-to-b from-[#FFB6C1] to-[#A7C7E7] text-white px-12 py-3 rounded-full mt-10 hover:scale-105 transition-transform duration-300"
      >
        See More
      </button>
    </div>
  );
};

export default TopDoctors;
