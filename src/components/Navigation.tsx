import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'platform', label: 'Platform' },
    { id: 'solutions', label: 'Applications' },
    { id: 'solution-illustration', label: 'Solution Illustration' },
    { id: 'why-innomedia', label: 'Why InnoMedia' },
    { id: 'deployment', label: 'Deployment' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo(0, 0); // Force scroll to top on navigation
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleDemoClick = () => {
    onPageChange('contact');
    window.scrollTo(0, 0); // Force scroll to top on navigation
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#00A9E0] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="text-sm font-bold text-[#0D2C54]">InnoMedia</span>
          </div>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    window.scrollTo(0, 0);
                  }}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-[#0D2C54] border-b-2 border-[#00A9E0]'
                      : 'text-gray-600 hover:text-[#00A9E0]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Desktop Demo Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => {
                handleDemoClick();
                window.scrollTo(0, 0);
              }}
              className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
            >
              Request a Demo
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-[#00A9E0] p-2 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'text-[#0D2C54] bg-[#00A9E0] bg-opacity-10'
                      : 'text-gray-600 hover:text-[#00A9E0] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* Mobile Demo Button */}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <button 
                  onClick={handleDemoClick}
                  className="w-full bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;