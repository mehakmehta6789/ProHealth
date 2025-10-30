import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import MoveUpOnRender from "../../components/MoveUpOnRender";

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll ">
      <MoveUpOnRender id="admin-doctorlist">
        <h1 className="text-lg font-medium text-[#41729F]">All Doctors</h1>

        <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
          {doctors.map((item, index) => (
            <div
              className="border border-[#C2B2FA] rounded-xl max-w-56 overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300 bg-[#EAE8F9]"
              key={index}
            >
              <img
                className="bg-[#C2B2FA] group-hover:bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] transition-all duration-300 w-full"
                src={item.image}
                alt=""
              />
              <div className="p-4">
                <p className="text-[#41729F] text-lg font-medium">{item.name}</p>
                <p className="text-[#41729F] text-sm">{item.speciality}</p>

                <div className="mt-5 flex items-center gap-1 text-sm">
                  <input
                    onChange={() => changeAvailability(item._id)}
                    type="checkbox"
                    checked={item.available}
                  />
                  <p className="text-[#41729F]">Available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MoveUpOnRender>
    </div>
  );
};

export default DoctorsList;
