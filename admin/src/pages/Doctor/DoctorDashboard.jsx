import { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DontorContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const DoctorDashboard = () => {
  const {
    dToken,
    dashData,
    getDashData,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);
  const { currency, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-[#EAE8F9] p-4 min-w-52 rounded border border-[#C2B2FA] cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.earning_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-[#41729F]">
                {currency} {dashData?.earnings}
              </p>
              <p className="text-[#41729F]">Earnings</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#EAE8F9] p-4 min-w-52 rounded border border-[#C2B2FA] cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.appointments_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-[#41729F]">
                {dashData?.appointments}
              </p>
              <p className="text-[#41729F]">Appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#EAE8F9] p-4 min-w-52 rounded border border-[#C2B2FA] cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.patients_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-[#41729F]">
                {dashData?.patients}
              </p>
              <p className="text-[#41729F]">Patients</p>
            </div>
          </div>
        </div>

        <div className="bg-[#EAE8F9] mt-6 rounded">
          <div className="flex items-center gap-2.5 px-4 py-4 rounded-t border-b border-[#C2B2FA]">
            <img src={assets.list_icon} alt="" />
            <p className="font-semibold text-[#41729F]">Latest Bookings</p>
          </div>

          <div className="pt-4 border border-t-0 border-[#C2B2FA]">
            {dashData?.latestAppointments?.map((item, index) => (
              <div
                className="flex items-center px-6 py-3 gap-3 hover:bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] transition-all rounded"
                key={index}
              >
                <img
                  className="rounded-full w-10 border border-[#C2B2FA]"
                  src={item?.userData?.image}
                  alt=""
                />
                <div className="flex-1 text-sm">
                  <p className="text-[#41729F] font-medium">
                    {item?.userData?.name}
                  </p>
                  <p className="text-[#41729F]">
                    {slotDateFormat(item?.slotDate)}
                  </p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-400 text-xs font-medium">Cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-green-500 text-xs font-medium">Completed</p>
                ) : (
                  <div className="flex gap-2">
                    <img
                      onClick={() => cancelAppointment(item?._id)}
                      className="w-10 cursor-pointer"
                      src={assets.cancel_icon}
                      alt=""
                    />
                    <img
                      onClick={() => completeAppointment(item?._id)}
                      className="w-10 cursor-pointer"
                      src={assets.tick_icon}
                      alt=""
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorDashboard;
