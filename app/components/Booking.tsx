"use client";
import { useState } from 'react';
import { FiCalendar, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheck } from 'react-icons/fi';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'general',
    message: '',
    preferredDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle form submission logic here
    alert('Appointment request submitted successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  

  return (
    <section id='booking' className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF9800] to-[#FF5722] rounded-2xl mb-6">
            <FiCalendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a personalized consultation with our experts to start your educational journey
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            {/* Left side - Visual */}
            <div className="bg-gradient-to-br from-[#FF9800] to-[#FF5722] p-8 text-white hidden md:block">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Why Book With Us?</h3>
                  <ul className="space-y-4">
                    {[
                      'Expert guidance from experienced counselors',
                      'Personalized roadmap for your goals',
                      'Simplified application process',
                      'Dedicated support throughout',
                      'Flexible appointment options'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <FiCheck className="w-5 h-5" />
                        </div>
                        <span className="text-orange-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-sm text-orange-100">
                    <p className="font-semibold">📞 Need immediate help?</p>
                    <p className="mt-1">Call us at +250 785 096 263</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FiUser className="w-4 h-4 text-[#FF9800]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9800] focus:border-[#FF9800] outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <FiMail className="w-4 h-4 text-[#FF9800]" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9800] focus:border-[#FF9800] outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <FiPhone className="w-4 h-4 text-[#FF9800]" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9800] focus:border-[#FF9800] outline-none transition-all"
                      placeholder=" 000-0000"
                    />
                  </div>
                </div>

                {/* Service Type */}
                

                {/* Preferred Date */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FiCalendar className="w-4 h-4 text-[#FF9800]" />
                    Preferred Date (Optional)
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9800] focus:border-[#FF9800] outline-none transition-all"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9800] focus:border-[#FF9800] outline-none transition-all"
                    placeholder="Tell us about your goals or specific questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF9800] to-[#FF5722] text-white font-semibold py-4 px-6 rounded-lg hover:from-[#F57C00] hover:to-[#E64A19] transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Appointment Now
                </button>

                <p className="text-center text-sm text-gray-500">
                  We'll contact you within 24 hours to confirm your appointment
                </p>
              </form>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}