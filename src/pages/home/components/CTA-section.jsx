import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to transform your technical interviews?
        </h2>
        <p
          className="text-lg sm:text-xl text-gray-300 mb-8"
          style={{ animationDelay: "0.2s" }}
        >
          Join hundreds of companies already using CodeSync to hire better
          developers faster.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            Start Your Free Trial
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Schedule Demo
          </Button>
        </div>
        <p
          className="text-gray-400 text-sm mt-4"
          style={{ animationDelay: "0.6s" }}
        >
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};
export default CtaSection;
