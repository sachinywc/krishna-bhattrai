import { Coffee, Wifi, Utensils, Wine, Droplets, Trees } from "lucide-react";
import Image from "next/image";

export default function Hospitality() {
    const amenities = [
        { icon: <Coffee className="w-4 h-4" />, label: "Coffee Bar" },
        { icon: <Wifi className="w-4 h-4" />, label: "High-speed Wi-Fi" },
        { icon: <Utensils className="w-4 h-4" />, label: "Room Service" },
        { icon: <Wine className="w-4 h-4" />, label: "Forest Bar" },
        { icon: <Droplets className="w-4 h-4" />, label: "Hot Showers" },
        { icon: <Trees className="w-4 h-4" />, label: "Garden Dining" },
    ];

    return (
        <section className="w-full px-6 py-16 lg:px-12 lg:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">
                                Hospitality
                            </p>
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] mb-6">
                                World-Class Comfort in the Wild
                            </h2>
                            <p className="text-sm text-gray-600 leading-relaxed mb-8">
                                At Jungle Heaven, we pride ourselves on providing the modern comforts you need without sacrificing the raw authenticity of the jungle experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="text-[#1B3B2F]">
                                        {amenity.icon}
                                    </div>
                                    <span className="text-sm text-gray-700">{amenity.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    {/* Right Image */}
                    <div className="relative">
                        <div className="aspect-4/3 w-full overflow-hidden rounded-sm shadow-xl">
                            <Image
                                src="/room.jpg"
                                alt="Luxury Room at Jungle Heaven with King Bed and Jungle View"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}