import { Play } from "lucide-react";

export function TestimonialSection({
  title,
  subtitle,
  description,
  videoThumbnail,
}) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {title} <br />
              <span className="text-[#2A5EB1]">{subtitle}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#2A5EB1] text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              <Play className="w-5 h-5 fill-white" />
              Watch Now
            </button>
          </div>

          {/* Right Video Thumbnail */}
          <div className="relative">
            <img
              src={videoThumbnail}
              alt="Worker testimonial"
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition">
                <Play className="w-8 h-8 text-blue-600 fill-blue-600 ml-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
