import React from 'react';
import { Cpu } from 'lucide-react';

interface SolutionIllustrationPageProps {
  onPageChange: (page: string) => void;
}

const SolutionIllustrationPage: React.FC<SolutionIllustrationPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            InnoMedia AI Solution Suite
          </h1>
          <p className="text-xl text-gray-700 font-normal">
            Built for scalability, reliability and growth
          </p>
        </div>

        {/* Separator Line */}
        <div className="w-full max-w-4xl border-t border-gray-300 mb-16"></div>

        {/* Key Elements Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            The Key Elements of InnoMedia Enterprise AI Solutions
          </h2>
          <div className="flex justify-center mt-8">
            <img 
              src="https://www.innomedia.com/wp-content/uploads/2025/07/The-Key-Elements-of-Enterprise-AI-Solutions.png" 
              alt="The Key Elements of InnoMedia Enterprise AI Solutions" 
              className="w-2/3 max-w-2xl h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Second Separator Line */}
        <div className="w-full max-w-4xl border-t border-gray-300 mb-16"></div>

        {/* Main Content Section - Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl w-full mb-16">
          {/* Card 1 - SMB Customer Support Agents */}
          <button 
            onClick={() => onPageChange('smb-customer-support')}
            className="bg-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <Cpu className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              SMB Customer Support Agents
            </h2>
            <p className="text-white text-lg font-normal leading-relaxed">
              Making support tasks simpler for Small & Medium-sized Businesses.
            </p>
          </button>

          {/* Card 2 - Enterprise Internal Agents */}
          <button 
            onClick={() => onPageChange('enterprise-internal-agents')}
            className="bg-red-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <Cpu className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Enterprise Internal Agents
            </h2>
            <p className="text-white text-lg font-normal leading-relaxed">
              Agents to allow large Enterprises to streamline their internal workflows.
            </p>
          </button>
        </div>

        {/* Third Separator Line */}
        <div className="w-full max-w-4xl border-t border-gray-300 mb-8"></div>
      </div>

      {/* Footer Section */}
      <footer className="text-center py-8">
        <p className="text-gray-600 text-sm">
          © 2025 InnoMedia. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SolutionIllustrationPage;