"use client";

import { useState } from "react";
import { Camera, Share2, Sprout, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log("Subscribed:", email);
    setSubscribed(true);
    setEmail("");
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="w-full bg-[#F5F0EB] px-6 py-16 lg:px-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Left Column - Brand */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-serif font-bold tracking-wide text-[#1A1A1A] uppercase">
              KRISHNA BHATTARI
            </h3>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              Dedicated to preserving the wilderness of Bardia National Park and fostering a new generation of conservation-minded travelers.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-[#1B3B2F] transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-5 h-5" />
              </a>
              
              <a 
                href="#" 
                className="p-2 text-gray-600 hover:text-[#1B3B2F] transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5" />
              </a>
              
              <a 
                href="#" 
                className="p-2 text-gray-600 hover:text-[#1B3B2F] transition-colors"
                aria-label="Conservation"
              >
                <Sprout className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle Column - Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-2xl lg:text-3xl font-serif font-bold text-[#1A1A1A]">
              Join the Field Journal
            </h4>
            
            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              Get monthly dispatches on wildlife sightings, conservation updates, and jungle stories.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="pt-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 bg-transparent border-b border-[#D4C4B0] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#1B3B2F] transition-colors"
                  />
                </div>
                
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#1B3B2F] text-white text-xs font-bold tracking-[0.15em] hover:bg-[#2A4A3F] transition-colors flex items-center justify-center gap-2 group"
                >
                  SUBSCRIBE
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Success Message */}
              {subscribed && (
                <p className="mt-3 text-sm text-[#1B3B2F] font-medium">
                  ✨ Thank you for subscribing! Check your inbox soon.
                </p>
              )}
            </form>
          </div>

          {/* Right Column - Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 lg:gap-12">
            {/* Explore Column */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold tracking-[0.15em] text-[#1A1A1A] uppercase">
                EXPLORE
              </h5>
              
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/journal" 
                    className="text-sm text-gray-600 hover:text-[#1B3B2F] transition-colors"
                  >
                    Editorial Journal
                  </a>
                </li>
                <li>
                  <a 
                    href="/archive" 
                    className="text-sm text-gray-600 hover:text-[#1B3B2F] transition-colors"
                  >
                    Archive
                  </a>
                </li>
                <li>
                  <a 
                    href="/conservation" 
                    className="text-sm text-gray-600 hover:text-[#1B3B2F] transition-colors"
                  >
                    Conservation Ethics
                  </a>
                </li>
                <li>
                  <a 
                    href="/field-notes" 
                    className="text-sm text-gray-600 hover:text-[#1B3B2F] transition-colors"
                  >
                    Field Notes
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold tracking-[0.15em] text-[#1A1A1A] uppercase">
                CONNECT
              </h5>
              
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/#contact" 
                    className="text-sm text-gray-600 hover:text-[#1B3B2F] transition-colors"
                  >
                    Contact Me
                  </a>
                </li>
                <li>
                  <a 
                    href="/booking" 
                    className="text-sm text-gray-600 hover:text-[#1B3B2F] transition-colors"
                  >
                    Expedition Booking
                  </a>
                </li>
                <li>
                  <a 
                    href="/media-kit" 
                    className="text-sm text-gray-600 hover:text-[#1B3B2F] transition-colors"
                  >
                    Media Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E8E0D5]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 italic tracking-wide">
              © 2024 KRISHNA BHATTARI. PROTECTING THE UNTAMED.
            </p>
            
            <div className="flex items-center gap-8">
              <a 
                href="/privacy" 
                className="text-xs text-gray-400 hover:text-[#1A1A1A] tracking-wide transition-colors"
              >
                PRIVACY POLICY
              </a>
              <a 
                href="/terms" 
                className="text-xs text-gray-400 hover:text-[#1A1A1A] tracking-wide transition-colors"
              >
                TERMS OF SERVICE
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}