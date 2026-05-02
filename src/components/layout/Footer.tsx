export default function Footer() {
  const links = {
    Links: ["About Us", "Conservation Ethics", "Bardia National Park"],
    Support: ["Privacy Policy", "Bookings", "Contact"]
  };

  return (
    <footer className="w-full px-6 py-12 lg:px-12 border-t border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#1A1A1A]">
              KRISHNA BHATTARI
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
              Stewardship in the heart of Bardia. Dedicated to preserving the majesty of Nepal&apos;s wild west through sustainable hospitality.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
                  {title}
                </h4>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-xs text-gray-600 hover:text-[#1A1A1A] transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#E8E0D5]">
          <p className="text-[10px] text-gray-400 tracking-wide">
            © {new Date().getFullYear()} KRISHNA BHATTARI. STEWARDSHIP IN THE HEART OF BARDIA.
          </p>
        </div>
      </div>
    </footer>
  );
}