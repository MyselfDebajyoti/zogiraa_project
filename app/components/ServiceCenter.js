export function ServiceCenter() {
    const services = [
    { 
      name: 'Construction Helpers', 
      rating: 3.5, 
      reviews: 124, 
      price: '₹750/day' 
    },
    { 
      name: 'Welding Machine Rental', 
      rating: 4.5, 
      reviews: 89, 
      price: '₹1,299/week' 
    },
    { 
      name: 'Skilled Carpenters', 
      rating: 4.5, 
      reviews: 156, 
      price: '₹950/day' 
    },
    { 
      name: 'Power Tools Bundle', 
      rating: 4, 
      reviews: 165, 
      price: '₹650/day' 
    }
  ];
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <span key={i} className="text-yellow-400">★</span>
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <span key={i} className="text-yellow-400">⯨</span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">★</span>
        );
      }
    }
    return stars;
  };
    return(
        <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-yellow-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Popular Services & Tools
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="h-24 bg-gray-100 rounded-md mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.name}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {renderStars(service.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({service.reviews} reviews)
                  </span>
                </div>
                <p className="text-xl font-bold text-gray-900">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
}