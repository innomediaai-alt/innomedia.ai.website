import React, { useState, useEffect } from 'react';
import { Cloud, Server, ArrowUp } from 'lucide-react';

interface HeroSlideshowProps {
  onPageChange: (page: string) => void;
}

const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ onPageChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  // Single click handler that checks current slide state
  const handleSlideClick = () => {
    if (currentSlide === 0) {
      onPageChange('platform');
    } else if (currentSlide === 1) {
      onPageChange('solution-illustration');
    } else if (currentSlide === 2) {
      onPageChange('deployment');
    }
  };

  // Slide 1: The Three Pillars for Enterprise AI
  const Slide1 = () => (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">
        The Three Pillars for Enterprise AI
      </h3>
      <div className="space-y-4 w-full max-w-md">
        <div className="bg-blue-600 rounded-2xl p-6 text-center">
          <span className="text-white font-semibold text-lg">Knowledge Engine</span>
        </div>
        <div className="bg-orange-400 rounded-2xl p-6 text-center">
          <span className="text-gray-800 font-semibold text-lg">Optimized On-Premise Deployment</span>
        </div>
        <div className="bg-green-600 rounded-2xl p-6 text-center">
          <span className="text-white font-semibold text-lg">Orchestration Studio</span>
        </div>
      </div>
    </div>
  );

  // Slide 2: The Enterprise AI Solutions
  const Slide2 = () => (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">
        The Enterprise AI Solutions
      </h3>
      <div className="relative w-full max-w-lg">
        {/* Central top box */}
        <div className="bg-orange-500 rounded-2xl p-4 text-center mb-8">
          <span className="text-white font-semibold text-sm leading-tight">
            Orchestrated Agentic AI with Advanced Context Management
          </span>
        </div>
        
        {/* Bottom three uniform boxes with arrows */}
        <div className="flex justify-center gap-4 relative">
          {/* InnoRAG */}
          <div className="relative">
            <div className="bg-purple-300 rounded-2xl p-4 text-center w-32 h-20 flex items-center justify-center">
              <span className="text-purple-900 font-semibold text-sm leading-tight">InnoRAG</span>
            </div>
            <ArrowUp className="w-6 h-6 text-white absolute -top-6 left-1/2 transform -translate-x-1/2" />
          </div>
          
          {/* Customized LMs */}
          <div className="relative">
            <div className="bg-green-400 rounded-2xl p-4 text-center w-32 h-20 flex items-center justify-center">
              <span className="text-green-900 font-semibold text-sm leading-tight">Customized LMs</span>
            </div>
            <ArrowUp className="w-6 h-6 text-white absolute -top-6 left-1/2 transform -translate-x-1/2" />
          </div>
          
          {/* MCP for Resource Access */}
          <div className="relative">
            <div className="bg-blue-300 rounded-2xl p-4 text-center w-32 h-20 flex items-center justify-center">
              <span className="text-blue-900 font-semibold text-sm leading-tight">MCP for Resource Access</span>
            </div>
            <ArrowUp className="w-6 h-6 text-white absolute -top-6 left-1/2 transform -translate-x-1/2" />
          </div>
        </div>
      </div>
    </div>
  );

  // Slide 3: The Enterprise AI Deployment
  const Slide3 = () => (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">
        The Enterprise AI Deployment
      </h3>
      <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-sm">
        {/* SaaS Cloud */}
        <div className="flex items-center justify-center gap-6">
          <div className="text-white font-semibold text-lg">
            SaaS Cloud
          </div>
          <div className="bg-green-300 rounded-full p-6 flex items-center justify-center">
            <Cloud className="w-16 h-16 text-gray-700" />
          </div>
        </div>
        
        {/* On-Premise */}
        <div className="flex items-center justify-center gap-6">
          <div className="text-white font-semibold text-lg">
            On-Premise
          </div>
          <div className="bg-yellow-200 rounded-2xl p-6 flex items-center justify-center">
            <Server className="w-16 h-16 text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );

  const slides = [Slide1, Slide2, Slide3];

  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden">
      {/* Single clickable container with dynamic content */}
      <div 
        onClick={handleSlideClick}
        className="cursor-pointer w-full h-full absolute inset-0 transition-all duration-200 transform hover:scale-105 hover:shadow-2xl rounded-2xl"
      >
        {/* Slide 1 Content */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          currentSlide === 0 ? 'opacity-100' : 'opacity-0'
        }`}>
          <Slide1 />
        </div>

        {/* Slide 2 Content */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          currentSlide === 1 ? 'opacity-100' : 'opacity-0'
        }`}>
          <Slide2 />
        </div>

        {/* Slide 3 Content */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          currentSlide === 2 ? 'opacity-100' : 'opacity-0'
        }`}>
          <Slide3 />
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;