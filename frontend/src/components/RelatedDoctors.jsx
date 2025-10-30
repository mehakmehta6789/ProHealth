import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, docId, speciality]);

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-[#41729F] md:mx-10 bg-[#EAE8F9] rounded-xl px-4 sm:px-0">
      <h1 className="text-3xl font-semibold">Related Doctors</h1>
      <p className="sm:w-1/2 text-center text-sm text-[#41729F]/80">
        Browse through our curated list of trusted doctors in the same specialty.
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="bg-white border border-[#C2B2FA]/40 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <img
              className="w-full h-40 object-cover bg-[#A7C7E7]/20"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2 text-sm">
                <span
                  className={`w-3 h-3 rounded-full ${
                    item?.available ? "bg-green-500" : "bg-gray-400"
                  }`}
                ></span>
                <p className={`text-sm ${item?.available ? "text-green-500" : "text-gray-500"}`}>
                  {item.available ? "Available" : "Not Available"}
                </p>
              </div>
              <p className="text-lg font-medium text-[#41729F]">{item.name}</p>
              <p className="text-sm text-[#41729F]/70">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="mt-10 px-12 py-3 rounded-full bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] text-white font-medium hover:scale-105 transition-transform duration-300"
      >
        See All Doctors
      </button>
    </div>
  );
};

export default RelatedDoctors;
