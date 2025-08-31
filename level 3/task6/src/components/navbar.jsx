import { useState, useEffect } from "react";
import {
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [user, setUser] = useState({});
  const [searchFocused, setSearchFocused] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  useEffect(() => {
    const data = localStorage.getItem("user");
    setUser(JSON.parse(data));
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    }, observerOptions);

    document.querySelectorAll("[data-aos]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const notifications = [
    { id: 1, text: "New project assigned", time: "2m ago", type: "info" },
    { id: 2, text: "Meeting in 30 minutes", time: "5m ago", type: "warning" },
    {
      id: 3,
      text: "Task completed successfully",
      time: "10m ago",
      type: "success",
    },
  ];

  return (
    <>
      <nav
        className={`fixed z-10 top-0 left-0 right-0  transition-all duration-500 ease-in-out ${"backdrop-blur-lg shadow-lg border-b border-gray-200/50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"}`}
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex items-center space-x-4"
              data-aos="fade-right"
              data-aos-delay="100"
            ></div>

            <div
              className="hidden md:flex flex-1 max-w-md mx-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative w-full group">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur transition-all duration-300 ${
                    searchFocused
                      ? "opacity-100 scale-105"
                      : "opacity-0 scale-95"
                  }`}
                ></div>
                <div className="relative">
                  <h2 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    DashBoard
                  </h2>
                </div>
              </div>
            </div>

            <div
              className="flex items-center space-x-4"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="relative cursor-pointer">
                <button
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 relative group"
                >
                  <Bell
                    size={20}
                    className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300"
                  />
                  {notificationCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                      {notificationCount}
                    </span>
                  )}
                </button>

                <div
                  className={`absolute right-0 mt-2 w-80 bg-gray-800 rounded-xl shadow-2xl  transition-all duration-300 transform origin-top-right ${
                    isNotificationOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="p-4 border-b flex items-center gap-2.5">
                    <Bell className="text-gray-400" />
                    <h3 className="font-semibold text-white">Notifications</h3>
                  </div>
                  <div className="max-h-64 cursor-pointer overflow-y-auto">
                    {notifications.map((notification, index) => (
                      <div
                        key={notification.id}
                        className="p-4 border-b  hover:bg-gray-50 transition-colors duration-200 transform hover:scale-[1.02]"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <p className="text-sm text-white">
                          {notification.text}
                        </p>
                        <p className="text-xs text-gray-300 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t ">
                    <button className="w-full text-center text-sm text-blue-500 hover:text-blue-600 transition-colors duration-200">
                      View all notifications
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <img
                      src={user?.avatar}
                      alt={user?.name}
                      className="w-14 h-10 rounded-full"
                    />
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-gray-600 transition-transform duration-300 ${
                      isProfileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute right-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform origin-top-right ${
                    isProfileOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                        <img
                          src={user?.avatar}
                          alt={user?.name}
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white">{user?.name}</p>
                        <p className="text-sm text-gray-300">{user?.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    {[
                      { icon: User, label: "Profile", href: "/profile" },
                      { icon: Settings, label: "Settings", href: "/settings" },
                      { icon: LogOut, label: "Sign out", href: "/logout" },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={index}
                          to={item.href}
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-white  transition-all duration-200 transform hover:translate-x-1"
                        >
                          <Icon size={16} />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden px-4 pb-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>
      </nav>

      <div className="h-16"></div>

      {(isProfileOpen || isNotificationOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsProfileOpen(false);
            setIsNotificationOpen(false);
          }}
        />
      )}

      <style jsx>{`
        [data-aos] {
          opacity: 0;
          transition-property: opacity, transform;
          transition-duration: 0.6s;
          transition-timing-function: ease-out;
        }

        [data-aos="fade-down"] {
          opacity: 0;
          transform: translateY(-30px);
        }

        [data-aos="fade-right"] {
          opacity: 0;
          transform: translateX(-30px);
        }

        [data-aos="fade-left"] {
          opacity: 0;
          transform: translateX(30px);
        }

        [data-aos="fade-up"] {
          opacity: 0;
          transform: translateY(30px);
        }

        [data-aos].aos-animate {
          opacity: 1;
          transform: translate(0, 0);
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25%);
          }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
