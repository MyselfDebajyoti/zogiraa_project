import { LookingCard } from "./LookingCard"; // adjust path

export function WhatAreLookingSection() {
  const cards = [
    {
      title: "Labour Hiring",
      description: "Electricians, Cleaners, Carpenters, Painters",
      price: "Starting ₹750/day",
      imageUrl: "./img9.png",
      bgColor: "bg-white"
    },
    {
      title: "Employer Solutions",
      description: "Bulk hiring, skill verification, project staffing",
      price: "Custom packages",
      imageUrl: "./img6.png",
      bgColor: "bg-white"
    },
    {
      title: "Tools & Equipment",
      description: "Rental tools, machinery, safety equipment",
      price: "From ₹299/week",
      imageUrl: "./img7.png",
      bgColor: "bg-white"
    },
    {
      title: "Skill Training",
      description: "Certified courses, govt. recognized programs",
      price: "From ₹2,999",
      imageUrl:"./img8.png",
      bgColor: "bg-white"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          What Are You Looking For?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <LookingCard
              key={card.title}
              title={card.title}
              description={card.description}
              price={card.price}
              imageUrl={card.imageUrl}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
