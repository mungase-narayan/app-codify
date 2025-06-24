import { Card } from "@/components/ui/card";
import { CheckCircle, Code2, Eye, Lightbulb, Mic, Play } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Everything you need for technical interviews
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto "
            style={{ animationDelay: "0.2s" }}
          >
            Streamline your hiring process with powerful collaboration tools
            designed for developers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: Code2,
              title: "Real-time Collaboration",
              description:
                "Both interviewer and candidate can write code simultaneously. See every keystroke instantly.",
              color: "blue",
              delay: "0s",
            },
            {
              icon: Mic,
              title: "Built-in Voice Calls",
              description:
                "Crystal clear audio communication without leaving the platform. No external tools needed.",
              color: "green",
              delay: "0.1s",
            },
            {
              icon: Lightbulb,
              title: "Smart Hints System",
              description:
                "Guide candidates with contextual hints without giving away the solution completely.",
              color: "purple",
              delay: "0.2s",
            },
            {
              icon: Play,
              title: "Session Recording",
              description:
                "Record entire coding sessions for later review and team discussions.",
              color: "red",
              delay: "0.3s",
            },
            {
              icon: Eye,
              title: "Live Typing Indicators",
              description:
                "See exactly where each person is typing with real-time cursor tracking.",
              color: "yellow",
              delay: "0.4s",
            },
            {
              icon: CheckCircle,
              title: "Multiple Languages",
              description:
                "Support for 20+ programming languages with syntax highlighting and auto-completion.",
              color: "indigo",
              delay: "0.5s",
            },
          ].map((feature) => (
            <Card
              key={feature.title}
              className={`bg-gray-900/50 border-gray-700 p-4 sm:p-6 hover:bg-gray-900/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp group`}
              style={{ animationDelay: feature.delay }}
            >
              <div
                className={`w-10 sm:w-12 h-10 sm:h-12 bg-${feature.color}-600/20 rounded-lg flex items-center justify-center  group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon
                  className={`w-5 sm:w-6 h-5 sm:h-6 text-${feature.color}-400 group-hover:animate-pulse`}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
