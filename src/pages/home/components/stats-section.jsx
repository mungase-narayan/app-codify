import { Building, Shield, Star, Users } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { number: "10,000+", label: "Interviews Conducted", icon: Users },
    { number: "500+", label: "Companies Trust Us", icon: Building },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "4.9/5", label: "Customer Rating", icon: Star },
  ];
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center animate-fadeInUp transform hover:scale-105 transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
