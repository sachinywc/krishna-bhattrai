"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "The Journal", icon: "📖" },
    { name: "Wildlife Archive", icon: "🐯" },
    { name: "Conservation", icon: "" },
    { name: "Expeditions", icon: "🗺️" },
    { name: "Contact", icon: "️" },
  ];

  return (
    <>
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0EB] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left - Logo & Menu */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-1 hover:bg-[#E8E0D5] rounded transition-colors"
            >
              <Menu className="w-5 h-5 text-[#1A1A1A]" />
            </button>
            <span className="text-xs font-medium tracking-[0.2em] uppercase">
              Krishna Bhattari
            </span>
          </div>

          {/* Center - Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-xs font-semibold tracking-wide border-b border-[#1A1A1A] pb-0.5">
              Journal
            </a>
            <a href="#" className="text-xs font-normal tracking-wide text-gray-500 hover:text-[#1A1A1A] transition-colors">
              Archive
            </a>
            <a href="#" className="text-xs font-normal tracking-wide text-gray-500 hover:text-[#1A1A1A] transition-colors">
              Conservation
            </a>
          </div>

          {/* Right - Icon */}
          <button className="p-1.5 rounded-full border border-[#E8E0D5] hover:bg-[#E8E0D5] transition-colors">
            <ChevronRight className="w-4 h-4 text-[#1A1A1A]" />
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Right Sidebar */}
      <aside className={`fixed top-0 right-0 h-full w-80 bg-[#F5F0EB] shadow-xl z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          {/* Close Button */}
          <button 
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 p-1 hover:bg-[#E8E0D5] rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Sidebar Title */}
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-8 mt-2">
            Field Navigation
          </h3>

          {/* Navigation Items */}
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                  index === 0 
                    ? "bg-[#1B3B2F] text-white" 
                    : "text-[#1A1A1A] hover:bg-[#E8E0D5]"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}