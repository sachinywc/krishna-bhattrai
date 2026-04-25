export default function Footer() {
  return (
    <footer className="w-full px-6 py-12 lg:px-12 border-t border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1A1A1A]">
              KRISHNA BHATTARI
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Dedicated to preserving the wilderness of Bardia National Park and honoring a new generation of conservation-minded travelers.
            </p>
          </div>

          {/* Middle Column - Explore */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1A1A1A]">
              Explore
            </h4>
            <ul className="space-y-2">
              {["Editorial Journal", "Archive", "Conservation Ethics", "Field Notes"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-xs text-gray-500 hover:text-[#1A1A1A] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Connect */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1A1A1A]">
              Connect
            </h4>
            <ul className="space-y-2">
              {["Instagram", "LinkedIn", "Contact"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-xs text-gray-500 hover:text-[#1A1A1A] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#E8E0D5]">
          <p className="text-[10px] text-gray-400 tracking-wide">
            © 2024 KRISHNA BHATTARI. PROTECTING THE UNTAMED.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] text-gray-400 hover:text-[#1A1A1A] transition-colors">
              Privacy
            </a>
            <a href="#" className="text-[10px] text-gray-400 hover:text-[#1A1A1A] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}