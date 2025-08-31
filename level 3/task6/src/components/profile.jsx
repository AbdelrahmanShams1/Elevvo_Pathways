import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit3,
  Save,
  X,
  Camera,
} from "lucide-react";
import Navbar from "./navbar";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    joinDate: "",
    avatar: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    const defaultUser = {
      name: userData.name || "John Doe",
      email: userData.email || "john.doe@example.com",
      phone: userData.phone || "+1 (555) 123-4567",
      location: userData.location || "New York, NY",
      bio:
        userData.bio ||
        "Software developer passionate about creating amazing user experiences.",
      joinDate: userData.joinDate || "January 2024",
      avatar:
        userData.avatar ||
        "data:image/jpeg;base64,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",
    };
    setUser(defaultUser);
    setEditForm(defaultUser);

    // Save default data to localStorage if not exists
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify(defaultUser));
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setEditForm({ ...user });
  };

  const handleSave = () => {
    setUser(editForm);
    localStorage.setItem("user", JSON.stringify(editForm));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({ ...user });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleInputChange("avatar", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Profile Settings
            </h1>
            <p className="text-gray-400">
              Manage your account information and preferences
            </p>
          </div>

          {/* Main Profile Card */}
          <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
            {/* Cover Section */}
            <div className="h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Profile Content */}
            <div className="px-8 pb-8 mt-5">
              {/* Avatar and Basic Info */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 mb-8">
                <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1 shadow-xl">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                        {user.avatar ? (
                          <img
                            src={
                              "data:image/jpeg;base64,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"
                            }
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <User size={48} className="text-gray-400" />
                        )}
                      </div>
                    </div>
                    {isEditing && (
                      <label className="absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-600 rounded-full p-2 cursor-pointer transition-colors">
                        <Camera size={16} className="text-white" />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleAvatarUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* Name and Title */}
                  <div className="space-y-2">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="text-2xl font-bold bg-transparent border-b-2 border-blue-400 text-white focus:outline-none focus:border-purple-400 transition-colors"
                        placeholder="Your Name"
                      />
                    ) : (
                      <h2 className="text-2xl mt-3 font-bold text-white">
                        {user.name}
                      </h2>
                    )}
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar size={16} />
                      <span>Joined {user.joinDate}</span>
                    </div>
                  </div>
                </div>

                {/* Edit Button */}
                <div className="flex space-x-3 mt-4 md:mt-0">
                  {isEditing ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                      >
                        <Save size={16} />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                      >
                        <X size={16} />
                        <span>Cancel</span>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={handleEdit}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors transform hover:scale-105"
                    >
                      <Edit3 size={16} />
                      <span>Edit Profile</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <User size={20} />
                    <span>Contact Information</span>
                  </h3>

                  {/* Email */}
                  <div className="group">
                    <label className="flex items-center space-x-3 text-gray-300 mb-2">
                      <Mail size={16} />
                      <span>Email Address</span>
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="your.email@example.com"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-700 rounded-lg text-gray-200 border border-gray-600">
                        {user.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label className="flex items-center space-x-3 text-gray-300 mb-2">
                      <Phone size={16} />
                      <span>Phone Number</span>
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editForm.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-700 rounded-lg text-gray-200 border border-gray-600">
                        {user.phone}
                      </p>
                    )}
                  </div>

                  {/* Location */}
                  <div className="group">
                    <label className="flex items-center space-x-3 text-gray-300 mb-2">
                      <MapPin size={16} />
                      <span>Location</span>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.location}
                        onChange={(e) =>
                          handleInputChange("location", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="City, Country"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-700 rounded-lg text-gray-200 border border-gray-600">
                        {user.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bio Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    About Me
                  </h3>

                  {/* Bio */}
                  <div className="group">
                    <label className="text-gray-300 mb-2 block">Bio</label>
                    {isEditing ? (
                      <textarea
                        value={editForm.bio}
                        onChange={(e) =>
                          handleInputChange("bio", e.target.value)
                        }
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                        placeholder="Tell us about yourself..."
                      />
                    ) : (
                      <div className="px-4 py-3 bg-gray-700 rounded-lg text-gray-200 border border-gray-600 min-h-[150px]">
                        {user.bio}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[
                  {
                    label: "Projects",
                    value: "12",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    label: "Tasks Completed",
                    value: "89",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    label: "Team Members",
                    value: "6",
                    color: "from-purple-500 to-pink-500",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 rounded-lg p-4 border border-gray-600"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3`}
                    >
                      <div className="w-6 h-6 bg-white/20 rounded"></div>
                    </div>
                    <h4 className="text-2xl font-bold text-white">
                      {stat.value}
                    </h4>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
