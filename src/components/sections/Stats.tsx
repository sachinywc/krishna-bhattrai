export default function Stats() {
  const stats = [
    { number: "12+", label: "YEARS IN BARDIA" },
    { number: "2008", label: "FOUNDED" },
    { number: "500+", label: "GLOBAL GUESTS" },
    { number: "968", label: "KM² PROTECTED" },
  ];

  return (
    <section className="w-full px-6 py-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white px-6 py-8 text-center border border-[#E8E0D5] hover:shadow-md transition-shadow"
            >
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] mb-2">
                {stat.number}
              </h3>
              <p className="text-[10px] text-gray-500 tracking-[0.15em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}