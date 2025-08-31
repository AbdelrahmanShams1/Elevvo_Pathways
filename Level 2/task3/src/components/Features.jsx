import {
  CheckCircle,
  Users,
  BarChart3,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Smart Task Management",
      description:
        "Create, organize, and prioritize tasks with intelligent categorization and automated sorting.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Seamlessly assign tasks, share progress, and communicate with your team in real-time.",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description:
        "Track productivity with detailed insights, performance metrics, and deadline monitoring.",
      gradient: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <div
      className="features py-20 px-8 bg-gradient-to-br from-slate-50 to-gray-100"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Supercharge your productivity with our comprehensive suite of tools
            designed to keep you organized, focused, and ahead of the curve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <span>Explore All Features</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
