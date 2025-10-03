import { ProductCard } from "./ProductCard";

export function BuyGoods() {
  const products = [
    { name: "Cement", price: "₹500/bag", imageUrl: "./img14.png" },
    { name: "Fevicol", price: "₹200/pack", imageUrl: "./img15.png" },
    { name: "Tool Set", price: "₹700", imageUrl: "./img16.png" },
    { name: "Safety Helmet", price: "₹150", imageUrl: "./img17.png" }
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Buy Goods at Great Prices
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
