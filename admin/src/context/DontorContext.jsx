// DontorContext.jsx
import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [dToken, setDToken] = useState(
    localStorage.getItem("dToken") || ""
  );
  const [appointments, setAppointments] = useState([]);
  const [dashData, setDashData] = useState([]);
  const [profileData, setProfileData] = useState(false);

  // Helper: Authorization header
  const authHeader = () => ({
    headers: { Authorization: `Bearer ${dToken}` },
  });

  // Get all appointments
  const getAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/appointments`, authHeader());
      if (data.success) setAppointments(data.appointments.reverse());
      else toast.error(data.message);
    } catch (error) {
      console.log("Appointments Error:", error);
      toast.error(error.message || "Something went wrong");
    }
  };

  // Complete an appointment
  const completeAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/doctor/complete-appointment`,
        { appointmentId },
        authHeader()
      );
      if (data.success) {
        getAppointments();
        toast.success(data.message);
      } else toast.error(data.message);
    } catch (error) {
      console.log("Complete Appointment Error:", error);
      toast.error(error.message || "Something went wrong");
    }
  };

  // Cancel an appointment
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/doctor/cancel-appointment`,
        { appointmentId },
        authHeader()
      );
      if (data.success) {
        getAppointments();
        toast.success(data.message);
      } else toast.error(data.message);
    } catch (error) {
      console.log("Cancel Appointment Error:", error);
      toast.error(error.message || "Something went wrong");
    }
  };

  // Get dashboard data
  const getDashData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/dashboard`, authHeader());
      if (data.success) setDashData(data.dashData);
      else toast.error(data.message);
    } catch (error) {
      console.log("Dashboard Error:", error);
      toast.error(error.message || "Something went wrong");
    }
  };

  // Get doctor profile
  const getProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/profile`, authHeader());
      if (data.success) setProfileData(data.profileData);
      else toast.error(data.message);
    } catch (error) {
      console.log("Profile Error:", error);
      toast.error(error.message || "Something went wrong");
    }
  };

  const value = {
    dToken,
    setDToken,
    backendUrl,
    appointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
    dashData,
    getDashData,
    profileData,
    setProfileData,
    getProfileData,
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
