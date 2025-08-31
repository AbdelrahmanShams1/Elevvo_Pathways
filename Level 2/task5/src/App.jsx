import React, { useState, useEffect } from "react";
import {
  Cloud,
  Shield,
  Zap,
  Users,
  Star,
  Check,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Globe,
  Lock,
  TrendingUp,
  Smartphone,
  BarChart3,
  Sparkles,
} from "lucide-react";

const CloudSyncLanding = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const features = [
    {
      icon: Cloud,
      title: "Cloud Sync",
      description:
        "Seamlessly sync your data across all devices with 99.9% uptime guarantee",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and security protocols to protect your valuable data",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Experience blazing-fast performance with our optimized cloud infrastructure",
      gradient: "from-yellow-500 to-orange-400",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together in real-time with advanced collaboration tools and permissions",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Get insights into your data usage and team productivity with detailed analytics",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description:
        "Access your data anywhere with our native mobile apps for iOS and Android",
      gradient: "from-pink-500 to-red-400",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Mohamed",
      role: "Junior .NET Developer",
      content:
        "This platform greatly improved my productivity. The clean design and smooth performance make it a joy to use!",
      avatar:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      content:
        "The security and speed are unmatched. Our team productivity increased by 40%.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, StartupHub",
      content:
        "Best investment we made this year. The analytics dashboard provides incredible insights.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "per month",
      description: "Perfect for individuals and small teams",
      features: [
        "10GB Cloud Storage",
        "5 Team Members",
        "Basic Analytics",
        "Mobile Apps",
        "Email Support",
      ],
      gradient: "from-gray-600 to-gray-700",
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "100GB Cloud Storage",
        "25 Team Members",
        "Advanced Analytics",
        "Priority Support",
        "Custom Integrations",
        "Advanced Security",
      ],
      gradient: "from-blue-600 to-purple-600",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited Storage",
        "Unlimited Team Members",
        "White-label Solution",
        "24/7 Phone Support",
        "Custom Development",
        "SLA Guarantee",
      ],
      gradient: "from-purple-600 to-pink-600",
      popular: false,
    },
  ];

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
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "dark bg-gray-900"
          : "bg-gradient-to-br from-slate-50 to-gray-100"
      }`}
    >
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY >= 0
            ? (isDark
                ? "bg-gray-900/95 backdrop-blur-md border-gray-800"
                : "bg-white/95 backdrop-blur-md border-gray-200") +
              " shadow-lg border-b"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                CloudSync Pro
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className={`hover:text-blue-600 transition-colors font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className={`hover:text-blue-600 transition-colors font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className={`hover:text-blue-600 transition-colors font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Pricing
              </a>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
                Start Free Trial
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={`md:hidden ${
              isDark
                ? "bg-gray-900 border-gray-800"
                : "bg-white border-gray-200"
            } border-t`}
          >
            <div className="px-6 py-4 space-y-4">
              <a
                href="#features"
                className={`block hover:text-blue-600 transition-colors font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className={`block hover:text-blue-600 transition-colors font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className={`block hover:text-blue-600 transition-colors font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Pricing
              </a>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    isDark
                      ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <FloatingElement
                key={i}
                delay={i * 200}
                className={`absolute w-2 h-2 bg-white/30 rounded-full`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `translateY(${scrollY * 0.5}px)`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-white to-blue-200 rounded-full"></div>
              </FloatingElement>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto py-32 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg rounded-3xl border border-white/20 mb-6 group hover:scale-110 transition-all duration-500 shadow-2xl">
              <Cloud className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>

            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Sparkles
                className="w-4 h-4 text-pink-300 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                Sync Your World
              </span>
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl mt-2">
                Work Anywhere
              </span>
            </h1>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20"></div>
              <p className="relative text-xl md:text-2xl text-white/90 p-8 leading-relaxed font-light">
                The ultimate cloud collaboration platform that keeps your team
                <span className="text-yellow-300 font-semibold">
                  {" "}
                  productive{" "}
                </span>
                and your data
                <span className="text-pink-300 font-semibold"> secure</span>.
                Start your free trial today.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
              </span>
            </button>

            <button className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 hover:shadow-xl hover:scale-105 transition-all duration-500">
              <span className="flex items-center gap-2">
                Watch Demo
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
              </span>
            </button>
          </div>

          <div className="mt-12 flex md:flex-wrap flex-col md:flex-row justify-center items-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2
              className={`text-5xl font-bold mb-4 ${
                isDark
                  ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
              }`}
            >
              Powerful Features
            </h2>
            <p
              className={`text-xl max-w-2xl mx-auto leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Everything you need to streamline your workflow and boost
              productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
                    isDark
                      ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                      : "bg-white border-gray-100 hover:border-gray-200"
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  />

                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-4 group-hover:text-opacity-80 transition-colors ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`leading-relaxed group-hover:text-opacity-80 transition-colors ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>

                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2
              className={`text-5xl font-bold mb-4 ${
                isDark
                  ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
              }`}
            >
              What Our Customers Say
            </h2>
            <p
              className={`text-xl max-w-2xl mx-auto leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Join thousands of satisfied users who trust CloudSync Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
                  isDark
                    ? "bg-gray-900 border-gray-700"
                    : "bg-white border-gray-100"
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className="absolute top-6 right-6 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-gradient-to-r from-blue-500 to-purple-500"
                  />
                  <div className="ml-4">
                    <h4
                      className={`font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p
                  className={`leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  "{testimonial.content}"
                </p>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2
              className={`text-5xl font-bold mb-4 ${
                isDark
                  ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
              }`}
            >
              Simple Pricing
            </h2>
            <p
              className={`text-xl max-w-2xl mx-auto leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Choose the perfect plan for your team's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 border ${
                  plan.popular
                    ? isDark
                      ? "bg-gradient-to-br from-gray-800 to-gray-900 border-blue-500 ring-2 ring-blue-500/50"
                      : "bg-gradient-to-br from-white to-blue-50 border-blue-300 ring-2 ring-blue-200"
                    : isDark
                    ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                    : "bg-white border-gray-200 hover:border-gray-300"
                } shadow-lg hover:shadow-2xl`}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mb-4 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span
                      className={`text-5xl font-black ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`ml-2 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span
                        className={isDark ? "text-gray-300" : "text-gray-700"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105"
                      : isDark
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  Choose Plan
                </button>

                {plan.popular && (
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.gradient} opacity-5 -z-10`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg rounded-3xl border border-white/20 mb-6 group hover:scale-110 transition-all duration-500 shadow-2xl">
              <Sparkles className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-500" />
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Transform Your Workflow?
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join over 50,000 teams who trust CloudSync Pro to keep their data
            secure and their productivity soaring.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-2">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
              </span>
            </button>

            <button className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 hover:shadow-xl hover:scale-105 transition-all duration-500">
              <span className="flex items-center gap-2">
                Contact Sales
                <Lock className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
              </span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Setup in minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </section>

      <footer
        className={`py-16 border-t ${
          isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <span
                  className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  CloudSync Pro
                </span>
              </div>
              <p
                className={`leading-relaxed mb-6 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                The ultimate cloud collaboration platform for modern teams.
              </p>
              <div className="flex space-x-4">
                <button
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-gray-800 hover:bg-gray-700 text-gray-400"
                      : "bg-white hover:bg-gray-100 text-gray-600"
                  } shadow-md`}
                >
                  <Globe className="w-5 h-5" />
                </button>
                <button
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-gray-800 hover:bg-gray-700 text-gray-400"
                      : "bg-white hover:bg-gray-100 text-gray-600"
                  } shadow-md`}
                >
                  <Users className="w-5 h-5" />
                </button>
                <button
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-gray-800 hover:bg-gray-700 text-gray-400"
                      : "bg-white hover:bg-gray-100 text-gray-600"
                  } shadow-md`}
                >
                  <Star className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <h3
                className={`text-lg font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Product
              </h3>
              <ul className="space-y-4">
                {[
                  "Features",
                  "Pricing",
                  "Enterprise",
                  "API",
                  "Integrations",
                  "Security",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`hover:text-blue-600 transition-colors ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className={`text-lg font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  "About Us",
                  "Careers",
                  "Press",
                  "Blog",
                  "Partners",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`hover:text-blue-600 transition-colors ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className={`text-lg font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Support
              </h3>
              <ul className="space-y-4">
                {[
                  "Help Center",
                  "Documentation",
                  "Community",
                  "Status Page",
                  "Report Bug",
                  "Contact Support",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`hover:text-blue-600 transition-colors ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center ${
              isDark ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <p
              className={`text-sm mb-4 md:mb-0 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              © 2025 CloudSync Pro. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className={`hover:text-blue-600 transition-colors ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={`hover:text-blue-600 transition-colors ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className={`hover:text-blue-600 transition-colors ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CloudSyncLanding;
