import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Filter,
  Search,
  Grid3X3,
  List,
  Plus,
  Eye,
  Edit3,
  Trash2,
  CheckCircle,
  AlertCircle,
  XCircle,
  Play,
} from "lucide-react";

const Projects = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [projects] = useState([
    {
      id: 1,
      name: "E-commerce Website Redesign",
      client: "TechCorp Inc.",
      status: "in-progress",
      deadline: "2024-09-15",
      progress: 75,
      priority: "high",
      budget: "$12,000",
      description:
        "Complete overhaul of the existing e-commerce platform with modern UI/UX design.",
    },
    {
      id: 2,
      name: "Mobile Banking App",
      client: "FinanceFlow Ltd.",
      status: "completed",
      deadline: "2024-08-30",
      progress: 100,
      priority: "high",
      budget: "$25,000",
      description:
        "Native mobile application for banking services with secure authentication.",
    },
    {
      id: 3,
      name: "Corporate Brand Identity",
      client: "StartupXYZ",
      status: "pending",
      deadline: "2024-10-20",
      progress: 0,
      priority: "medium",
      budget: "$5,000",
      description:
        "Complete brand identity package including logo, colors, and style guide.",
    },
    {
      id: 4,
      name: "Data Analytics Dashboard",
      client: "DataDriven Co.",
      status: "in-progress",
      deadline: "2024-09-25",
      progress: 45,
      priority: "high",
      budget: "$18,000",
      description:
        "Interactive dashboard for real-time data visualization and analytics.",
    },
    {
      id: 5,
      name: "Social Media Platform",
      client: "ConnectHub",
      status: "overdue",
      deadline: "2024-08-15",
      progress: 60,
      priority: "urgent",
      budget: "$30,000",
      description:
        "Full-featured social media platform with messaging and content sharing.",
    },
    {
      id: 6,
      name: "Restaurant Management System",
      client: "FoodieChain",
      status: "in-progress",
      deadline: "2024-09-30",
      progress: 30,
      priority: "medium",
      budget: "$15,000",
      description:
        "Complete restaurant management solution with POS and inventory tracking.",
    },
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-400" size={16} />;
      case "in-progress":
        return <Play className="text-blue-400" size={16} />;
      case "pending":
        return <Clock className="text-yellow-400" size={16} />;
      case "overdue":
        return <XCircle className="text-red-400" size={16} />;
      default:
        return <AlertCircle className="text-gray-400" size={16} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "in-progress":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "overdue":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent":
        return "bg-red-500 text-white";
      case "high":
        return "bg-orange-500 text-white";
      case "medium":
        return "bg-blue-500 text-white";
      case "low":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesStatus =
      filterStatus === "all" || project.status === filterStatus;
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isOverdue = (deadline) => {
    return new Date(deadline) < new Date() && deadline !== "";
  };

  const ProjectCard = ({ project }) => (
    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02] group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>
          <div className="flex items-center space-x-2 text-gray-400 mb-2">
            <User size={14} />
            <span className="text-sm">{project.client}</span>
          </div>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
            project.priority
          )}`}
        >
          {project.priority.toUpperCase()}
        </span>
      </div>

      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(
              project.status
            )}`}
          >
            {getStatusIcon(project.status)}
            <span className="text-xs font-medium capitalize">
              {project.status.replace("-", " ")}
            </span>
          </div>
          <div className="text-sm font-medium text-green-400">
            {project.budget}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-400">
            <Calendar size={14} />
            <span className={isOverdue(project.deadline) ? "text-red-400" : ""}>
              {formatDate(project.deadline)}
            </span>
          </div>
          <span className="text-gray-400">{project.progress}%</span>
        </div>

        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              project.progress === 100
                ? "bg-green-500"
                : project.progress > 50
                ? "bg-blue-500"
                : "bg-yellow-500"
            }`}
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="flex-1 flex items-center justify-center space-x-2 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors">
          <Eye size={14} />
          <span className="text-sm">View</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-2 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors">
          <Edit3 size={14} />
          <span className="text-sm">Edit</span>
        </button>
      </div>
    </div>
  );

  const ProjectTable = () => (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-750">
            <tr className="border-b border-gray-700">
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">
                Project
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">
                Client
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">
                Status
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">
                Progress
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">
                Deadline
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">
                Budget
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">
                Priority
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-gray-700 hover:bg-gray-750 transition-colors"
              >
                <td className="px-6 py-4">
                  <div>
                    <div className="text-white font-medium">{project.name}</div>
                    <div className="text-gray-400 text-sm truncate max-w-xs">
                      {project.description}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <User size={14} className="text-gray-400" />
                    <span className="text-gray-300">{project.client}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div
                    className={`flex items-center space-x-2 px-3 py-1 rounded-full border w-fit ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {getStatusIcon(project.status)}
                    <span className="text-xs font-medium capitalize">
                      {project.status.replace("-", " ")}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          project.progress === 100
                            ? "bg-green-500"
                            : project.progress > 50
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-300 w-8">
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} className="text-gray-400" />
                    <span
                      className={`text-sm ${
                        isOverdue(project.deadline)
                          ? "text-red-400"
                          : "text-gray-300"
                      }`}
                    >
                      {formatDate(project.deadline)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-green-400 font-medium">
                    {project.budget}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                      project.priority
                    )}`}
                  >
                    {project.priority.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-400 hover:text-blue-400 transition-colors">
                      <Eye size={16} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-green-400 transition-colors">
                      <Edit3 size={16} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const stats = {
    total: projects.length,
    completed: projects.filter((p) => p.status === "completed").length,
    inProgress: projects.filter((p) => p.status === "in-progress").length,
    overdue: projects.filter((p) => p.status === "overdue").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Project Management
          </h1>
          <p className="text-gray-400">
            Track and manage your client projects efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Total Projects",
              value: stats.total,
              color: "from-blue-500 to-cyan-500",
              icon: <Grid3X3 size={20} />,
            },
            {
              label: "In Progress",
              value: stats.inProgress,
              color: "from-yellow-500 to-orange-500",
              icon: <Play size={20} />,
            },
            {
              label: "Completed",
              value: stats.completed,
              color: "from-green-500 to-emerald-500",
              icon: <CheckCircle size={20} />,
            },
            {
              label: "Overdue",
              value: stats.overdue,
              color: "from-red-500 to-pink-500",
              icon: <XCircle size={20} />,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 text-white`}
              >
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
              />
            </div>

            <div className="relative">
              <Filter
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-8 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid"
                    ? "bg-blue-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Grid3X3 size={18} />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "table"
                    ? "bg-blue-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <List size={18} />
              </button>
            </div>

            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors transform hover:scale-105">
              <Plus size={20} />
              <span>Add Project</span>
            </button>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <ProjectTable />
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Grid3X3 size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No Projects Found
            </h3>
            <p className="text-gray-400 mb-6">
              {searchTerm || filterStatus !== "all"
                ? "No projects match your current filters."
                : "Get started by creating your first project."}
            </p>
            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors mx-auto">
              <Plus size={20} />
              <span>Create Project</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
