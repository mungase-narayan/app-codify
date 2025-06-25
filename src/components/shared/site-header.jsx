import { Code2, Menu, X } from "lucide-react"; // ✅ FIXED: Added 'X' import
import { useState } from "react";
import { Button } from "../ui/button";

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center gap-2 transform transition-all duration-700`}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Codify</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {["Features", "Pricing", "Testimonials", "Contact"].map(
                (item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            <Button
              size={"sm"}
              variant="outline"
              href="/auth/sign-in"
              onClick={() => setIsMenuOpen(false)}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 hover:text-white sm:px-8 py-3 sm:py-2 rounded-4xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Sign In
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
            {["Features", "Pricing", "Testimonials", "FAQ", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900 mt-2"
            >
              Sign In
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
