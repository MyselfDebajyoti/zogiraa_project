"use client";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function BottomSection() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Us */}
          <div className="bg-[#E5E7EB] rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#2A5EB1]">
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
                  <a href="#" className="text-[#2A5EB1] text-xs">
                    View State Offices
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-600" />
              <button className="bg-[#16A34A] text-white px-4 py-2 rounded-lg justify-center">
                WhatsApp Support
              </button>
            </li>

              <li className="flex items-center gap-2 text-[#2A5EB1]">
                <Mail className="w-4 h-4 text-[#2A5EB1]" />
                <a href="mailto:support@zogiraa.com">support@zogiraa.com</a>
              </li>
            </ul>
          </div>

          {/* Subscribe for Updates */}
          <div className="bg-[#E5E7EB] rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#2A5EB1]">
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
                className="w-full px-4 py-2 rounded-lg bg-[#D1D5DB] border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Mobile number"
                className="w-full px-4 py-2 rounded-lg bg-[#D1D5DB] border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="w-full bg-[#2A5EB1] text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Experience Zogiraa on Mobile */}
          <div className="bg-[#E5E7EB] rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#2A5EB1]">
              <Phone className="w-5 h-5" />
              Experience Zogiraa on Mobile
            </h3>
            <p className="text-sm mb-4 text-gray-600">
              Scan the QR to download or visit stores
            </p>

            {/* QR + Buttons side by side */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* QR Code */}
              <div className="bg-white rounded-lg p-4 border-2 border-gray-300">
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                  <div>
                    <img
                      src="./img27.png"
                      alt="Handshake between employer and worker"
                      className="rounded-xl w-[565px] h-[300px] object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col space-y-3">
                <button
                  className="flex items-center justify-center gap-2 bg-black text-white transition"
                  style={{
                    width: "107.9375px",
                    height: "40px",
                    borderRadius: "8px",
                    opacity: 1,
                  }}
                >
                  <div className="text-left leading-tight">
                    {/* <div className="text-[10px]">Download on the</div> */}
                    <div className="text-xs font-semibold">App Store</div>
                  </div>
                </button>

                <button
                  className="flex items-center justify-center gap-2 bg-green-600 text-white transition hover:bg-green-700"
                  style={{
                    width: "107.9375px",
                    height: "40px",
                    borderRadius: "8px",
                    opacity: 1,
                  }}
                >
                  <span className="text-sm">▶</span>
                  <div className="text-left leading-tight">
                    {/* <div className="text-[10px]">GET IT ON</div> */}
                    <div className="text-xs font-semibold">Play Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}
