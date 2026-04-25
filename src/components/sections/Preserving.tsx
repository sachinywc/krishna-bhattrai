import { Sprout, PawPrint, Leaf, Mic, Globe, Users } from "lucide-react";

export default function Preserving() {
  const features = [
    {
      icon: <Sprout className="w-4 h-4" />,
      title: "Eco-Hospitality",
      description: "Defining sustainable luxury through Jungle Heaven, where every stay contributes directly to local reforestation projects."
    },
    {
      icon: <PawPrint className="w-4 h-4" />,
      title: "Tiger Training",
      description: "Specialized tracking programs for international researchers and nature photographers in the heart of Tiger Country."
    },
    {
      icon: <Leaf className="w-4 h-4" />,
      title: "Conservation",
      description: "Active partnership with national parks to monitor biodiversity and implement anti-poaching initiatives."
    },
    {
      icon: <Mic className="w-4 h-4" />,
      title: "Podcast",
      description: "Echoes of the Wild — discussions on conservation with global experts and local indigenous voices."
    },
    {
      icon: <Globe className="w-4 h-4" />,
      title: "National Panels",
      description: "Advocating for sustainable tourism policies at the highest level of Nepal's Ministry of Tourism."
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: "Tharu Culture",
      description: "Empowering the indigenous Tharu community by integrating their wisdom into the modern guest experience."
    }
  ];

  return (
    <section className="w-full px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#1A1A1A] mb-4">
            Preserving the Wild
          </h2>
          <p className="text-sm text-gray-600 max-w-xl leading-relaxed">
            My mission extends beyond hospitality; it&apos;s about creating a sustainable ecosystem where nature and humans thrive together.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="text-[#1B3B2F]">
                {feature.icon}
              </div>
              <h3 className="text-sm font-semibold text-[#1A1A1A]">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}