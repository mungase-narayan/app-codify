import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 animate-fadeInUp">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">CodeSync</span>
          </div>
          <div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-gray-400 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            {["Privacy", "Terms", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition-colors hover:scale-105 transform duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div
          className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <p>&copy; 2024 CodeSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
