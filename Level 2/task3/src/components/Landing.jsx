import { ArrowRight, Play, Star, Users, Clock } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Trusted by 10,000+ teams
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-[#4f39f6] to-[#7c3aed] bg-clip-text text-transparent">
                  TaskFlow
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform your productivity with our intelligent task management
                platform. Streamline workflows, collaborate seamlessly, and
                achieve more together.
              </p>
            </div>

            <div className="flex items-center space-x-8 py-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#4f39f6]" />
                <span className="text-sm font-medium text-gray-600">
                  10K+ Users
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#4f39f6]" />
                <span className="text-sm font-medium text-gray-600">
                  2M+ Tasks Completed
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="group cursor-pointer bg-gradient-to-r from-[#4f39f6] to-[#7c3aed] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group cursor-pointer bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <p className="text-sm text-gray-500 pt-4">
              ✓ No credit card required ✓ Free 14-day trial ✓ Cancel anytime
            </p>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                className="w-full h-auto rounded-2xl shadow-2xl"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="TaskFlow Dashboard"
              />
            </div>

            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-[#4f39f6] to-[#7c3aed] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>

            <div className="absolute top-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-bounce delay-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Task Complete!</span>
              </div>
            </div>

            <div className="absolute bottom-8 -right-4 bg-white p-4 rounded-xl shadow-lg animate-bounce delay-1000">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">3 new updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
