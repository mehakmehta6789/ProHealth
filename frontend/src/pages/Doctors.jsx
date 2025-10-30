import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import MoveUpOnRender from "../components/MoveUpOnRender";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  useEffect(() => {
    if (speciality) {
      setFilterDoc(doctors.filter((d) => d.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  return (
    <div className="bg-[#EAE8F9] min-h-screen p-4 text-[#41729F]">
      <p className="text-[#41729F]">Browse through the doctors specialist.</p>

      <div className="flex">
        {/* Sidebar / Filter */}
        <div className="flex items-start gap-5 mt-5">
          <button
            className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
              showFilter
                ? "bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] text-white"
                : "border-[#41729F] text-[#41729F]"
            }`}
            onClick={() => setShowFilter((prev) => !prev)}
          >
            Filter
          </button>
          <div
            className={`flex-col gap-4 text-sm ${
              showFilter ? "flex" : "hidden sm:flex"
            }`}
          >
            {specialities.map((spec) => (
              <p
                key={spec}
                onClick={() =>
                  speciality === spec
                    ? navigate("/doctors")
                    : navigate(`/doctors/${spec}`)
                }
                className={`w-[91vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded cursor-pointer transition-all border-[#A7C7E7] ${
                  speciality === spec
                    ? "bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] text-white"
                    : "text-[#41729F]"
                }`}
              >
                {spec}
              </p>
            ))}
          </div>
        </div>

        {/* Doctors List */}
        <div className="w-full m-4">
          <MoveUpOnRender>
            <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
              {filterDoc.map((doc) => (
                <div
                  onClick={() => navigate(`/appointment/${doc._id}`)}
                  className="border border-[#A7C7E7] rounded-xl overflow-hidden cursor-pointer 
                             hover:scale-105 hover:shadow-lg transition-all duration-500 bg-white"
                  key={doc._id}
                >
                  <img
                    className="w-full bg-[#A7C7E7] object-cover"
                    src={doc.image}
                    alt={doc.name}
                  />
                  <div className="p-4">
                    <div
                      className={`flex items-center gap-2 text-sm text-center ${
                        doc.available ? "text-green-500" : "text-[#C2B2FA]"
                      }`}
                    >
                      <p
                        className={`w-2 h-2 rounded-full ${
                          doc.available ? "bg-green-500" : "bg-[#C2B2FA]"
                        }`}
                      ></p>
                      <p>{doc.available ? "Available" : "Not Available"}</p>
                    </div>
                    <p className="text-[#41729F] text-lg font-medium mt-1">
                      {doc.name}
                    </p>
                    <p className="text-[#C2B2FA] text-sm">{doc.speciality}</p>
                  </div>
                </div>
              ))}
            </div>
          </MoveUpOnRender>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
