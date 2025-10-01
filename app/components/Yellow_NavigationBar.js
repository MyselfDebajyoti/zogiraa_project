"use client";
import { Menu, Search, Mic } from "lucide-react"; // icons

export default function Yellow_NavigationBar() {
  return (
    <nav className="bg-yellow-400 h-[100px] w-full flex items-center">
      <div className="w-full flex items-center justify-between px-8">
        
        {/* Left - First link */}
        <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">
          Construction
        </a>

        {/* Middle - Evenly spaced links */}
        <div className="flex flex-1 items-center justify-evenly">
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Industries</a>
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Electronics</a>
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Retail</a>
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Power</a>
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Skill</a>
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Logistic</a>
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Bank & Insurance</a>
        </div>

        {/* Right - Last link */}
        <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">
          Government jobs
        </a>
      </div>
    </nav>
  );
}
