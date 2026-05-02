export default function Contact() {
  return (
    <section className="w-full px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] mb-4">
                Plan Your Expedition
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Reach out to Krishna directly for personalized itinerary planning and group bookings. We usually respond within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-transparent border-b border-[#E8E0D5] focus:border-[#1B3B2F] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-transparent border-b border-[#E8E0D5] focus:border-[#1B3B2F] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase mb-2">
                    Check-in Date
                  </label>
                  <input 
                    type="date"
                    className="w-full px-4 py-3 bg-transparent border-b border-[#E8E0D5] focus:border-[#1B3B2F] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase mb-2">
                    Guests
                  </label>
                  <input 
                    type="number" 
                    min="1"
                    placeholder="2"
                    className="w-full px-4 py-3 bg-transparent border-b border-[#E8E0D5] focus:border-[#1B3B2F] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase mb-2">
                  Message
                </label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your interests..."
                  className="w-full px-4 py-3 bg-transparent border-b border-[#E8E0D5] focus:border-[#1B3B2F] outline-none transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="px-8 py-4 bg-[#1B3B2F] text-white text-xs font-bold tracking-[0.15em] hover:bg-[#2A4A3F] transition-colors"
              >
                SEND INQUIRY
              </button>
            </form>
          </div>

          {/* Map & Info */}
          <div className="space-y-8">
            <div className="aspect-4/3 bg-[#D4C4B0] relative">
              {/* Replace with actual map image */}
              <div className="w-full h-full bg-linear-to-b from-[#8B6F4E] to-[#6B5F3E] flex items-center justify-center">
                <span className="text-white text-sm">Map of Bardia</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-bold text-[#1A1A1A] mb-3">The Basecamp</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Thakurdwara, Bardia<br />
                  Lumbini Province, Nepal
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1A1A1A] mb-3">Contact Direct</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  +977 984-XXXXXXX<br />
                  hello@jungleheaven.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}