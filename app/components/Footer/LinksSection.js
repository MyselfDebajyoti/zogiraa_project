"use client";
import { Menu, User, CheckCircle, Shield, Award } from "lucide-react";

export default function LinksSection() {
  return (
    <div className="bg-white text-[#2A5EB1] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* At Zogiraa */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Menu className="w-5 h-5" /> At Zogiraa
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Services & Plans</a></li>
              <li><a href="#" className="hover:underline">Media & Testimonials</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
              <li><a href="#" className="hover:underline">How It Works</a></li>
            </ul>
          </div>

          {/* Sign In */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <User className="w-5 h-5" /> Sign In
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Workers</a></li>
              <li><a href="#" className="hover:underline">Employers</a></li>
              <li><a href="#" className="hover:underline">Training / Internship</a></li>
              <li><a href="#" className="hover:underline">Suppliers</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
            </ul>
          </div>

          {/* Knowledge Hub */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Knowledge Hub
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Tips & Benefits for <br/> Employers</a></li>
              <li><a href="#" className="hover:underline">Job Readiness Tips & <br/> Benefits</a></li>
              <li><a href="#" className="hover:underline">Government Schemes,<br/> Worker Rights</a></li>
            </ul>
          </div>

          {/* Important Policies */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" /> Important Policies
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Refund & Cancellation <br/> Policy</a></li>
              <li><a href="#" className="hover:underline">Payment Policy</a></li>
            </ul>
          </div>

          {/* Make Money With Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" /> Make Money With Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Sell on Zogiraa</a></li>
              <li><a href="#" className="hover:underline">Refer & Earn</a></li>
              <li><a href="#" className="hover:underline">Zogiraa Global</a></li>
              <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
              <li><a href="#" className="hover:underline">Advertise Your Brand</a></li>
              <li><a href="#" className="hover:underline">Invest & Earn Profits</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
