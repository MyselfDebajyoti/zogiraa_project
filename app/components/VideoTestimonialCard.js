import { Play } from "lucide-react";

export function VideoTestimonialCard({ imageUrl, name, role, location, quote }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {role} <br /> {location}
        </p>
        <p className="text-sm text-gray-700">"{quote}"</p>
      </div>
    </div>
  );
}
