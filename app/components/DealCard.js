export function DealCard({ title, originalPrice, dealPrice, imageUrl, discount }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden rounded-t-xl">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Discount badge above title */}
        {discount && (
          <div className="mb-2">
            <span className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">{discount}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

        {/* Prices */}
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
          <span className="text-red-600 text-xl font-bold">{dealPrice}</span>
        </div>
      </div>
    </div>
  );
}
