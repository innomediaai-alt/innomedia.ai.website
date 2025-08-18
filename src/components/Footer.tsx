import React from 'react';

interface FooterProps {
  onPageChange?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const handlePlatformLinkClick = (sectionId: string) => {
    if (onPageChange) {
      onPageChange('platform');
      // Small delay to ensure page loads before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleContactClick = () => {
    if (onPageChange) {
      onPageChange('contact');
      // Small delay to ensure page loads before scrolling to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-[#0D2C54] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">InnoMedia</h3>
            <p className="text-blue-100 mb-4">
              Pioneering Enterprise Agentic AI solutions that unlock knowledge, optimize deployment, and orchestrate workflows for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <button 
                  onClick={() => handlePlatformLinkClick('knowledge-engine')}
                  className="hover:text-[#00A9E0] transition-colors text-left"
                >
                  Knowledge Engine
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePlatformLinkClick('on-premise-deployment')}
                  className="hover:text-[#00A9E0] transition-colors text-left"
                >
                  On-Premise Deployment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePlatformLinkClick('orchestration-studio')}
                  className="hover:text-[#00A9E0] transition-colors text-left"
                >
                  Orchestration Studio
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-[#00A9E0] transition-colors">About Us</a></li>
              <li>
                <button 
                  onClick={handleContactClick}
                  className="hover:text-[#00A9E0] transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li><a href="#" className="hover:text-[#00A9E0] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2025 InnoMedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;