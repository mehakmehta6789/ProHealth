import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import MoveUpOnRender from "../components/MoveUpOnRender";

const MyProfile = () => {
  const { backendUrl, token, userData, setUserData, loadUserProfileData } =
    useContext(AppContext);

  const [isEdit, setEdit] = useState(false);
  const [image, setImage] = useState(null);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      if (image) formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        loadUserProfileData();
        setEdit(false);
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    userData && (
      <MoveUpOnRender id="my-profile">
        <div className="max-w-lg flex flex-col gap-4 text-sm p-4 bg-white rounded-xl shadow-md">
          {/* Profile Image */}
          {isEdit ? (
            <label htmlFor="image" className="cursor-pointer">
              <div className="relative inline-block">
                <img
                  className="w-36 h-36 rounded-full opacity-80"
                  src={image ? URL.createObjectURL(image) : userData.image}
                  alt="Profile"
                />
                {!image && (
                  <img
                    className="w-10 absolute bottom-2 right-2"
                    src={assets.upload_icon}
                    alt="Upload"
                  />
                )}
              </div>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image"
                hidden
              />
            </label>
          ) : (
            <img
              className="w-36 h-36 rounded-full"
              src={userData.image}
              alt={userData.name}
            />
          )}

          {/* Name */}
          {isEdit ? (
            <input
              className="bg-gray-50 text-3xl font-medium mt-4 capitalize p-2 rounded"
              value={userData.name}
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p className="font-medium text-3xl text-neutral-800 mt-4 capitalize">
              {userData.name}
            </p>
          )}

          <hr className="bg-gray-300 h-[1px] border-none my-4" />

          {/* Contact Info */}
          <div>
            <p className="text-neutral-500 underline">CONTACT INFORMATION</p>
            <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
              <p className="font-medium">Email:</p>
              <p className="text-blue-500">{userData.email}</p>

              <p className="font-medium">Phone:</p>
              {isEdit ? (
                <input
                  className="bg-gray-100 max-w-[200px] rounded px-2 py-1"
                  value={userData.phone}
                  type="text"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              ) : (
                <p className="text-blue-500">{userData.phone}</p>
              )}

              <p className="font-medium">Address:</p>
              {isEdit ? (
                <div className="flex flex-col gap-1">
                  <input
                    className="bg-gray-50 rounded px-2 py-1"
                    value={userData.address?.line1}
                    type="text"
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                  />
                  <input
                    className="bg-gray-50 rounded px-2 py-1"
                    value={userData.address?.line2}
                    type="text"
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                  />
                </div>
              ) : (
                <p className="text-gray-500">
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>

          {/* Basic Info */}
          <div>
            <p className="text-neutral-500 underline mt-4">BASIC INFORMATION</p>
            <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
              <p className="font-medium">Gender:</p>
              {isEdit ? (
                <select
                  className="bg-gray-100 max-w-[120px] rounded px-2 py-1"
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <p className="text-gray-500">{userData.gender}</p>
              )}

              <p className="font-medium">Birthday:</p>
              {isEdit ? (
                <input
                  className="bg-gray-100 max-w-[150px] rounded px-2 py-1"
                  type="date"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                />
              ) : (
                <p className="text-gray-500">{userData.dob}</p>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            {isEdit ? (
              <button
                type="button"
                onClick={updateUserProfileData}
                className="px-6 py-2 rounded-full border border-primary hover:bg-primary hover:text-white transition duration-150"
              >
                Save Information
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setEdit(true)}
                className="px-6 py-2 rounded-full border border-primary hover:bg-primary hover:text-white transition duration-150"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </MoveUpOnRender>
    )
  );
};

export default MyProfile;
