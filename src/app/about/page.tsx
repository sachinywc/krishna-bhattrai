import Image from "next/image";
import Link from "next/link";
import { Leaf, Users, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-[0.2em] text-[#8B6F4E] uppercase mb-6">
            MY STORY
          </p>
          
          <h1 className="text-3xl lg:text-5xl font-serif font-bold text-[#1A1A1A] leading-[1.2] mb-6">
            From Thakurdwara&apos;s Forests to Nepal&apos;s Conservation Frontline
          </h1>
          
          <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
            Born and raised at the edge of what would become Nepal&apos;s largest national park, I returned home after 12 years in tourism to build something meaningful.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 mb-10">
            <Link
              href="#story"
              className="inline-block px-8 py-3 bg-[#1B3B2F] text-white text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#2A4A3F] transition-colors"
            >
              READ OUR STORY
            </Link>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 border border-[#1B3B2F] text-[#1B3B2F] text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1B3B2F] hover:text-white transition-colors"
            >
              PLAN YOUR EXPEDITION
            </Link>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 border border-[#8B6F4E] text-[#8B6F4E] text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#8B6F4E] hover:text-white transition-colors"
            >
              BOOK YOUR STAY
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm">
            <Image
              src="/about/hero-portrait.jpg"
              alt="Krishna Bhattari standing in Thakurdwara's forests"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section id="story" className="w-full px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#8B6F4E]" />
            <p className="text-xs font-medium tracking-[0.2em] text-[#8B6F4E] uppercase">
              ORIGINS
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-base text-gray-700 leading-relaxed">
              Born in the small village of Thakurdwara, Krishna&apos;s childhood was soundtracked by the calls of the wild and the rustle of the Bardia jungle. His family&apos;s deep roots in this soil provided him with an innate understanding of the delicate balance between man and nature.
            </p>
            
            <p className="text-base text-gray-700 leading-relaxed">
              Seeking to broaden his horizons, Krishna spent 12 years navigating the complexities of the global travel industry. This decade-plus journey took him across borders, honing his expertise in hospitality and international tourism standards.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              In 2008, the call of his homeland became undeniable. He returned to Thakurdwara with a singular vision: to found Jungle Heaven. It wasn&apos;t just a lodge; it was designed as a bridge—a way to connect travelers with the raw, untamed beauty of Nepal while ensuring the protection of the land that raised him.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full bg-[#1B3B2F] px-6 py-20 lg:px-12 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-6xl font-serif text-white/20 block mb-6">99</span>
          
          <blockquote className="text-2xl lg:text-3xl font-serif text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
            &quot;The jungle is not just a product I sell. It is the place that made me. And now, I help it make unforgettable memories for others.&quot;
          </blockquote>
          
          <p className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase">
            — KRISHNA BHATTARI
          </p>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="w-full px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-[#E8E0D5] p-8 lg:p-12">
            <h2 className="text-xl lg:text-2xl font-serif font-bold text-[#1A1A1A] mb-8">
              Professional Journey
            </h2>

            <div className="space-y-6">
              {/* Timeline Item */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#8B6F4E]" />
                  <div className="w-px h-full bg-[#E8E0D5] mt-2" />
                </div>
                <div className="pb-6">
                  <p className="text-xs font-bold tracking-[0.15em] text-[#8B6F4E] uppercase mb-1">
                    ORIGIN
                  </p>
                  <p className="text-sm text-gray-700">
                    Born: Thakurdwara, Bardia
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#8B6F4E]" />
                  <div className="w-px h-full bg-[#E8E0D5] mt-2" />
                </div>
                <div className="pb-6">
                  <p className="text-xs font-bold tracking-[0.15em] text-[#8B6F4E] uppercase mb-1">
                    FOUNDATION
                  </p>
                  <p className="text-sm text-gray-700">
                    12 years: Travel & Tourism career
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#8B6F4E]" />
                  <div className="w-px h-full bg-[#E8E0D5] mt-2" />
                </div>
                <div className="pb-6">
                  <p className="text-xs font-bold tracking-[0.15em] text-[#8B6F4E] uppercase mb-1">
                    2008
                  </p>
                  <p className="text-sm text-gray-700">
                    Founded Jungle Heaven
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#8B6F4E]" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] text-[#8B6F4E] uppercase mb-1">
                    PRESENT
                  </p>
                  <p className="text-sm text-gray-700">
                    Hosting 500+ guests, training guides, conservation meetings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy of the Wild */}
      <section className="w-full px-6 py-16 lg:px-12 lg:py-24 bg-[#F0EDE8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.2em] text-[#8B6F4E] uppercase mb-4">
              OUR ETHOS
            </p>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#1A1A1A]">
              Philosophy of the Wild
            </h2>
          </div>

          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-white p-8 border border-[#E8E0D5]">
              <div className="text-[#1B3B2F] mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                Wildlife First
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                True tourism serves conservation. Every expedition is designed to minimize footprint while maximizing the direct benefit to Bardia&apos;s diverse ecosystem.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 border border-[#E8E0D5]">
              <div className="text-[#1B3B2F] mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                Community Prosperity
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The local Tharu families are the true guardians of this land. We ensure that our growth directly translates to opportunity and prosperity for our neighbors.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border border-[#E8E0D5]">
              <div className="text-[#1B3B2F] mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                Authentic Encounters
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We don&apos;t manufacture experiences. We offer raw, wild, and honest Bardia—exactly as it is, curated with deep respect for its unpredictable beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Me Today */}
      <section className="w-full px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#1A1A1A] mb-8">
            What Drives Me Today
          </h2>

          <ul className="space-y-4">
            {[
              "Comprehensive training for next-generation wilderness guides.",
              "Active participation in regional conservation policy meetings.",
              "Hosting critical NGO workshops on habitat restoration.",
              "Sharing conservation stories through podcasts and field journals.",
              "Preserving and promoting the richness of Tharu culture."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="w-8 h-px bg-[#8B6F4E] mt-2 flex-shrink-0" />
                <span className="text-base text-gray-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Life in the Wild - Gallery */}
      <section className="w-full px-6 py-16 lg:px-12 lg:py-24 bg-[#F5F0EB]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.2em] text-[#8B6F4E] uppercase mb-4">
              MOMENTS
            </p>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#1A1A1A]">
              Life in the Wild
            </h2>
          </div>

          {/* Masonry Grid */}
          <div className="space-y-4">
            {/* Row 1: 2 images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/about/moments/fire.jpg"
                  alt="Krishna by the campfire"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/about/moments/jungle-walk.jpg"
                  alt="Walking through the jungle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Row 2: 1 wide image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                src="/about/moments/tharu-dance.jpg"
                alt="Tharu cultural dance performance"
                fill
                className="object-cover"
              />
            </div>

            {/* Row 3: 2 images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/about/moments/meeting.jpg"
                  alt="Conservation meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/about/moments/tiger.jpg"
                  alt="Bengal Tiger close-up"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Row 4: 1 wide image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                src="/about/moments/lodge-exterior.jpg"
                alt="Jungle Heaven lodge exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 py-20 lg:px-12 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] leading-[1.2] mb-8">
            Ready to experience Bardia with me as your guide?
          </h2>
          
          <Link 
            href="/#contact" 
            className="inline-block px-10 py-4 bg-[#1B3B2F] text-white text-xs font-bold tracking-[0.2em] hover:bg-[#2A4A3F] transition-colors shadow-lg"
          >
            BOOK YOUR ADVENTURE
          </Link>
        </div>
      </section>
    </>
  );
}