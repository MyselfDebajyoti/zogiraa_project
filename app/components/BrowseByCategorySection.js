export function BrowseByCategorySection() {
    return (
        <section className="bg-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Browse by Category</h2>
          
          <div className="relative">
            {/* Left Arrow */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100">
              <span className="text-2xl text-gray-600">‹</span>
            </button>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Mason Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="bg-purple-200 p-8 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=200&fit=crop" alt="Mason" className="w-32 h-32 object-cover rounded-lg" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mason</h3>
                  <p className="text-sm text-gray-600">Skilled masons for construction and repair work</p>
                </div>
              </div>

              {/* Plumber Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="bg-orange-100 p-8 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=200&h=200&fit=crop" alt="Plumber" className="w-32 h-32 object-cover rounded-lg" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Plumber</h3>
                  <p className="text-sm text-gray-600">Expert plumbers for all your plumbing needs</p>
                </div>
              </div>

              {/* Security Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="bg-blue-200 p-8 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=200&h=200&fit=crop" alt="Security" className="w-32 h-32 object-cover rounded-lg" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
                  <p className="text-sm text-gray-600">Trained security personnel for your safety</p>
                </div>
              </div>

              {/* Delivery Boy Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="bg-gray-200 p-8 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1591768575959-5c5e79dbe43c?w=200&h=200&fit=crop" alt="Delivery Boy" className="w-32 h-32 object-cover rounded-lg" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery Boy</h3>
                  <p className="text-sm text-gray-600">Reliable delivery personnel for your business</p>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100">
              <span className="text-2xl text-gray-600">›</span>
            </button>
          </div>
        </div>
      </section>
    );
}