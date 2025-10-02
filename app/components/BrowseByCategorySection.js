import { CategoryCard } from "./CategoryCard";

export function BrowseByCategorySection() {
  const categories = [
    {
      title: "Mason",
      description: "Skilled masons for construction and repair work",
      imageUrl: "./img2.png",
      bgColor: "bg-white"
    },
    {
      title: "Plumber",
      description: "Expert plumbers for all your plumbing needs",
      imageUrl: "./img3.png",
      bgColor: "bg-white"
    },
    {
      title: "Security",
      description: "Trained security personnel for your safety",
      imageUrl: "./img4.png",
      bgColor: "bg-white"
    },
    {
      title: "Delivery Boy",
      description: "Reliable delivery personnel for your business",
      imageUrl: "./img5.png",
      bgColor: "bg-white"
    }
  ];

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
            {categories.map((cat) => (
              <CategoryCard
                key={cat.title}
                title={cat.title}
                description={cat.description}
                imageUrl={cat.imageUrl}
                bgColor={cat.bgColor}
              />
            ))}
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
