const Footer = () => {
  return (
    <div className="flex w-full p-4 px-10 flex-col md:flex-row items-center justify-between gap-4 bg-slate-900">
      <div className="text-gray-400 text-sm">
        &copy; 2025 Codify. All rights reserved.
      </div>
      <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
        <a href="#" className="hover:text-white transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Terms of Service
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Cookie Policy
        </a>
        <a href="#" className="hover:text-white transition-colors">
          GDPR
        </a>
      </div>
    </div>
  );
};
export default Footer;
