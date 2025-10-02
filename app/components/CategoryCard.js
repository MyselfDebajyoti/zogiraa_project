export function CategoryCard({ title, description, imageUrl, bgColor }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className={`${bgColor} p-3 flex items-center justify-center`}>
        <img src={imageUrl} alt={title} className=" object-cover rounded-lg" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
