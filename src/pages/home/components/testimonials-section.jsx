import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Engineering Manager",
      company: "TechCorp",
      content:
        "CodeSync has revolutionized our technical interviews. The real-time collaboration and recording features have made our hiring process 3x more efficient.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      content:
        "The built-in voice calling and hint system are game-changers. We can conduct seamless interviews without juggling multiple tools.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Senior Developer",
      company: "DevStudio",
      content:
        "As someone who's been on both sides of technical interviews, CodeSync provides the most natural coding experience I've encountered.",
      rating: 5,
    },
  ];
  return (
    <section
      id="testimonials"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-800/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fadeInUp">
            What Our Customers Say
          </h2>
          <p
            className="text-lg text-gray-300 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Join thousands of companies that trust CodeSync for their technical
            interviews
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`bg-gray-900/50 border-gray-700 p-6 hover:bg-gray-900/70 transition-all duration-500 transform hover:scale-105 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
