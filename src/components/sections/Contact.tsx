"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const formParams = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") {
        formParams.append(key, value);
      }
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formParams.toString(),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] mb-4">
                Plan Your Expedition
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Reach out to Krishna directly for personalized itinerary planning and group bookings. We usually respond within 24 hours.
              </p>
            </div>

            {/* Netlify Form */}
            <form
              name="contact-form"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden field for Netlify detection */}
              <input type="hidden" name="form-name" value="contact-form" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-[#E8E0D5] focus:border-[#1B3B2F] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-[#E8E0D5] focus:border-[#1B3B2F] outline-none transition-colors"
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
                    name="checkin"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-[#E8E0D5] focus:border-[#1B3B2F] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase mb-2">
                    Guests
                  </label>
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    placeholder="2"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-[#E8E0D5] focus:border-[#1B3B2F] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase mb-2">
                  Message / Special Requests
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your interests..."
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-[#E8E0D5] focus:border-[#1B3B2F] outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button & Status */}
              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-[#1B3B2F] text-white text-xs font-bold tracking-[0.15em] hover:bg-[#2A4A3F] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-sm text-green-600 font-medium">
                    ✅ Message sent successfully! We&apos;ll contact you within 24 hours.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-red-600 font-medium">
                    ❌ Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Right: Map & Info */}
          <div className="space-y-8">
            {/* Real Map */}
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm shadow-lg bg-gray-100">
              <iframe
                src="https://www.google.com/maps/place/Jungle+Heaven+Hotel+And+Cottage/@28.4477739,81.2339398,17z/data=!3m1!4b1!4m9!3m8!1s0x39a274306bb77b69:0x49493639df10e734!5m2!4m1!1i2!8m2!3d28.447774!4d81.2388107!16s%2Fg%2F11gh6bt76d?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Jungle Heaven Location Map"
              />
            </div>

            {/* Contact Info */}
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