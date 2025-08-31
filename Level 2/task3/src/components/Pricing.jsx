import React, { useState } from "react";
import { Check, Zap, Crown, Rocket, ArrowRight, Star } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for individuals and small teams getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Up to 5 team members",
        "10 projects",
        "Basic task management",
        "Email support",
        "Mobile app access",
        "1GB storage",
      ],
      cta: "Get Started Free",
      popular: false,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      name: "Professional",
      icon: Crown,
      description: "Ideal for growing teams that need advanced features",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "Up to 25 team members",
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "Custom workflows",
        "50GB storage",
        "Time tracking",
        "Team collaboration tools",
      ],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      name: "Enterprise",
      icon: Rocket,
      description: "Built for large organizations with enterprise needs",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Advanced security",
        "24/7 phone support",
        "Custom integrations",
        "Unlimited storage",
        "Advanced reporting",
        "SSO & SAML",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-orange-500 to-red-400",
    },
  ];

  return (
    <div
      className="py-20 px-8 bg-gradient-to-br from-slate-50 to-gray-100"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your team. Start free and upgrade as you
            grow.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isAnnual
                  ? "bg-[#4f39f6] text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                isAnnual
                  ? "bg-[#4f39f6] text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={index}
                className={`relative group ${
                  plan.popular ? "transform scale-105 z-10" : "hover:scale-105"
                } transition-all duration-300`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-[#4f39f6] to-[#7c3aed] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${
                    plan.popular
                      ? "border-[#4f39f6]"
                      : "border-gray-100 hover:border-gray-200"
                  } relative overflow-hidden`}
                >
                  {/* Background Gradient Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-gray-900">
                        ${price}
                      </span>
                      <span className="text-gray-600 ml-2">
                        {price === 0 ? "" : "/month"}
                      </span>
                    </div>
                    {isAnnual && plan.monthlyPrice > 0 && (
                      <p className="text-sm text-green-600 font-medium">
                        Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="mb-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mr-3 flex-shrink-0`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#4f39f6] to-[#7c3aed] text-white hover:shadow-xl hover:scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom FAQ/Trust Section */}
      </div>
    </div>
  );
};

export default Pricing;
