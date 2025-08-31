import React, { useState } from "react";
import {
  Building2,
  Briefcase,
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  Gift,
  XCircle,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { addJob } from "../store/Slices/jobSlice";

const AddJob = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    status: "Applied",
    date: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      ...formData,
    };

    dispatch(addJob(newJob));

    console.log("New Job Added:", newJob);

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);

    setFormData({
      company: "",
      title: "",
      status: "Applied",
      date: "",
      notes: "",
    });
  };

  const statusOptions = [
    {
      value: "Applied",
      icon: Clock,
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      value: "Interviewing",
      icon: Briefcase,
      color: "bg-amber-100 text-amber-700 border-amber-200",
    },
    {
      value: "Offer",
      icon: Gift,
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
    {
      value: "Rejected",
      icon: XCircle,
      color: "bg-red-100 text-red-700 border-red-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Add New Job Application
          </h1>
          <p className="text-slate-600">
            Track your job applications with ease
          </p>
        </div>

        {isSubmitted && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 animate-pulse">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 font-medium">
              Job application added successfully!
            </span>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-200/50">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                <Building2 className="w-4 h-4" />
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="e.g., Google, Microsoft, Apple"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-slate-100"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                <Briefcase className="w-4 h-4" />
                Job Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="e.g., Frontend Developer, Product Manager"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-slate-100"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                <CheckCircle className="w-4 h-4" />
                Application Status
              </label>
              <div className="grid grid-cols-2 gap-3">
                {statusOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <label
                      key={option.value}
                      className={`relative cursor-pointer rounded-2xl border-2 p-4 transition-all duration-200 hover:shadow-md ${
                        formData.status === option.value
                          ? option.color
                          : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name="status"
                        value={option.value}
                        checked={formData.status === option.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{option.value}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                <Calendar className="w-4 h-4" />
                Application Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-slate-100"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                <FileText className="w-4 h-4" />
                Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                placeholder="Add any additional information about this application..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-slate-100 resize-none"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Add Job Application
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
