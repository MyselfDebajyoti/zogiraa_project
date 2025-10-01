export function BuyGoods() {
    const products = [
    { name: 'Cement', price: '₹500/bag' },
    { name: 'Fevicol', price: '₹200/pack' },
    { name: 'Tool Set', price: '₹700' },
    { name: 'Safety Helmet', price: '₹150' }
  ];

  

  

    return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Products Section */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Buy Goods at Great Prices
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="h-32 bg-gray-100 rounded-md mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                {product.price}
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        </div>
        </div>

    );
}