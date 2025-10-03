import { ServiceCard } from "./ServiceCard";

export function PopularServices() {
  const services = [
    {
      title: "Construction Helpers",
      price: "₹750/day",
      imageUrl: "./img18.png",
      rating: 4,
      reviews: 124,
      bgColor: "white"
    },
    {
      title: "Welding Machine Rental",
      price: "₹1,299/week",
      imageUrl: "./img19.png",
      rating: 5,
      reviews: 89,
      bgColor: "white"
    },
    {
      title: "Skilled Carpenters",
      price: "₹950/day",
      imageUrl: "./img20.png",
      rating: 4,
      reviews: 156,
      bgColor: "white"
    },
    {
      title: "Power Tools Bundle",
      price: "₹650/day",
      imageUrl: "./img21.png",
      rating: 4,
      reviews: 166,
      bgColor: "white"
    }
  ];

  return (
    <section className="bg-[#FEFCE8]">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Popular Services & Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              price={service.price}
              imageUrl={service.imageUrl}
              rating={service.rating}
              reviews={service.reviews}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
