import React from 'react';
import { Search, Handshake, Users, Cpu, LifeBuoy } from 'lucide-react';

interface EnterpriseInternalAgentsPageProps {
  onPageChange: (page: string) => void;
}

const EnterpriseInternalAgentsPage: React.FC<EnterpriseInternalAgentsPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Enterprise Internal Agents
          </h1>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            and Assistants
          </h2>
          <p className="text-xl text-gray-700 font-normal">
            Built for scalability, reliability and growth
          </p>
        </div>

        {/* Separator Line */}
        <div className="w-full max-w-6xl border-t border-gray-300 mb-16"></div>

        {/* Main Content Section - Five Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mb-16">
          {/* Card 1 - Enterprise Deep Research */}
          <button className="bg-red-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left">
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <Search className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Enterprise Deep Research
            </h3>
            <p className="text-white text-lg font-normal leading-relaxed">
              Transform your internal data into a decisive advantage.
            </p>
          </button>

          {/* Card 2 - Onboarding Assistant */}
          <button className="bg-red-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left">
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <Handshake className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Onboarding Assistant
            </h3>
            <p className="text-white text-lg font-normal leading-relaxed">
              Your intelligent guide for a confident start.
            </p>
          </button>

          {/* Card 3 - Human Resources Assistant */}
          <a 
            href="https://hschhatwal.github.io/hr-chat.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left block"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Human Resources Assistant
            </h3>
            <p className="text-white text-lg font-normal leading-relaxed">
              Empowering HR operations with always-on assistance.
            </p>
          </a>

          {/* Card 4 - Invoice Analysis Agent */}
          <a 
            href="https://hschhatwal.github.io/invoice-chat.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left block"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <Cpu className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Invoice Analysis Agent
            </h3>
            <p className="text-white text-lg font-normal leading-relaxed">
              Convert sales and revenue data into smart decisions.
            </p>
          </a>

          {/* Card 5 - Personal Assistant */}
          <button className="bg-red-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left col-span-1 md:col-span-2 lg:col-span-1 lg:col-start-2">
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <LifeBuoy className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Personal Assistant
            </h3>
            <p className="text-white text-lg font-normal leading-relaxed">
              24/7 support that learns your needs and works your way.
            </p>
          </button>
        </div>

        {/* Second Separator Line */}
        <div className="w-full max-w-6xl border-t border-gray-300 mb-8"></div>

        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => onPageChange('solution-illustration')}
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            ← Back to Solution Illustration
          </button>
        </div>
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

export default EnterpriseInternalAgentsPage;