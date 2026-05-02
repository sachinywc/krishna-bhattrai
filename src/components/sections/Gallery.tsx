import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/gallery/tiger.jpg", alt: "Bengal Tiger", span: "row-span-2" },
    { src: "/gallery/elephant.jpg", alt: "Elephant at Sunset" },
    { src: "/gallery/dance.jpg", alt: "Tharu Cultural Dance" },
    { src: "/gallery/lodge.jpg", alt: "Jungle Heaven Lodge" },
    { src: "/gallery/forest.jpg", alt: "Bardia Forest" },
  ];

  return (
    <section className="w-full px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">
            Visual Journal
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A]">
            Moments Frozen in Time
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden ${img.span || ''}`}
            >
              <Image
                src={img.src || `/placeholder-${index + 1}.jpg`}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}