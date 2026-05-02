export default function Packages() {
  const packages = [
    {
      name: "Single Room",
      subtitle: "PERSONAL SANCTUARY",
      price: 85,
      description: "Ideal for solo travelers seeking quiet reflection after a day in the wild.",
      features: ["Queen Size Bed", "Garden View", "Breakfast Included"]
    },
    {
      name: "Double Room",
      subtitle: "SHARED LUXURY",
      price: 120,
      popular: true,
      description: "Perfect for couples or friends, offering spacious comfort and premium amenities.",
      features: ["Twin or King Setup", "Private Balcony", "Full Board Option"]
    },
    {
      name: "Full Safari",
      subtitle: "ALL-INCLUSIVE",
      price: 250,
      description: "The complete Bardia experience. We handle everything from dawn to dusk.",
      features: ["All Safaris & Walks", "Cultural Performances", "3 Meals & Drinks"]
    }
  ];

  return (
    <section className="w-full bg-[#1B3B2F] px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase mb-4">
            Accommodation
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">
            Curated Safari Packages
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 relative ${pkg.popular ? 'ring-2 ring-[#8B6F4E]' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8B6F4E] text-white px-4 py-1 text-[10px] font-bold tracking-wider">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{pkg.name}</h3>
                <p className="text-xs text-gray-500 tracking-wide mb-4">{pkg.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="text-[#1B3B2F]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <span className="text-3xl font-bold text-[#1A1A1A]">${pkg.price}</span>
                <span className="text-sm text-gray-500">/night</span>
              </div>

              <button className="w-full py-3 bg-[#1B3B2F] text-white text-xs font-bold tracking-[0.15em] hover:bg-[#2A4A3F] transition-colors">
                BOOK NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}