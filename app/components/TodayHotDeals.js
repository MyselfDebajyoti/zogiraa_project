"use client";
import { Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { DealCard } from "./DealCard"; // import your previously created DealCard component

export function TodayHotDeals() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const deals = [
    { title: "Hire Driver", originalPrice: "₹599", dealPrice: "₹499/day", discount: "20% OFF", imageUrl: "./img10.png" },
    { title: "Hire Plumber", originalPrice: "₹899", dealPrice: "₹750/day", discount: "15% OFF", imageUrl: "./img11.png" },
    { title: "Professional Painters", originalPrice: "₹1,200", dealPrice: "₹950/day", discount: "21% OFF", imageUrl: "./img12.png" },
    { title: "House Cleaning Service", originalPrice: "₹1,200", dealPrice: "₹899/day", discount: "25% OFF", imageUrl: "./img13.png" }
  ];

  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Today's Hot Deals</h2>
          <div className="flex items-center gap-2 text-red-600">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">
              Ends in {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map(deal => <DealCard key={deal.title} {...deal} />)}
        </div>
      </div>
    </section>
  );
}
