export default function Partners() {
  const partners = [
    "WWF NEPAL",
    "NTNC",
    "BARDIA NATIONAL PARK",
    "NATIONAL GEOGRAPHIC",
    "ECOTOURISM SOC."
  ];

  return (
    <section className="w-full px-6 py-10 lg:px-12 border-t border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-[10px] lg:text-xs text-gray-400 tracking-[0.15em] font-medium"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}