import { Play } from "lucide-react";

export default function Podcast() {
  const episodes = [
    {
      title: "The Ghost of the Tall Grass: Tracking Tigers",
      duration: "42 mins",
      category: "Wildlife Special"
    },
    {
      title: "Living with Giants: Elephant Conservation",
      duration: "38 mins",
      category: "Community Voice"
    }
  ];

  return (
    <section className="w-full bg-[#1B3B2F] px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-xs text-[#8B9B8F] tracking-[0.2em] uppercase">
              Latest Conversations
            </p>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white">
              Echoes of the Wild
            </h2>
            <p className="text-sm text-[#A8B8B0] leading-relaxed max-w-md">
              Streaming stories of the Nepalese wilderness, survival, and the intricate balance of the jungle.
            </p>
            <button className="flex items-center gap-3 px-5 py-2.5 bg-white/10 hover:bg-white/20 transition-colors rounded-full">
              <Play className="w-4 h-4 fill-white text-white" />
              <span className="text-xs font-medium tracking-[0.15em] text-white">
                LISTEN ON SPOTIFY
              </span>
            </button>
          </div>

          {/* Right Episodes */}
          <div className="space-y-4">
            {episodes.map((episode, index) => (
              <div
                key={index}
                className="group flex gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer rounded-sm"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 bg-[#2A4A3F] shrink-0 flex items-center justify-center rounded-sm">
                  <Play className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                </div>
                
                {/* Content */}
                <div className="flex-1 py-1">
                  <p className="text-[10px] text-[#8B9B8F] tracking-wide mb-2">
                    EPISODE 0{index + 1}
                  </p>
                  <h3 className="text-white text-sm font-medium mb-2 leading-snug">
                    {episode.title}
                  </h3>
                  <p className="text-[10px] text-[#8B9B8F]">
                    {episode.duration} · {episode.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}