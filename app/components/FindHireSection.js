import { CheckCircle } from "lucide-react";

export function FindHireSection() {
  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Find & Hire{" "}
              <span className="text-[#2563EB]">
                Verified
                <br />
                Workers
              </span>{" "}
              in Easy Way
            </h2>

            {/* Button pushed to bottom */}
            <button className="flex items-center gap-2 px-8 py-3 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-blue-700 transition w-fit">
              <CheckCircle className="w-5 h-5" />
              Start Hiring Now
            </button>
          </div>

          {/* Right Illustration */}
          <div>
            <img
              src="./img22.png"
              alt="Handshake between employer and worker"
              className="rounded-xl w-[565px] h-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
