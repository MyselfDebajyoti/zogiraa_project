"use client";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react";

export default function SocialMedia() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold mb-4 text-gray-900">Connect With Us</h3>
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center">
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
              <Twitter className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <Youtube className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600">
          <p>© 2025 Zogiraa. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
