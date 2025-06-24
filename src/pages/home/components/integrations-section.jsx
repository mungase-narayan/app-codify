const IntegrationsSection = () => {
  const integrations = [
    { name: "Slack", logo: "💬" },
    { name: "Microsoft Teams", logo: "🎯" },
    { name: "Google Calendar", logo: "📅" },
    { name: "GitHub", logo: "🐙" },
    { name: "Jira", logo: "🎫" },
    { name: "Zoom", logo: "📹" },
  ];
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fadeInUp">
          Seamless Integrations
        </h2>
        <p
          className="text-lg text-gray-300 mb-12 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          Connect with your favorite tools and streamline your workflow
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className={`bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-2">{integration.logo}</div>
              <div className="text-gray-300 text-sm">{integration.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default IntegrationsSection;
