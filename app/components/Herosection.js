"use client";
import Image from "next/image";
import { Menu, Search, Mic } from "lucide-react"; // icons
export default function Herosection() {
  
  return (
   <section className="bg-blue-600">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Find Verified Workers &<br />Quality Tools
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Hire skilled labour, rent equipment, or find your next project –<br />all in one platform.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition">
                  Hire Now
                </button>
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
                  Post a Job
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  Buy Materials & Tools
                </button>
              </div>

              {/* Special Offer */}
              <div className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg">
                Today's Special: Hire Verified Cleaners – ₹899/hour
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/img-1.png"
                alt="Construction workers"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
  );
}