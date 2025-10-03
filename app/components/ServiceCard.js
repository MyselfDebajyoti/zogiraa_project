export function ServiceCard({ title, rating, reviews, price, imageUrl, bgColor }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
      {/* Image Section */}
      <div className={`${bgColor} p-2 flex items-center justify-center`}>
        <img src={imageUrl} alt={title} className="object-cover rounded-lg " />
      </div>

      {/* Text Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.228L12 18.897l-7.416 4.603L6 15.272 0 9.423l8.332-1.268z" />
            </svg>
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.228L12 18.897l-7.416 4.603L6 15.272 0 9.423l8.332-1.268z" />
            </svg>
          ))}
          <span className="text-sm text-gray-500 ml-1">({reviews} reviews)</span>
        </div>

        <p className="text-blue-600 font-bold text-lg">{price}</p>
      </div>
    </div>
  );
}
