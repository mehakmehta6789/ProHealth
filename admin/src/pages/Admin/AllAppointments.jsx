import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import MoveUpOnRender from "../../components/MoveUpOnRender";

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } =
    useContext(AdminContext);
  const { currency, calculateAge, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) getAllAppointments();
  }, [aToken]);

  return (
    <div className="w-full max-w-7xl m-5">
      <MoveUpOnRender id="admin-allappointment">
        {/* Header */}
        <p className="mb-4 text-xl font-semibold text-[#41729F]">
          All Appointments
        </p>

        {/* Table Container */}
        <div className="bg-white border border-[#C2B2FA] rounded-lg shadow-md text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">

          {/* Table Header */}
          <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center py-3 px-6 border-b border-[#A7C7E7] bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] text-[#41729F] font-medium">
            <p>#</p>
            <p>Patient</p>
            <p>Age</p>
            <p>Date & Time</p>
            <p>Doctor</p>
            <p>Fees</p>
            <p>Actions</p>
          </div>

          {/* Table Rows */}
          {appointments.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-600 py-3 px-6 border-b border-[#EAE8F9] hover:bg-[#EAE8F9]/60 transition-colors duration-200"
            >
              <p className="max-sm:hidden font-medium text-[#41729F]">{index + 1}</p>

              {/* Patient */}
              <div className="flex items-center gap-2">
                <img
                  className="w-8 h-8 rounded-full border border-[#C2B2FA]"
                  src={item?.userData?.image}
                  alt=""
                />
                <p className="capitalize text-[#41729F]">{item.userData.name}</p>
              </div>

              <p className="max-sm:hidden text-[#41729F]">
                {calculateAge(item.userData.dob)}
              </p>

              {/* Date & Time */}
              <p className="text-[#41729F]">
                {slotDateFormat(item.slotDate)}, {item.slotTime}
              </p>

              {/* Doctor */}
              <div className="flex items-center gap-2">
                <img
                  className="w-8 h-8 rounded-full bg-[#A7C7E7]/40 border border-[#C2B2FA]"
                  src={item?.docData?.image}
                  alt=""
                />
                <p className="text-[#41729F]">{item?.docData?.name}</p>
              </div>

              {/* Fees */}
              <p className="font-semibold text-[#41729F]">
                {currency}
                {item?.docData?.fees}
              </p>

              {/* Status / Action */}
              {item.cancelled ? (
                <p className="text-red-400 text-xs font-medium bg-[#FFE5E5] px-3 py-1 rounded-md">
                  Cancelled
                </p>
              ) : item.isCompleted ? (
                <p className="text-green-600 text-xs font-medium bg-[#D7F9E9] px-3 py-1 rounded-md">
                  Completed
                </p>
              ) : (
                <img
                  onClick={() => cancelAppointment(item._id)}
                  className="w-7 cursor-pointer hover:scale-110 transition-transform"
                  src={assets.cancel_icon}
                  alt="Cancel"
                />
              )}
            </div>
          ))}
        </div>
      </MoveUpOnRender>
    </div>
  );
};

export default AllAppointments;
