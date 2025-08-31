import { useState, useEffect } from "react";
import { ChevronRight, Home, User, Briefcase, Menu, X } from "lucide-react";

const initAOS = () => {
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
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  initAOS();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { href: "/", icon: Home, label: "Home", color: "text-blue-500" },
    { href: "/profile", icon: User, label: "Profile", color: "text-green-500" },
    {
      href: "/projects",
      icon: Briefcase,
      label: "Projects",
      color: "text-purple-500",
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 lg:hidden bg-white rounded-lg shadow-lg p-2 hover:bg-gray-50 transition-colors duration-200"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed lg:static top-0 left-0 h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white z-40 shadow-2xl transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${isOpen ? "w-64" : "w-16 lg:w-16"}`}
        data-aos="slide-right"
        data-aos-duration="800"
      >
        <div className="p-6 border-b border-gray-700">
          <div
            className={`flex items-center space-x-3 transition-all duration-300 ${
              !isOpen ? "justify-center" : ""
            }`}
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkVXNFDzoFtNO9N2rCqtppvCKNVKOciaAyA&s"
                  alt="Logo"
                  className="rounded-lg"
                />
              </span>
            </div>
            {isOpen && (
              <h2 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fictional Freelance
              </h2>
            )}
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.href}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <a
                    href={item.href}
                    className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg group relative overflow-hidden ${
                      !isOpen ? "justify-center" : ""
                    }`}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform transition-transform duration-300 ${
                        hoveredItem === index ? "scale-100" : "scale-0"
                      }`}
                      style={{ transformOrigin: "left center" }}
                    />

                    <Icon
                      size={20}
                      className={`${
                        item.color
                      } transition-all duration-300 transform group-hover:scale-110 relative z-10 ${
                        hoveredItem === index ? "animate-pulse" : ""
                      }`}
                    />

                    {isOpen && (
                      <span className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300 relative z-10">
                        {item.label}
                      </span>
                    )}

                    {isOpen && (
                      <ChevronRight
                        size={16}
                        className={`text-gray-400 ml-auto transition-all duration-300 transform group-hover:translate-x-1 group-hover:text-white relative z-10 ${
                          hoveredItem === index ? "rotate-90" : ""
                        }`}
                      />
                    )}

                    {!isOpen && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                        {item.label}
                      </div>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className="absolute bottom-13 left-4 right-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {isOpen ? (
            <div className="text-xs text-gray-400 text-center p-2 bg-gray-800 rounded-lg">
              <div className="flex items-center justify-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Online</span>
              </div>
            </div>
          ) : (
            <div className="w-2 h-2 bg-green-500 rounded-full mx-auto animate-pulse"></div>
          )}
        </div>
      </aside>

      <style jsx>{`
        [data-aos] {
          opacity: 0;
          transition-property: opacity, transform;
          transition-duration: 0.6s;
          transition-timing-function: ease-out;
        }

        [data-aos="fade-in"] {
          opacity: 0;
        }

        [data-aos="fade-up"] {
          opacity: 0;
          transform: translateY(30px);
        }

        [data-aos="fade-down"] {
          opacity: 0;
          transform: translateY(-30px);
        }

        [data-aos="slide-right"] {
          opacity: 0;
          transform: translateX(-100px);
        }

        [data-aos].aos-animate {
          opacity: 1;
          transform: translate(0, 0);
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

export default Sidebar;
