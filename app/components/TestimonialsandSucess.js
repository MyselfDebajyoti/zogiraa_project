import { VideoTestimonialCard } from "./VideoTestimonialCard";
import { SuccessStoryCard } from "./SuccessStoryCard";

export default function TestimonialsandSucess() {
  const videoTestimonials = [
    {
      imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=250&fit=crop",
      name: "Ravi Patel",
      role: "Plumber",
      location: "Pune",
      quote: "I found excellent customers for workers. Payment always on time."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop",
      name: "Priya Sharma",
      role: "Employer",
      location: "Bangalore",
      quote: "Hiring verified workers was never this easy."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=250&fit=crop",
      name: "Sita Devi",
      role: "Domestic Worker",
      location: "Mumbai",
      quote: "I got work in 3 days after signing up."
    }
  ];

  const successStories = [
    {
      name: "Rajesh Kumar",
      role: "Electrician",
      story: "Zogiraa has increased my monthly income by 40%. The platform connects me with quality clients who value skilled work."
    },
    {
      name: "Priyanshu Sharma",
      role: "Construction Company Owner",
      story: "The reliable workers was always a challenge. Zogiraa's verification system gives me confidence in every hire."
    },
    {
      name: "Kundan Kumar",
      role: "Contractor Businessman",
      story: "Having a great experience using my project and products... great profit and website is so easy to use!"
    },
    {
      name: "Sita Kumari",
      role: "Cleaner",
      story: "Best platform for finding daily jobs. No commission charges and verified employers make it trustworthy."
    }
  ];

  return (
    <div>
      {/* Featured Testimonial Videos Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Featured Testimonial Videos
            </h2>
            <p className="text-gray-600">
              Watch how Zogiraa transformed lives across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((item, index) => (
              <VideoTestimonialCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <SuccessStoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
