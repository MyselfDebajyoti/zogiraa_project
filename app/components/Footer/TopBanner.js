"use client";
import { Shield, CheckCircle, Award,Briefcase,Heart, Repeat } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="bg-[#2A5EB1] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 mx-auto mb-0">
  <Briefcase className="w-6 h-6 text-[#2A5EB1]" fill="currentColor" />
</div>
          </div>
          <span className="text-3xl font-bold">Zogiraa</span>
        </div>
        <p className="text-lg mb-4">
          Connecting skilled workers with opportunities worldwide.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-white" fill="currentColor" />
            <span>100% Genuine & Trusted</span>
          </div>
          <div className="flex items-center gap-2">
           <Heart className="w-4 h-4 text-red-600 " fill="currentColor" />
            <span>Creating Social Impact</span>
          </div>
          <div className="flex items-center gap-2">
             <Repeat className="w-4 h-4 text-green-600"/>
            <span>Self-Sustainable Model</span>
          </div>
        </div>
      </div>
    </div>
  );
}
