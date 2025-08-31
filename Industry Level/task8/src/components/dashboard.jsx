import React, { useState, useEffect } from "react";
import {
  Building2,
  Calendar,
  Clock,
  Briefcase,
  Gift,
  XCircle,
  Plus,
  Search,
  Filter,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../store/Slices/jobSlice";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const jobs = useSelector((state) => state.jobs);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Status configurations
  const statusConfig = {
    Applied: {
      icon: Clock,
      color: "bg-blue-50 border-blue-200 text-blue-700",
      badge: "bg-blue-100 text-blue-700",
    },
    Interviewing: {
      icon: Briefcase,
      color: "bg-amber-50 border-amber-200 text-amber-700",
      badge: "bg-amber-100 text-amber-700",
    },
    Offer: {
      icon: Gift,
      color: "bg-emerald-50 border-emerald-200 text-emerald-700",
      badge: "bg-emerald-100 text-emerald-700",
    },
    Rejected: {
      icon: XCircle,
      color: "bg-red-50 border-red-200 text-red-700",
      badge: "bg-red-100 text-red-700",
    },
  };

  const stats = {
    total: jobs.length,
    applied: jobs.filter((job) => job.status === "Applied").length,
    interviewing: jobs.filter((job) => job.status === "Interviewing").length,
    offers: jobs.filter((job) => job.status === "Offer").length,
    rejected: jobs.filter((job) => job.status === "Rejected").length,
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 to-blue-50 p-3 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto ">
        <div className="mb-6 sm:mb-8">
          {/* Stats Grid */}
          <div className="grid mt-[63px] md:mt-0 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="col-span-2 sm:col-span-3 lg:col-span-1 bg-white rounded-2xl p-4 sm:p-6 shadow-lg shadow-slate-200/50 border border-slate-200/50">
              <div className="flex items-center justify-between">
                <div className="">
                  <p className="text-slate-600 text-xs sm:text-sm font-medium">
                    Total Applications
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-slate-800">
                    {stats.total}
                  </p>
                </div>
                <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg shadow-slate-200/50 border border-slate-200/50">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 mr-2">
                  <p className="text-slate-600 text-xs sm:text-sm font-medium truncate">
                    Applied
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-blue-700">
                    {stats.applied}
                  </p>
                </div>
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg shadow-slate-200/50 border border-slate-200/50">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 mr-2">
                  <p className="text-slate-600 text-xs sm:text-sm font-medium truncate">
                    Interviewing
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-amber-700">
                    {stats.interviewing}
                  </p>
                </div>
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 flex-shrink-0" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg shadow-slate-200/50 border border-slate-200/50">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 mr-2">
                  <p className="text-slate-600 text-xs sm:text-sm font-medium truncate">
                    Offers
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-700">
                    {stats.offers}
                  </p>
                </div>
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 flex-shrink-0" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg shadow-slate-200/50 border border-slate-200/50">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 mr-2">
                  <p className="text-slate-600 text-xs sm:text-sm font-medium truncate">
                    Success Rate
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-indigo-700">
                    {stats.total > 0
                      ? Math.round((stats.offers / stats.total) * 100)
                      : 0}
                    %
                  </p>
                </div>
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search companies or job titles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-white border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm text-sm sm:text-base"
              />
            </div>

            <div className="relative w-full sm:w-auto">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full sm:w-auto pl-9 sm:pl-10 pr-8 py-2.5 sm:py-3 bg-white border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm appearance-none cursor-pointer text-sm sm:text-base"
              >
                <option value="All">All Status</option>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredJobs.map((job) => {
            const config = statusConfig[job.status];
            const StatusIcon = config.icon;

            return (
              <Link to={`/details/${job.id}`} key={job.id} className="group">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden">
                  <div className="p-4 sm:p-6">
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-lg font-bold text-slate-800 truncate">
                            {job.company}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-600 font-medium truncate">
                            {job.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="mb-3 sm:mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold ${config.badge}`}
                      >
                        <StatusIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        {job.status}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-1.5 sm:gap-2 text-slate-600 mb-3 sm:mb-4">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="text-xs sm:text-sm truncate">
                        Applied on {new Date(job.date).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Notes */}
                    {job.notes && (
                      <div className="bg-slate-50 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-slate-200">
                        <p className="text-xs sm:text-sm text-slate-700 line-clamp-2 leading-relaxed">
                          {job.notes}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Action Footer */}
                  <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-t border-slate-200">
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm transition-colors group-hover:translate-x-1 transform duration-200">
                      View Details →
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 sm:w-12 sm:h-12 text-slate-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-700 mb-2">
              No job applications found
            </h3>
            <p className="text-sm sm:text-base text-slate-500 mb-4 sm:mb-6 px-4">
              {searchTerm || statusFilter !== "All"
                ? "Try adjusting your search or filter criteria"
                : "Start by adding your first job application"}
            </p>
            <Link
              to="/addJob"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              Add Your First Job
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
