import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Clock,
  Lightbulb,
  Mic,
  Play,
  Star,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Code Together.
            <span className="bg-gradient-to-r ml-6 from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Interview Better.
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            The ultimate platform for technical interviews. Real-time
            collaborative coding, built-in voice calls, and session recordings
            that make hiring developers seamless.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-gray-600 hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Watch Demo
              <Play className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
            </Button>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-gray-400 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border border-gray-400 transform transition-all duration-500 hover:scale-110`}
                    style={{
                      animationDelay: `${i * 200}ms`,
                    }}
                  ></div>
                ))}
              </div>
              <span className="text-sm">Trusted by 500+ companies</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 fill-yellow-400 text-yellow-400 transform transition-all duration-300 hover:scale-125`}
                />
              ))}
              <span className="text-sm ml-2">4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* Code Editor Mockup */}
        <div
          className={`relative max-w-5xl mx-auto transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-20 opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            {/* Editor Header */}
            <div className="bg-gray-800/80 px-4 sm:px-6 py-4 border-b border-gray-700">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div
                      className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                  <span className="text-gray-300 text-sm">
                    interview-session.js
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    <span className="text-sm">Live</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">2 users</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                  >
                    <Mic className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Voice Call</span>
                    <span className="sm:hidden">Call</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Editor Content */}
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
              <div className="space-y-2 min-w-max">
                <div className="flex animate-fadeInUp">
                  <span className="text-gray-500 w-6 sm:w-8 flex-shrink-0">
                    1
                  </span>
                  <span className="text-purple-400">function</span>
                  <span className="text-white ml-2">twoSum</span>
                  <span className="text-yellow-400">(</span>
                  <span className="text-blue-400">nums</span>
                  <span className="text-white">,</span>
                  <span className="text-blue-400 ml-2">target</span>
                  <span className="text-yellow-400">)</span>
                  <span className="text-white ml-2">{`{`}</span>
                </div>
                <div
                  className="flex animate-fadeInUp"
                  style={{ animationDelay: "0.2s" }}
                >
                  <span className="text-gray-500 w-6 sm:w-8 flex-shrink-0">
                    2
                  </span>
                  <span className="text-gray-400 ml-4">
                    // Interviewer typing...
                  </span>
                  <div className="w-2 h-4 bg-blue-400 ml-2 animate-pulse"></div>
                </div>
                <div
                  className="flex animate-fadeInUp"
                  style={{ animationDelay: "0.4s" }}
                >
                  <span className="text-gray-500 w-6 sm:w-8 flex-shrink-0">
                    3
                  </span>
                  <span className="text-purple-400 ml-4">const</span>
                  <span className="text-white ml-2">map</span>
                  <span className="text-white ml-2">=</span>
                  <span className="text-purple-400 ml-2">new</span>
                  <span className="text-yellow-400 ml-2">Map</span>
                  <span className="text-yellow-400">();</span>
                </div>
                <div
                  className="flex animate-fadeInUp"
                  style={{ animationDelay: "0.6s" }}
                >
                  <span className="text-gray-500 w-6 sm:w-8 flex-shrink-0">
                    4
                  </span>
                  <span className="text-gray-400 ml-4">
                    // Candidate: What should I do next?
                  </span>
                </div>
                <div
                  className="flex animate-fadeInUp"
                  style={{ animationDelay: "0.8s" }}
                >
                  <span className="text-gray-500 w-6 sm:w-8 flex-shrink-0">
                    5
                  </span>
                  <span className="text-white ml-4">{`}`}</span>
                </div>
              </div>
            </div>

            {/* Chat/Hints Panel */}
            <div className="bg-gray-800/50 border-t border-gray-700 p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Lightbulb className="w-4 h-4 animate-pulse" />
                  <span className="text-sm">Hint available</span>
                </div>
                <div className="flex items-center gap-2 text-red-400">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                  <span className="text-sm">Recording</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Floating elements */}
          <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-purple-600 text-white p-2 sm:p-3 rounded-lg shadow-lg animate-pulse">
            <div className="flex items-center gap-2">
              <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                Session: 23:45
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
