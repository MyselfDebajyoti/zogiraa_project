"use client";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Menu, Search, Mic } from "lucide-react"; // icons

export default function Navbar() {

  return (
      <header className="bg-white shadow-sm">
        <div className="max-w-11xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left section - Menu and Logo */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                {/* <Menu className="w-6 h-6 text-gray-700" /> */}
                <Sidebar/>
              </button>
              <div className="flex items-center gap-2">
                
              <Image
                  src="/logo_zogira_2.png"
                  alt="Zogiraa Logo"
                  width={100}
                  height={32}
                />
                
               
              </div>
            </div>

            {/* Center section - Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Image
                  src="/icon-park_search.png"
                  alt="Zogiraa Logo"
                  width={24}
                  height={24}
                  />
                </div>
                
                <input
                  type="text"
                  placeholder="Search ........."
                  className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Image
                  src="/mic.png"
                  alt="Zogiraa Logo"
                  width={13.78}
                  height={17.4}
                  />
                </button>
              </div>
            </div>

            {/* Right section - Buttons */}
            <div className="flex items-center gap-3">
              <button className="px-6 py-2 text-[#2A5EB1] font-medium hover:bg-blue-50 rounded-lg">
                Post a job
              </button>
              <button className="px-6 py-2 bg-[#2A5EB1] text-white font-medium rounded-lg hover:bg-blue-700">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </header>
  );
}
