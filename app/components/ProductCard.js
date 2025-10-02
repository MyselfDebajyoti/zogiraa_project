export function ProductCard({ name, price, imageUrl }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition">
      {/* Product Image */}
      <div className="h-48 w-full overflow-hidden rounded-t-xl bg-gray-100 mb-4">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : null}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">{price}</p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
