import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Briefcase,
  PlusCircle,
  Upload,
  Download,
  Users,
  Menu,
  X,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { getJobs } from "../store/Slices/jobSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleExport = () => {
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const blob = new Blob([JSON.stringify(jobs, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "../jobs.json";
    link.click();

    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";

    input.onchange = (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          localStorage.setItem("jobs", JSON.stringify(data));
          dispatch(getJobs());
          alert("Jobs imported successfully!");
        } catch (error) {
          alert("Invalid JSON file!");
        }
      };

      reader.readAsText(file);
    };

    input.click();
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 sm:w-72 lg:w-64 xl:w-72
        bg-slate-50 text-slate-700 flex flex-col shadow-xl border-r border-slate-200
        transform transition-transform duration-300 ease-in-out
        ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        {/* Mobile Close Button */}
        <button
          onClick={closeMobileMenu}
          className="lg:hidden absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-lg transition-colors z-10"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        {/* Logo / Title */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Briefcase
                size={16}
                className="sm:w-[18px] sm:h-[18px] text-white"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-bold truncate">
                Job Tracker
              </h1>
              <p className="text-blue-100 text-xs sm:text-sm opacity-90 truncate">
                Manage your career
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-3 sm:p-4 space-y-1 sm:space-y-2 overflow-y-auto">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
              <Briefcase
                size={16}
                className="sm:w-[18px] sm:h-[18px] text-blue-600 group-hover:text-blue-700"
              />
            </div>
            <span className="font-medium text-sm sm:text-base truncate">
              Dashboard
            </span>
          </Link>

          <Link
            to="/addJob"
            onClick={closeMobileMenu}
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 group-hover:bg-emerald-200 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
              <PlusCircle
                size={16}
                className="sm:w-[18px] sm:h-[18px] text-emerald-600 group-hover:text-emerald-700"
              />
            </div>
            <span className="font-medium text-sm sm:text-base truncate">
              Add Job
            </span>
          </Link>

          <div className="pt-3 sm:pt-4 pb-1 sm:pb-2">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 sm:px-3 mb-1 sm:mb-2">
              Data Management
            </h3>
          </div>

          <button
            onClick={() => {
              handleImport();
              closeMobileMenu();
            }}
            className="w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl hover:bg-amber-50 hover:text-amber-700 transition-all duration-200 text-left group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-amber-100 group-hover:bg-amber-200 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
              <Upload
                size={16}
                className="sm:w-[18px] sm:h-[18px] text-amber-600 group-hover:text-amber-700"
              />
            </div>
            <span className="font-medium text-sm sm:text-base truncate">
              Import JSON
            </span>
          </button>

          <button
            onClick={() => {
              handleExport();
              closeMobileMenu();
            }}
            className="w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 text-left group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
              <Download
                size={16}
                className="sm:w-[18px] sm:h-[18px] text-purple-600 group-hover:text-purple-700"
              />
            </div>
            <span className="font-medium text-sm sm:text-base truncate">
              Export JSON
            </span>
          </button>
        </nav>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-slate-200 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-100 rounded-xl">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
              <Users size={14} className="sm:w-4 sm:h-4 text-slate-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-slate-700 truncate">
                Welcome back!
              </p>
              <p className="text-xs text-slate-500 truncate">
                Ready to track jobs?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
