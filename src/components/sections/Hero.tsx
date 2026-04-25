export default function Hero() {
  return (
    <section className="w-full px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Label */}
            <p className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase">
              Founder · Conservationist · Tiger Country Expert
            </p>

            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#1A1A1A] leading-[1.15]">
              Building Nepal&apos;s Most Authentic Wilderness Experience
            </h1>

            {/* Description */}
            <p className="text-sm lg:text-base text-gray-600 leading-relaxed max-w-md">
              With over 12 years deeply rooted in the Bardia jungle, I bridge the gap between luxury eco-tourism and raw wildlife conservation. Protecting the untamed, one journey at a time.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#1A1A1A] text-white text-xs font-medium tracking-[0.15em] hover:bg-[#2A2A2A] transition-colors">
                MY STORY
              </button>
              <button className="px-6 py-3 border border-[#1A1A1A] text-[#1A1A1A] text-xs font-medium tracking-[0.15em] hover:bg-[#1A1A1A] hover:text-white transition-colors">
                EXPLORE JUNGLE HEAVEN
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto bg-gray-200 rounded-sm overflow-hidden shadow-lg">
              {/* Placeholder for portrait - replace with actual image */}
              <div className="w-full h-full bg-linear-to-b from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Portrait Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}