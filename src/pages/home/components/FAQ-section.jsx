import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      question: "How does real-time collaboration work?",
      answer:
        "Our platform uses WebSocket technology to sync code changes instantly between all participants. Every keystroke, cursor movement, and code change is reflected in real-time across all connected sessions.",
    },
    {
      question: "Can I record the entire interview session?",
      answer:
        "Yes! Every coding session is automatically recorded, including audio, code changes, and screen interactions. You can review, share, and analyze sessions later with your team.",
    },
    {
      question: "What programming languages are supported?",
      answer:
        "We support 25+ programming languages including JavaScript, Python, Java, C++, Go, Rust, TypeScript, and many more. Each language comes with syntax highlighting and intelligent code completion.",
    },
    {
      question: "Is there a limit on interview duration?",
      answer:
        "No time limits! Conduct interviews as long as needed. Our platform is designed to handle extended sessions without performance degradation.",
    },
    {
      question: "How secure is the platform?",
      answer:
        "We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. All data is encrypted in transit and at rest.",
    },
    {
      question: "Can I integrate with my existing tools?",
      answer:
        "Yes! We offer integrations with popular tools like Slack, Microsoft Teams, Google Calendar, and major ATS systems to streamline your hiring workflow.",
    },
  ];
  return (
    <section
      id="faq"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-800/30"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fadeInUp">
            Frequently Asked Questions
          </h2>
          <p
            className="text-lg text-gray-300 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Everything you need to know about CodeSync
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <Card
              key={index}
              className={`bg-gray-900/50 border-gray-700 hover:bg-gray-900/70 transition-all duration-300 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full p-3 px-6 text-left flex items-center justify-between"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="text-white font-medium pr-4">
                  {faq.question}
                </span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
