import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Heart,
  Globe,
  Clock
} from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { email, message });
    // Reset form
    setEmail('');
    setMessage('');
  };

  const quickLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Help Center', href: '#help' },
    { name: 'API Docs', href: '#api' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'GDPR', href: '#gdpr' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Section - Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Let's Get In Touch
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ready to transform your productivity? We'd love to hear from you. 
                  Send us a message and we'll respond within 24 hours.
                </p>
              </div>

              {/* Contact Form */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right Section - Contact Info & Links */}
            <div className="space-y-12">
              
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">hello@taskflow.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Office</p>
                      <p className="text-gray-300">San Francisco, CA</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-gray-300">Mon-Fri 9AM-6PM PST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                  <div className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
                  <div className="space-y-3">
                    {legalLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Logo and Company Info */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TaskFlow
                </h3>
                <p className="text-gray-400 text-sm">Productivity Redefined</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 ${social.color} hover:scale-110 transition-all duration-300`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-gray-400 flex items-center justify-center lg:justify-end space-x-1">
                <span>© 2025 TaskFlow. Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>in San Francisco</span>
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 py-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates, tips, and productivity insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;