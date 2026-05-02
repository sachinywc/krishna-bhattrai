import { Truck, PawPrint, Waves, Fish, Footprints, Bike } from "lucide-react";

export default function Experiences() {
  const experiences = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Jeep Safari",
      description: "Traverse the deep heart of Bardia in our open-top vehicles, tracking the elusive Bengal Tiger."
    },
    {
      icon: <PawPrint className="w-6 h-6" />,
      title: "Elephant Safari",
      description: "Experience the jungle from a majestic vantage point, moving silently through tall elephant grass."
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Karnali Rafting",
      description: "Drift down the Karnali river for a peaceful encounter with river dolphins and crocodiles."
    },
    {
      icon: <Fish className="w-6 h-6" />,
      title: "Fishing Tour",
      description: "Try your hand at catching the legendary Golden Mahseer in the pristine mountain waters."
    },
    {
      icon: <Footprints className="w-6 h-6" />,
      title: "Jungle Walk",
      description: "Guided on foot by experts to feel the true pulse of the wilderness and track smaller fauna."
    },
    {
      icon: <Bike className="w-6 h-6" />,
      title: "Bicycle Tour",
      description: "Explore the charming Tharu villages and outskirts of the park at your own rhythmic pace."
    }
  ];

  return (
    <section className="w-full px-6 py-16 lg:px-12 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">
            Curated Experiences
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A]">
            The Wild Unfolds
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 border border-[#E8E0D5] hover:shadow-lg transition-shadow">
              <div className="text-[#1B3B2F] mb-4">
                {exp.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {exp.description}
              </p>
              <button className="text-xs font-medium text-[#1B3B2F] hover:text-[#2A4A3F] flex items-center gap-2">
                LEARN MORE →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}