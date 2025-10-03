"use client";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function BottomSection() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Us */}
          <div className="bg-grey-500 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-600">
              <Phone className="w-5 h-5" /> Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-600" />
                <span className="font-semibold">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-600 mt-1" />
                <div>
                  <span className="font-semibold">HQ: Mumbai, Maharashtra</span>
                  <br />
                  <a href="#" className="text-blue-600 text-xs">
                    View State Offices
                  </a>
                </div>
              </li>
              <li>
                <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg w-full justify-center">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Support
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href="mailto:support@zogiraa.com">support@zogiraa.com</a>
              </li>
            </ul>
          </div>

          {/* Subscribe for Updates */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-600">
              <Mail className="w-5 h-5" />
              Subscribe for Updates
            </h3>
            <p className="text-sm mb-4 text-gray-600">
              Stay in the loop with latest job alerts, training info, and success stories
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Mobile number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Experience Zogiraa on Mobile */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-600">
              <Phone className="w-5 h-5" />
              Experience Zogiraa on Mobile
            </h3>
            <p className="text-sm mb-4 text-gray-600">
              Scan the QR to download or visit stores
            </p>
            <div className="bg-white rounded-lg p-4 mb-4 inline-block border-2 border-gray-300">
              <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">QR Code</span>
              </div>
            </div>
            <div className="space-y-2">
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition w-full">
                <span className="text-2xl"></span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-full">
                <span className="text-2xl">▶</span>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="font-semibold">Play Store</div>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
