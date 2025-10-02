export function LookingCard({ title, description, price, imageUrl, bgColor }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
      {/* Image section */}
      <div className={`${bgColor} p-3 flex items-center justify-center`}>
        <img
          src={imageUrl}
          alt={title}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Text content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <p className="text-blue-600 font-semibold">{price}</p>
      </div>
    </div>
  );
}
