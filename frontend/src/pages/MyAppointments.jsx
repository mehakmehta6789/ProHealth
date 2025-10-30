import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MoveUpOnRender from "../components/MoveUpOnRender";

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  const months = [
    "", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dataArray = slotDate.split("_");
    return dataArray[0] + " " + months[Number(dataArray[1])] + " " + dataArray[2];
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/appointments", {
        headers: { token },
      });
      if (data.success) setAppointments(data.appointments.reverse());
    } catch (error) {
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancle-appointment",
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Appointment payment",
      description: "Appointment Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razorpay",
            response,
            { headers: { token } }
          );
          if (data.success) {
            getUserAppointments();
            navigate("/my-appointments");
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/payment-razorpay",
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) initPay(data.order);
      else toast.error(data?.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleNavigation = (docId) => {
    navigate(`/appointment/${docId}`);
  };

  return (
    <div className="bg-[#EAE8F9] min-h-[80vh] p-4">
      <p className="pb-3 mt-12 font-medium text-[#41729F] border-b border-[#A7C7E7]">
        My Appointments
      </p>

      <MoveUpOnRender id="my-appointments">
        {appointments.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b border-[#A7C7E7] bg-white rounded-lg shadow-sm p-2"
          >
            <div onClick={() => handleNavigation(item?.docData?._id)}>
              <img
                className="w-32 bg-[#C2B2FA] rounded-lg"
                src={item?.docData?.image}
                alt=""
              />
            </div>

            <div className="flex-1 text-sm text-[#41729F]">
              <p className="font-semibold text-[#41729F]">{item?.docData?.name}</p>
              <p className="text-[#A7C7E7]">{item?.docData?.speciality}</p>
              <p className="text-[#41729F] font-medium mt-1">Address:</p>
              <p className="text-xs">{item?.docData?.address?.line1}</p>
              <p className="text-xs mt-1">
                <span className="text-sm font-medium text-[#41729F]">Date & Time :</span>{" "}
                {slotDateFormat(item?.slotDate)} | {item.slotTime}
              </p>
            </div>

            <div className="flex flex-col gap-2 justify-end">
              {!item.cancelled && item.payment && !item.isCompleted && (
                <button className="text-sm text-white sm:min-w-48 py-2 rounded bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7]">
                  Paid
                </button>
              )}
              {!item.cancelled && !item.payment && !item.isCompleted && (
                <button
                  onClick={() => appointmentRazorpay(item?._id)}
                  className="text-sm sm:min-w-48 py-2 rounded border border-[#A7C7E7] text-[#41729F] hover:bg-gradient-to-r hover:from-[#FFB6C1] hover:to-[#A7C7E7] hover:text-white transition-all duration-300"
                >
                  Pay Online
                </button>
              )}
              {!item.cancelled && !item.isCompleted && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className="text-sm sm:min-w-48 py-2 rounded border border-red-500 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  Cancel Appointment
                </button>
              )}
              {item.cancelled && !item.isCompleted && (
                <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">
                  Appointment Cancelled
                </button>
              )}
              {item.isCompleted && (
                <button className="sm:min-w-48 py-2 border border-green-500 rounded text-green-500">
                  Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </MoveUpOnRender>
    </div>
  );
};

export default MyAppointments;
