import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Krishna is a legendary host. His knowledge of the tigers is unparalleled, and Jungle Heaven truly lives up to its name. A life-changing experience.",
      author: "Sarah M.",
      location: "United Kingdom"
    },
    {
      text: "Best safari of my life. We saw three tigers in one morning! The hospitality and food at the lodge were beyond my expectations.",
      author: "David Chen",
      location: "Singapore"
    },
    {
      text: "Authentic, professional, and sustainable. Krishna's commitment to the local community makes this stay even more meaningful.",
      author: "Elena Rossi",
      location: "Italy"
    }
  ];

  return (
    <section className="w-full px-6 py-16 lg:px-12 lg:py-24 bg-[#F0EDE8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-2">
            Verified on TripAdvisor
          </p>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#8B6F4E] fill-[#8B6F4E]" />
            ))}
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A]">
            Voices from the Wild
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8">
              <p className="text-sm text-gray-600 italic leading-relaxed mb-6">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}