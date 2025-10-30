import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets.js";
import { AppContext } from "../../context/AppContext.jsx";
import MoveUpOnRender from "../../components/MoveUpOnRender.jsx";

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } =
    useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) getDashData();
  }, [aToken]);

  return (
    dashData && (
      <MoveUpOnRender id="admin-dash">
        <div className="m-5">
          {/* Top Cards Section */}
          <div className="flex flex-wrap gap-4">
            {/* Doctors Card */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] p-4 min-w-52 rounded-xl border border-[#C2B2FA] cursor-pointer hover:scale-105 transition-all shadow-sm">
              <img className="w-14" src={assets.doctor_icon} alt="" />
              <div>
                <p className="text-2xl font-bold text-[#41729F]">
                  {dashData?.doctors}
                </p>
                <p className="text-[#41729F]/80 font-medium">Doctors</p>
              </div>
            </div>

            {/* Appointments Card */}
            <div className="flex items-center gap-3 bg-[#EAE8F9] p-4 min-w-52 rounded-xl border border-[#C2B2FA] cursor-pointer hover:scale-105 transition-all shadow-sm">
              <img className="w-14" src={assets.appointments_icon} alt="" />
              <div>
                <p className="text-2xl font-bold text-[#41729F]">
                  {dashData?.appointments}
                </p>
                <p className="text-[#41729F]/80 font-medium">Appointments</p>
              </div>
            </div>

            {/* Patients Card */}
            <div className="flex items-center gap-3 bg-[#A7C7E7]/20 p-4 min-w-52 rounded-xl border border-[#A7C7E7] cursor-pointer hover:scale-105 transition-all shadow-sm">
              <img className="w-14" src={assets.patients_icon} alt="" />
              <div>
                <p className="text-2xl font-bold text-[#41729F]">
                  {dashData?.users}
                </p>
                <p className="text-[#41729F]/80 font-medium">Patients</p>
              </div>
            </div>
          </div>

          {/* Latest Bookings Section */}
          <div className="bg-white mt-10 rounded-xl border border-[#EAE8F9] shadow-sm">
            <div className="flex items-center gap-2.5 px-5 py-4 rounded-t bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7]">
              <img className="w-5" src={assets.list_icon} alt="" />
              <p className="font-semibold text-[#41729F] text-lg">
                Latest Bookings
              </p>
            </div>

            <div className="pt-3 border-t border-[#C2B2FA]/40">
              {dashData?.latestAppointments?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center px-6 py-3 gap-4 hover:bg-[#EAE8F9]/60 transition-colors duration-200"
                >
                  <img
                    className="rounded-full w-10 border border-[#C2B2FA]"
                    src={item?.docData?.image}
                    alt=""
                  />

                  <div className="flex-1 text-sm">
                    <p className="text-[#41729F] font-medium">
                      {item?.docData?.name}
                    </p>
                    <p className="text-[#41729F]/70">
                      {slotDateFormat(item?.slotDate)}
                    </p>
                  </div>

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
                      className="w-8 cursor-pointer hover:scale-110 transition-transform"
                      src={assets.cancel_icon}
                      alt="Cancel"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </MoveUpOnRender>
    )
  );
};

export default Dashboard;
