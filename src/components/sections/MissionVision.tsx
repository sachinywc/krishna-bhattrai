export default function MissionVision() {
  return (
    <section className="w-full px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Mission */}
          <div className="space-y-6">
            <div className="w-12 h-px bg-[#1B3B2F] mb-8" />
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#1A1A1A]">
              Our Mission
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To bridge the gap between world-class tourism and grassroots conservation. We believe that sustainable travel should directly empower the local Tharu community, ensuring that the protection of Bardia&apos;s biodiversity provides a prosperous future for its people.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-6">
            <div className="w-12 h-px bg-[#1B3B2F] mb-8" />
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#1A1A1A]">
              Our Vision
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To establish Bardia National Park as the global gold standard for community-based eco-tourism. We envision a world where the roar of the tiger and the rhythm of local life coexist in a harmonious, protected, and thriving ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}