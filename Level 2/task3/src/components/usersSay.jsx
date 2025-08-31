import { Quote, Star } from "lucide-react";

const UsersSay = () => {
  const testimonials = [
    {
      quote:
        "I can't imagine going back to how we worked before TaskFlow. It's transformed our entire workflow and boosted team productivity by 40%.",
      name: "Morgan",
      role: "Operations Director",
      company: "TechCorp",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      rating: 5,
    },
    {
      quote:
        "The productivity boost we've seen is incredible! Our team collaboration has never been smoother and more efficient.",
      name: "Taylor",
      role: "Marketing Manager",
      company: "GrowthLab",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      rating: 5,
    },
    {
      quote:
        "A must-have tool for any growing business. TaskFlow scaled perfectly with our needs and keeps us organized at every level.",
      name: "Riley",
      role: "CEO",
      company: "StartupXYZ",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      rating: 5,
    },
  ];

  return (
    <div
      className="py-20 px-8 bg-gradient-to-br from-white to-gray-50"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our amazing users have
            to say about their TaskFlow experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-to-r from-[#4f39f6] to-[#7c3aed] rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="flex items-center mb-6 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-4 border-gray-100 group-hover:border-[#4f39f6] transition-colors duration-300"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-[#4f39f6]/5 to-[#7c3aed]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4f39f6] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#4f39f6]">4.9/5</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#4f39f6]">10,000+</div>
              <div className="text-gray-600 font-medium">Happy Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#4f39f6]">99%</div>
              <div className="text-gray-600 font-medium">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersSay;
