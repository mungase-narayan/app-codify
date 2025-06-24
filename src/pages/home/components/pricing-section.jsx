import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const pricingLevel = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 5 interviews/month",
        "Basic recording",
        "Email support",
        "Standard integrations",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Most popular for growing teams",
      features: [
        "Unlimited interviews",
        "Advanced recording & analytics",
        "Priority support",
        "All integrations",
        "Custom branding",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "SSO & advanced security",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];
  return (
    <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fadeInUp">
            Simple, Transparent Pricing
          </h2>
          <p
            className="text-lg text-gray-300 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Choose the plan that fits your team size and needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingLevel.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative bg-gray-900/50 border-gray-700 p-6 hover:bg-gray-900/70 transition-all duration-500 transform hover:scale-105 animate-fadeInUp ${
                plan.popular ? "border-purple-500 scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                  Most Popular
                </Badge>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-white mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    : "bg-gray-700 hover:bg-gray-600"
                } transform hover:scale-105 transition-all duration-300`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
