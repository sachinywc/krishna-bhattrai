import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full px-6 pt-24 pb-16 lg:px-12 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase">
              Founder & Owner · Jungle Heaven
            </p>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#1A1A1A] leading-[1.15]">
              Welcome to Bardia&apos;s Gateway to the Wild
            </h1>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-lg">
              Discover the untamed heart of Nepal. From the majestic Bengal Tigers to the rare One-Horned Rhinoceros, join me in a sanctuary where conservation meets luxury hospitality.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about#story"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1B3B2F] text-white text-xs font-bold tracking-[0.15em] hover:bg-[#2A4A3F] transition-colors"
              >
                DISCOVER MY STORY →
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold tracking-[0.15em] hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                EXPLORE JUNGLE HEAVEN
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full">
            <div className="aspect-[4/5] w-full max-w-md mx-auto relative overflow-hidden bg-gray-200">
              <Image
                src="/hero-portrait.jpg"
                alt="Krishna Bhattari"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority
                quality={85}
              />
            </div>
            {/* Badge */}
            <div className="absolute bottom-8 left-8 bg-[#8B6F4E] text-white px-6 py-3 shadow-lg">
              <p className="text-[10px] tracking-[0.2em] uppercase mb-1">Stewardship</p>
              <p className="text-lg font-serif font-bold">Since 2008</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}