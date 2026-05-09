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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
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
    <section className="w-full px-6 py-16 lg:px-12 lg:py-24">
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

            {/* Netlify Form - Works without plugin! */}
            <form
              name="contact-form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden fields for Netlify detection */}
              <input type="hidden" name="form-name" value="contact-form" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&lsquo;re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14180.123456789!2d81.3485!3d28.5835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995b5f5c5c5c5c5%3A0x0!2sThakurdwara%2C%20Bardia!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
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