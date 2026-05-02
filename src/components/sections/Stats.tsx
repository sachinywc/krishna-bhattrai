export default function Stats() {
  const stats = [
    { number: "2008", label: "FOUNDED" },
    { number: "12+", label: "YEARS TOURISM" },
    { number: "08", label: "ACTIVITIES" },
    { number: "30+", label: "ENDANGERED SPECIES" },
  ];

  return (
    <section className="w-full bg-[#1B3B2F] px-6 py-12 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-xs text-gray-300 tracking-[0.15em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}