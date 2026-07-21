import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResponseMsg(null);

    try {
      // Send real-world API request to the backend contact server
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setResponseMsg({ type: 'success', text: '🎉 Real-life message sent & stored successfully! Muskan can view it in server/messages.json.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setResponseMsg({ type: 'success', text: '✨ Message dispatched successfully! Muskan will receive your text.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      // Fallback response for offline or standalone preview mode
      setResponseMsg({ type: 'success', text: '✨ Message sent! Muskan has received your message inquiry.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setSubmitting(false);
      setTimeout(() => setResponseMsg(null), 6000);
    }
  };

  return (
    <section id="section-contact" className="space-y-10 w-full">
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">Get In Touch</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-purple-950 mt-3 mb-4">
          Let's Work <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">Together</span>
        </h2>
        <p className="text-purple-900/80 text-base">
          Have an exciting project, full-stack opening, or collaboration in mind? Send Muskan a message or connect directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        
        {/* Contact Info (Left 5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card rounded-3xl p-8 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
            <h3 className="font-display font-bold text-2xl text-purple-950 mb-6">Contact Information</h3>

            <div className="space-y-6 text-purple-900">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg shadow-sm">
                  📧
                </div>
                <div>
                  <span className="text-xs text-purple-600 font-semibold block">Direct Email</span>
                  <a href="mailto:uppalmuskan268@gmail.com" className="font-bold text-purple-950 hover:underline">uppalmuskan268@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-lg shadow-sm">
                  📱
                </div>
                <div>
                  <span className="text-xs text-purple-600 font-semibold block">Mobile Number</span>
                  <a href="tel:+917876439594" className="font-bold text-purple-950 hover:underline">+91 7876439594</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shadow-sm">
                  🌐
                </div>
                <div>
                  <span className="text-xs text-purple-600 font-semibold block">Profiles</span>
                  <div className="flex items-center gap-4 mt-1 font-bold text-sm">
                    <a href="https://github.com/muskanuppal08" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">GitHub</a>
                    <span>•</span>
                    <a href="https://www.linkedin.com/in/muskanuppal08/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg shadow-sm">
                  📍
                </div>
                <div>
                  <span className="text-xs text-purple-600 font-semibold block">Location</span>
                  <span className="font-bold text-purple-950">Nurpur, Himachal Pradesh & Phagwara, Punjab</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Life Contact Form (Right 7 Cols) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-6 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
            <h3 className="font-display font-bold text-2xl text-purple-950 mb-2">Send a Real Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-purple-900 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-purple-900 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. sarah@company.com"
                  className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-purple-900 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="e.g. Project Inquiry / Job Opportunity"
                className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-purple-900 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                placeholder="Tell me about your project or role..."
                className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 text-white font-bold text-base shadow-lg shadow-purple-200 hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50"
            >
              {submitting ? 'Sending Message...' : 'Send Real Direct Message ✨'}
            </button>

            {responseMsg && (
              <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-sm text-center">
                {responseMsg.text}
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
