
import { useState } from 'react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen py-20 px-4 relative">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_30px,rgba(0,255,65,0.1)_32px)]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_30px,rgba(0,255,65,0.05)_32px)]" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Get in <span className="text-matrix">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about MEP 2025 or want to join The Matrix Clan? We'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-matrix to-green-400 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <GlassCard className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-matrix w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">Send us a message</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-matrix mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-matrix/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-matrix focus:bg-black/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-matrix mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-matrix/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-matrix focus:bg-black/50 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-matrix mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-matrix/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-matrix focus:bg-black/50 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-matrix mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-matrix/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-matrix focus:bg-black/50 transition-all duration-300 resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-matrix to-green-400 text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-matrix/30 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </GlassCard>

          {/* Contact Info */}
          <div className="space-y-6">
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="text-matrix w-6 h-6" />
                <h3 className="text-xl font-bold text-white">Connect with us</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-matrix font-semibold mb-2">General Contact</h4>
                  <a href="mailto:contact@thematrixclan.com" className="text-gray-300 hover:text-white transition-colors">
                    contact@thematrixclan.com
                  </a>
                </div>
                <div>
                  <h4 className="text-matrix font-semibold mb-2">Discord</h4>
                  <span className="text-gray-300">@TheMatrixClan</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-matrix w-6 h-6" />
                <h3 className="text-xl font-bold text-white">Individual Clubs</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-matrix font-semibold">Matrix</span>
                  <span className="text-gray-300 text-sm">matrix@thematrixclan.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-matrix font-semibold">Ecomm</span>
                  <span className="text-gray-300 text-sm">ecomm@thematrixclan.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-matrix font-semibold">Psynapse</span>
                  <span className="text-gray-300 text-sm">psynapse@thematrixclan.com</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-matrix w-6 h-6" />
                <h3 className="text-xl font-bold text-white">Location</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Mount St. Mary School<br />
                Delhi Cantt.<br />
                New Delhi, India
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
