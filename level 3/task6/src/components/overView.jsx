import {
  Briefcase,
  DollarSign,
  CheckSquare,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Target,
  Users,
  Star,
  AlertTriangle,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const earningsData = [
  { name: "Jan", earnings: 4000, projects: 8 },
  { name: "Feb", earnings: 3000, projects: 6 },
  { name: "Mar", earnings: 2000, projects: 4 },
  { name: "Apr", earnings: 2780, projects: 5 },
  { name: "May", earnings: 1890, projects: 3 },
  { name: "Jun", earnings: 3200, projects: 7 },
];

const projectStatusData = [
  { name: "Completed", value: 45, color: "#10B981" },
  { name: "In Progress", value: 30, color: "#3B82F6" },
  { name: "Pending", value: 15, color: "#F59E0B" },
  { name: "Overdue", value: 10, color: "#EF4444" },
];

const recentActivities = [
  {
    id: 1,
    type: "project_completed",
    title: "E-commerce Website Redesign completed",
    client: "TechCorp Inc.",
    time: "2 hours ago",
    amount: "$2,500",
    icon: <CheckSquare className="text-green-400" size={16} />,
  },
  {
    id: 2,
    type: "payment_received",
    title: "Payment received for Mobile Banking App",
    client: "FinanceFlow Ltd.",
    time: "1 day ago",
    amount: "$5,000",
    icon: <DollarSign className="text-green-400" size={16} />,
  },
  {
    id: 3,
    type: "project_started",
    title: "New project started: Data Analytics Dashboard",
    client: "DataDriven Co.",
    time: "2 days ago",
    amount: "$3,600",
    icon: <Briefcase className="text-blue-400" size={16} />,
  },
  {
    id: 4,
    type: "deadline_approaching",
    title: "Social Media Platform deadline in 3 days",
    client: "ConnectHub",
    time: "3 days ago",
    amount: "$6,000",
    icon: <AlertTriangle className="text-yellow-400" size={16} />,
  },
  {
    id: 5,
    type: "client_feedback",
    title: "5-star review received",
    client: "StartupXYZ",
    time: "1 week ago",
    amount: null,
    icon: <Star className="text-yellow-400" size={16} />,
  },
];

const upcomingTasks = [
  {
    id: 1,
    task: "Finalize wireframes for Restaurant Management System",
    due: "Today",
    priority: "high",
  },
  {
    id: 2,
    task: "Client presentation for Corporate Brand Identity",
    due: "Tomorrow",
    priority: "medium",
  },
  {
    id: 3,
    task: "Code review for Mobile Banking App",
    due: "Oct 25",
    priority: "low",
  },
  {
    id: 4,
    task: "Deploy Social Media Platform updates",
    due: "Oct 26",
    priority: "urgent",
  },
];

const topClients = [
  { name: "TechCorp Inc.", projects: 8, earnings: "$15,200", status: "active" },
  {
    name: "FinanceFlow Ltd.",
    projects: 5,
    earnings: "$22,400",
    status: "active",
  },
  {
    name: "DataDriven Co.",
    projects: 3,
    earnings: "$8,600",
    status: "pending",
  },
  { name: "ConnectHub", projects: 6, earnings: "$18,900", status: "active" },
];

export default function Overview() {
  const totalEarnings = earningsData.reduce(
    (sum, item) => sum + item.earnings,
    0
  );
  const monthlyGrowth =
    ((earningsData[earningsData.length - 1]?.earnings -
      earningsData[earningsData.length - 2]?.earnings) /
      earningsData[earningsData.length - 2]?.earnings) *
      100 || 0;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-lg">
          <p className="text-gray-300 text-sm">{`${label}`}</p>
          <p className="text-green-400 font-medium">{`Earnings: $${payload[0]?.value}`}</p>
          <p className="text-blue-400 font-medium">{`Projects: ${
            payload[1]?.value || 0
          }`}</p>
        </div>
      );
    }
    return null;
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "high":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "medium":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "low":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Dashboard Overview
          </h1>
          <p className="text-gray-400">
            Welcome back! Here's what's happening with your projects today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                <Briefcase size={20} />
              </div>
              <div className="flex items-center text-green-400 text-sm font-medium">
                <ArrowUpRight size={16} />
                <span>+12%</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">24</h3>
            <p className="text-gray-400 text-sm">Total Projects</p>
            <div className="mt-2 text-xs text-gray-500">
              8 active this month
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white">
                <DollarSign size={20} />
              </div>
              <div className="flex items-center text-green-400 text-sm font-medium">
                <ArrowUpRight size={16} />
                <span>+{monthlyGrowth.toFixed(1)}%</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              ${totalEarnings.toLocaleString()}
            </h3>
            <p className="text-gray-400 text-sm">Total Earnings</p>
            <div className="mt-2 text-xs text-gray-500">$3,200 this month</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white">
                <CheckSquare size={20} />
              </div>
              <div className="flex items-center text-red-400 text-sm font-medium">
                <ArrowDownRight size={16} />
                <span>-2</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">8</h3>
            <p className="text-gray-400 text-sm">Tasks Due</p>
            <div className="mt-2 text-xs text-gray-500">4 due today</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                <Users size={20} />
              </div>
              <div className="flex items-center text-green-400 text-sm font-medium">
                <ArrowUpRight size={16} />
                <span>+3</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">16</h3>
            <p className="text-gray-400 text-sm">Active Clients</p>
            <div className="mt-2 text-xs text-gray-500">3 new this month</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">
                Monthly Earnings & Projects
              </h2>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400">Earnings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-400">Projects</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="earnings"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "#10B981", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="projects"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ fill: "#3B82F6", strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">
              Project Status
            </h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={projectStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {projectStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#F3F4F6",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {projectStatusData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-gray-400 text-xs">{item.name}</span>
                  <span className="text-white text-xs font-medium">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Activity size={20} />
                <span>Recent Activities</span>
              </h2>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-750 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    {activity.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">
                      {activity.title}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-gray-400 text-xs">
                        {activity.client}
                      </span>
                      <span className="text-gray-500 text-xs">•</span>
                      <span className="text-gray-500 text-xs">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                  {activity.amount && (
                    <div className="flex-shrink-0 text-green-400 text-sm font-medium">
                      {activity.amount}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Target size={18} />
                  <span>Upcoming Tasks</span>
                </h3>
                <span className="text-gray-400 text-sm">
                  {upcomingTasks.length} tasks
                </span>
              </div>
              <div className="space-y-3">
                {upcomingTasks.slice(0, 4).map((task) => (
                  <div key={task.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-300 text-sm line-clamp-2">
                        {task.task}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock size={12} className="text-gray-500" />
                        <span className="text-gray-500 text-xs">
                          {task.due}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                            task.priority
                          )}`}
                        >
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                View All Tasks
              </button>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Star size={18} />
                <span>Top Clients</span>
              </h3>
              <div className="space-y-3">
                {topClients.slice(0, 4).map((client, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {client.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        {client.name}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {client.projects} projects
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 text-sm font-medium">
                        {client.earnings}
                      </p>
                      <span
                        className={`inline-block w-2 h-2 rounded-full ${
                          client.status === "active"
                            ? "bg-green-400"
                            : "bg-yellow-400"
                        }`}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #6b7280;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
}
