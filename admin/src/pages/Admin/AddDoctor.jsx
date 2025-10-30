import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";
import MoveUpOnRender from "../../components/MoveUpOnRender";

const initialValues = {
  name: "",
  email: "",
  password: "",
  experience: "1 Year",
  fees: "",
  about: "",
  speciality: "General physician",
  degree: "",
  address1: "",
  address2: "",
};

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [doctorData, setDoctorData] = useState(initialValues);
  const { backendUrl, aToken } = useContext(AdminContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) return toast.error("Image not selected");

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", doctorData.name);
      formData.append("email", doctorData.email);
      formData.append("password", doctorData.password);
      formData.append("experience", doctorData.experience);
      formData.append("fees", Number(doctorData.fees));
      formData.append("about", doctorData.about);
      formData.append("speciality", doctorData.speciality);
      formData.append("degree", doctorData.degree);
      formData.append(
        "address",
        JSON.stringify({
          line1: doctorData.address1,
          line2: doctorData.address2,
        })
      );

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setDocImg(null);
        setDoctorData(initialValues);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <MoveUpOnRender id="admin-adddoctor">
      <form
        onSubmit={handleOnSubmit}
        className="m-5 w-full bg-gradient-to-br from-[#EAE8F9] via-[#C2B2FA]/40 to-[#A7C7E7]/40 rounded-2xl shadow-lg p-8"
      >
        <p className="mb-5 text-2xl font-semibold text-[#41729F]">
          Add New Doctor
        </p>

        <div className="bg-white/70 backdrop-blur-md px-8 py-8 border border-[#A7C7E7]/30 rounded-2xl w-full max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center gap-4 mb-8 text-gray-600">
            <label htmlFor="doc-img">
              <img
                className="w-20 h-20 object-cover bg-[#EAE8F9] border border-[#A7C7E7]/40 rounded-full cursor-pointer shadow-sm hover:scale-105 transition-transform"
                src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                alt="Upload"
              />
            </label>
            <input
              onChange={(e) => setDocImg(e.target.files[0])}
              type="file"
              id="doc-img"
              hidden
            />
            <p className="text-[#41729F] font-medium">
              Upload Doctor <br /> Picture
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-700">
            {/* Left column */}
            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <InputField
                label="Doctor Name"
                name="name"
                value={doctorData.name}
                onChange={handleInputChange}
                placeholder="Enter full name"
                required
              />
              <InputField
                label="Email"
                name="email"
                value={doctorData.email}
                onChange={handleInputChange}
                placeholder="Email address"
                type="email"
                required
              />
              <InputField
                label="Password"
                name="password"
                value={doctorData.password}
                onChange={handleInputChange}
                placeholder="Create password"
                type="password"
                required
              />

              <SelectField
                label="Experience"
                name="experience"
                value={doctorData.experience}
                onChange={handleInputChange}
                options={[
                  "1 Year",
                  "2 Year",
                  "3 Year",
                  "4 Year",
                  "5 Year",
                  "6 Year",
                  "7 Year",
                  "8 Year",
                  "9 Year",
                  "10 Year",
                ]}
              />

              <InputField
                label="Fees"
                name="fees"
                value={doctorData.fees}
                onChange={handleInputChange}
                placeholder="Consultation fees"
                type="number"
                required
              />
            </div>

            {/* Right column */}
            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <SelectField
                label="Speciality"
                name="speciality"
                value={doctorData.speciality}
                onChange={handleInputChange}
                options={[
                  "General physician",
                  "Gynecologist",
                  "Dermatologist",
                  "Pediatricians",
                  "Neurologist",
                  "Gastroenterologist",
                ]}
              />

              <InputField
                label="Education"
                name="degree"
                value={doctorData.degree}
                onChange={handleInputChange}
                placeholder="e.g. MBBS, MD"
                required
              />

              <InputField
                label="Address Line 1"
                name="address1"
                value={doctorData.address1}
                onChange={handleInputChange}
                placeholder="Street address"
                required
              />
              <InputField
                label="Address Line 2"
                name="address2"
                value={doctorData.address2}
                onChange={handleInputChange}
                placeholder="City, State"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-[#41729F] font-medium">About Doctor</p>
            <textarea
              className="w-full px-4 pt-2 border border-[#A7C7E7]/40 focus:border-[#C2B2FA] rounded-xl bg-white/60 outline-none focus:ring-2 focus:ring-[#C2B2FA] transition-all"
              placeholder="Write about doctor..."
              value={doctorData.about}
              onChange={handleInputChange}
              name="about"
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] hover:from-[#C2B2FA] hover:to-[#A7C7E7] transition-all text-white px-10 py-3 mt-6 rounded-full shadow-md font-medium"
          >
            Add Doctor
          </button>
        </div>
      </form>
    </MoveUpOnRender>
  );
};

// Reusable components
const InputField = ({ label, ...props }) => (
  <div className="flex flex-col gap-1">
    <p className="text-[#41729F] font-medium">{label}</p>
    <input
      {...props}
      className="border border-[#A7C7E7]/40 rounded-xl px-3 py-2 bg-white/60 focus:border-[#C2B2FA] outline-none focus:ring-2 focus:ring-[#C2B2FA] transition-all"
    />
  </div>
);

const SelectField = ({ label, options, ...props }) => (
  <div className="flex flex-col gap-1">
    <p className="text-[#41729F] font-medium">{label}</p>
    <select
      {...props}
      className="border border-[#A7C7E7]/40 rounded-xl px-3 py-2 bg-white/60 focus:border-[#C2B2FA] outline-none focus:ring-2 focus:ring-[#C2B2FA] transition-all"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default AddDoctor;
