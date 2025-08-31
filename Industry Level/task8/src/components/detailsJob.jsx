import { useState } from "react";

import {
  Building2,
  Calendar,
  Clock,
  Briefcase,
  Gift,
  XCircle,
  Edit3,
  Trash2,
  Save,
  X,
  FileText,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { editJob, removeJob } from "../store/Slices/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const JobDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const job = useSelector((state) =>
    state.jobs.find((j) => String(j.id) === String(id))
  );

  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [editFormData, setEditFormData] = useState(job);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const statusConfig = {
    Applied: {
      icon: Clock,
      color: "bg-blue-50 border-blue-200 text-blue-700",
      badge: "bg-blue-100 text-blue-700",
      bgGradient: "from-blue-50 to-blue-100",
    },
    Interviewing: {
      icon: Briefcase,
      color: "bg-amber-50 border-amber-200 text-amber-700",
      badge: "bg-amber-100 text-amber-700",
      bgGradient: "from-amber-50 to-amber-100",
    },
    Offer: {
      icon: Gift,
      color: "bg-emerald-50 border-emerald-200 text-emerald-700",
      badge: "bg-emerald-100 text-emerald-700",
      bgGradient: "from-emerald-50 to-emerald-100",
    },
    Rejected: {
      icon: XCircle,
      color: "bg-red-50 border-red-200 text-red-700",
      badge: "bg-red-100 text-red-700",
      bgGradient: "from-red-50 to-red-100",
    },
  };

  const currentConfig = statusConfig[job.status];
  const StatusIcon = currentConfig?.icon || Briefcase;

  const handleEdit = () => {
    setEditFormData(job);
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editJob(editFormData));

    setIsEditing(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleCancel = () => {
    setEditFormData(job);
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(removeJob(job.id));
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isDeleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 p-6 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Job Application Deleted
          </h2>
          <p className="text-slate-600 mb-6">
            The job application has been successfully removed.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-10 h-10 text-slate-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-700 mb-4">
            Job Not Found
          </h2>
          <p className="text-slate-500 mb-6">
            The job application you're looking for doesn't exist.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 ${
        currentConfig?.bgGradient
          ? `to-${currentConfig.bgGradient.split("to-")[1]}`
          : "to-blue-50"
      } p-6`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          {!isEditing && (
            <div className="flex items-center gap-3">
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl border border-slate-200"
              >
                <Edit3 className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={() => setShowDeleteDialog(true)}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Success Message */}
        {isSaved && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 animate-pulse">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 font-medium">
              Job application updated successfully!
            </span>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/50 overflow-hidden">
          {/* Header Section */}
          <div
            className={`bg-gradient-to-r ${
              currentConfig?.bgGradient || "from-blue-50 to-blue-100"
            } p-8 border-b border-slate-200/50`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-8 h-8 text-slate-700" />
                </div>
                <div>
                  {isEditing ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        name="company"
                        value={editFormData.company}
                        onChange={handleInputChange}
                        className="text-3xl font-bold bg-white rounded-xl px-4 py-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        name="title"
                        value={editFormData.title}
                        onChange={handleInputChange}
                        className="text-xl text-slate-600 bg-white rounded-xl px-4 py-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  ) : (
                    <div>
                      <h1 className="text-3xl font-bold text-slate-800 mb-2">
                        {job.company}
                      </h1>
                      <p className="text-xl text-slate-600 font-medium">
                        {job.title}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div>
                {isEditing ? (
                  <select
                    name="status"
                    value={editFormData.status}
                    onChange={handleInputChange}
                    className="bg-white border border-slate-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                ) : (
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold ${currentConfig?.badge}`}
                  >
                    <StatusIcon className="w-4 h-4" />
                    {job.status}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Application Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Application Details
                  </h3>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-slate-500" />
                      <span className="font-medium text-slate-700">
                        Application Date
                      </span>
                    </div>
                    {isEditing ? (
                      <input
                        type="date"
                        name="date"
                        value={editFormData.date}
                        onChange={handleInputChange}
                        className="w-full bg-white rounded-xl px-4 py-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-slate-600">
                        {new Date(job.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                </div>

                {/* Action Buttons for Edit Mode */}
                {isEditing && (
                  <div className="flex gap-3">
                    <button
                      onClick={handleSave}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-500 hover:bg-slate-600 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Notes Section */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Notes & Updates
                </h3>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  {isEditing ? (
                    <textarea
                      name="notes"
                      value={editFormData.notes}
                      onChange={handleInputChange}
                      rows="8"
                      className="w-full bg-white rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Add any notes about this application..."
                    />
                  ) : (
                    <div>
                      {job.notes ? (
                        <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                          {job.notes}
                        </p>
                      ) : (
                        <p className="text-slate-400 italic">
                          No notes added yet.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Confirmation Dialog */}
        {showDeleteDialog && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Delete Job Application
                </h3>
                <p className="text-slate-600 mb-6">
                  Are you sure you want to delete this job application for{" "}
                  <strong>{job.company}</strong>? This action cannot be undone.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowDeleteDialog(false)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-2xl transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
