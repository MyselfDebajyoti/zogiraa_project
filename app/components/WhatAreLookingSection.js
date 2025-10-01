export function WhatAreLookingSection() {
    // Add your component logic here
    return (
        <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Are You Looking For?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Labour Hiring Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="h-48 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Labour Hiring</h3>
              <p className="text-sm text-gray-600 mb-4">Electricians, Cleaners, Carpenters, Painters</p>
              <p className="text-blue-600 font-semibold">Starting ₹750/day</p>
            </div>

            {/* Employer Solutions Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="h-48 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Employer Solutions</h3>
              <p className="text-sm text-gray-600 mb-4">Bulk hiring, skill verification, project staffing</p>
              <p className="text-blue-600 font-semibold">Custom packages</p>
            </div>

            {/* Tools & Equipment Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="h-48 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tools & Equipment</h3>
              <p className="text-sm text-gray-600 mb-4">Rental tools, machinery, safety equipment</p>
              <p className="text-blue-600 font-semibold">From ₹299/week</p>
            </div>

            {/* Skill Training Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="h-48 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Skill Training</h3>
              <p className="text-sm text-gray-600 mb-4">Certified courses, govt. recognized programs</p>
              <p className="text-blue-600 font-semibold">From ₹2,999</p>
            </div>
          </div>
        </div>
      </section>
    );
}