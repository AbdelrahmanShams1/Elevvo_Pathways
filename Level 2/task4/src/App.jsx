import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Calendar,
  User,
  Tag,
  ChevronLeft,
  ChevronRight,
  Zap,
  BookOpen,
  Compass,
  Coffee,
  Sparkles,
  ArrowDown,
} from "lucide-react";

const BlogHomepage = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Creative UI Design Ideas",
      category: "Design",
      description:
        "Innovative ways to create attractive and user-friendly interfaces",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=250&fit=crop",
      date: "2024-09-12",
      author: "Layla Mohamed",
    },
    {
      id: 2,
      title: "Safari Adventure in Kenya",
      category: "Travel",
      description:
        "Experience wildlife in Kenya and see animals in their natural habitat",
      image:
        "https://worldnestexplorers.com/wp-content/uploads/2024/11/6-Days-Family-Safari-Adventure-in-Kenya.webp",
      date: "2024-09-10",
      author: "Karim Fouad",
    },
    {
      id: 3,
      title: "The Art of Specialty Coffee",
      category: "Food",
      description:
        "Learn the secrets of making the best coffee with simple tools",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=250&fit=crop",
      date: "2024-09-08",
      author: "Reem Sami",
    },
    {
      id: 4,
      title: "The Impact of Virtual Reality on Education",
      category: "Tech",
      description: "How VR can revolutionize modern learning methods",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop",
      date: "2024-09-05",
      author: "Ahmed Mohamed",
    },
    {
      id: 5,
      title: "Climbing Mount Kilimanjaro",
      category: "Travel",
      description: "An unforgettable adventure to Africa's highest peak",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=250&fit=crop",
      date: "2024-09-02",
      author: "Roshdy Samier",
    },
    {
      id: 6,
      title: "Exquisite French Desserts",
      category: "Food",
      description:
        "Recipes for the most famous French desserts you can make at home",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=250&fit=crop",
      date: "2024-08-30",
      author: "Sara Abdo",
    },
    {
      id: 7,
      title: "Beginner's Guide to Mobile App Development",
      category: "Tech",
      description:
        "Everything you need to start developing Android and iOS apps",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
      date: "2024-08-28",
      author: "Layla Mahmoud",
    },
    {
      id: 8,
      title: "Rome: The City of History and Art",
      category: "Travel",
      description: "Top attractions to visit in the Italian capital Rome",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSn5hhnq-0jhXmv-2YGBR7AyRqCjhEAJn0dw&s",
      date: "2024-08-25",
      author: "Kholod Fouad",
    },
    {
      id: 9,
      title: "Delicious Levantine Cuisine",
      category: "Food",
      description:
        "A selection of famous Levantine dishes with preparation steps",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=250&fit=crop",
      date: "2024-08-22",
      author: "Omar Sami",
    },
    {
      id: 10,
      title: "Python Programming for Beginners",
      category: "Tech",
      description: "Simple steps to learn Python from scratch",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      date: "2024-08-20",
      author: "Amal Abdo",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const postsPerPage = 6;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    {
      key: "All",
      name: "All",
      icon: BookOpen,
      gradient: "from-gray-500 to-gray-600",
    },
    {
      key: "Tech",
      name: "Technology",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      key: "Travel",
      name: "Travel",
      icon: Compass,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      key: "Food",
      name: "Food",
      icon: Coffee,
      gradient: "from-green-500 to-emerald-400",
    },
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString({
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryGradient = (category) => {
    const categoryData = categories.find((cat) => cat.key === category);
    return categoryData ? categoryData.gradient : "from-gray-500 to-gray-600";
  };

  const PostCard = ({ post }) => (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${getCategoryGradient(
          post.category
        )} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 sm:h-52 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <span
            className={`bg-gradient-to-r ${getCategoryGradient(
              post.category
            )} text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg`}
          >
            {post.category === "Tech"
              ? "Technology"
              : post.category === "Travel"
              ? "Travel"
              : post.category === "Food"
              ? "Food"
              : post.category}
          </span>
        </div>

        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getCategoryGradient(
            post.category
          )} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}
        />
      </div>

      <div className="p-4 sm:p-6 lg:p-8 relative">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors leading-tight sm:leading-relaxed">
          {post.title}
        </h3>

        <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed group-hover:text-gray-700 transition-colors text-sm sm:text-base">
          {post.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <User size={14} className="sm:w-4 sm:h-4" />
            <span>{post.author}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Calendar size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">{formatDate(post.date)}</span>
            <span className="sm:hidden">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        <button
          className={`w-full bg-gradient-to-r ${getCategoryGradient(
            post.category
          )} text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base`}
        >
          Read More...
        </button>
      </div>
    </div>
  );

  const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div
      className={`animate-bounce ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: "3s",
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <header className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 sm:grid-cols-10 lg:grid-cols-12 grid-rows-8 sm:grid-rows-10 lg:grid-rows-12 h-full gap-2 sm:gap-4 p-4 sm:p-8">
              {Array.from({
                length:
                  window.innerWidth > 1024
                    ? 144
                    : window.innerWidth > 640
                    ? 100
                    : 64,
              }).map((_, i) => (
                <div
                  key={i}
                  className="border border-white/20 rounded animate-pulse"
                  style={{
                    animationDelay: `${i * 50}ms`,
                    animationDuration: "4s",
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="absolute inset-0">
            {Array.from({ length: window.innerWidth > 768 ? 20 : 10 }).map(
              (_, i) => (
                <FloatingElement
                  key={i}
                  delay={i * 200}
                  className={`absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/30 rounded-full`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `translateY(${scrollY * 0.5}px)`,
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-white to-blue-200 rounded-full"></div>
                </FloatingElement>
              )
            )}
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-white/20 mb-4 sm:mb-6 group hover:scale-110 transition-all duration-500 shadow-2xl">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl sm:rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>

            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
            </div>
            <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2">
              <Sparkles
                className="w-3 h-3 sm:w-4 sm:h-4 text-pink-300 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                Welcome to
              </span>
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl mt-1 sm:mt-2">
                Knowledge's Blog
              </span>
            </h1>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20"></div>
              <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 p-4 sm:p-6 lg:p-8 leading-relaxed font-light">
                Discover a world of ideas and knowledge in technology, travel,
                and food with
                <span className="text-yellow-300 font-semibold">
                  {" "}
                  authentic{" "}
                </span>
                and
                <span className="text-pink-300 font-semibold"> useful </span>
                content that inspires and educates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12">
              <button className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl sm:rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Explore Articles
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>

              <button className="group px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 hover:shadow-xl hover:scale-105 transition-all duration-500 w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Latest Posts
                  <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-500" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Discover Our Articles
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Browse our diverse articles and discover valuable content that
            enriches your knowledge and broadens your horizons.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto mb-6 sm:mb-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.key;

              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`group relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
                    isSelected
                      ? "border-blue-300 ring-2 ring-blue-200"
                      : "border-gray-100"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      category.gradient
                    } opacity-0 group-hover:opacity-5 ${
                      isSelected ? "opacity-5" : ""
                    } rounded-xl sm:rounded-2xl transition-opacity duration-500`}
                  />

                  <div
                    className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${
                      category.gradient
                    } rounded-lg sm:rounded-xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      isSelected ? "scale-110" : ""
                    }`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>

                  <h3
                    className={`text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 group-hover:text-gray-800 transition-colors ${
                      isSelected ? "text-gray-800" : "text-gray-900"
                    }`}
                  >
                    {category.name}
                  </h3>

                  <div
                    className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${
                      category.gradient
                    } opacity-0 group-hover:opacity-20 ${
                      isSelected ? "opacity-10" : ""
                    } transition-opacity duration-300 -z-10 blur-xl`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search
              className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 sm:pr-12 pl-4 sm:pl-6 py-3 sm:py-4 border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {currentPosts.map((post, index) => (
            <div
              key={post.id}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 sm:py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
              <Search size={32} className="sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              No Articles Found
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto px-4">
              We couldn't find any articles matching your search criteria.
            </p>
          </div>
        )}

        {filteredPosts.length > 0 && totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl hover:bg-gray-50 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
              <span>Previous</span>
            </button>

            <div className="flex gap-1 sm:gap-2 overflow-hidden">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let page;
                if (totalPages <= 5) {
                  page = i + 1;
                } else if (currentPage <= 3) {
                  page = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  page = totalPages - 4 + i;
                } else {
                  page = currentPage - 2 + i;
                }

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-8 h-8 sm:min-w-10 sm:h-10 lg:min-w-12 lg:h-12 rounded-lg sm:rounded-xl font-bold transition-all duration-300 text-sm sm:text-base flex items-center justify-center ${
                      currentPage === page
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl hover:bg-gray-50 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              <span>Next</span>
              <ChevronRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        )}

        {filteredPosts.length > 0 && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base">
              <span>
                Showing {startIndex + 1} -{" "}
                {Math.min(startIndex + postsPerPage, filteredPosts.length)} of{" "}
                {filteredPosts.length} articles
              </span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <p className="text-gray-300 text-lg">
            © 2024 Knowledge Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogHomepage;
