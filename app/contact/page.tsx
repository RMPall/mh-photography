"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-6 font-light">
          Get In Touch
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          I'd love to hear about your photography needs. Fill out the form below or reach out
          directly.
        </p>

        <div className="grid md:grid-cols-[1.5fr,1fr] gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-[0.1em] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-[0.1em] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm uppercase tracking-[0.1em] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-[0.1em] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-12 py-4 bg-black text-white text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-serif mb-6 font-light">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.1em] mb-1">Email</h3>
                    <a
                      href="mailto:hello@7shades.photography"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      hello@7shades.photography
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.1em] mb-1">Phone</h3>
                    <a
                      href="tel:+447123456789"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      +44 7123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.1em] mb-1">Location</h3>
                    <p className="text-gray-600">
                      London, United Kingdom
                      <br />
                      Available for travel worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-sm uppercase tracking-[0.1em] mb-4">Response Time</h3>
              <p className="text-gray-600 text-sm">
                I typically respond to all inquiries within 24-48 hours. Looking forward to hearing
                from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
