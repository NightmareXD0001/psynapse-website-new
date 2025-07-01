
import { useState } from 'react';
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-green-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about MEP 2025 or want to join The Matrix Clan? We'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white/10 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white/10 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white/10 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </GlassCard>

          {/* Contact Info */}
          <div className="space-y-8">
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-4">Connect with us</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-green-400 font-semibold mb-1">Email</h4>
                  <a href="mailto:contact@thematrixclan.com" className="text-gray-300 hover:text-white transition-colors">
                    contact@thematrixclan.com
                  </a>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">Discord</h4>
                  <span className="text-gray-300">@TheMatrixClan</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-4">Individual Clubs</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-400">Matrix</span>
                  <span className="text-gray-300">matrix@thematrixclan.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">Ecomm</span>
                  <span className="text-gray-300">ecomm@thematrixclan.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Psynapse</span>
                  <span className="text-gray-300">psynapse@thematrixclan.com</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-4">Location</h3>
              <p className="text-gray-300">
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
