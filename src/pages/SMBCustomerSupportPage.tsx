import React from 'react';
import { Cpu, FileText, TrendingUp, RefreshCw } from 'lucide-react';

interface SMBCustomerSupportPageProps {
  onPageChange: (page: string) => void;
}

const SMBCustomerSupportPage: React.FC<SMBCustomerSupportPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            InnoMedia Customer Support
          </h1>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            AI Solution Suite
          </h2>
          <p className="text-xl text-gray-700 font-normal">
            Built for scalability, reliability and growth
          </p>
        </div>

        {/* Separator Line */}
        <div className="w-full max-w-6xl border-t border-gray-300 mb-16"></div>

        {/* Main Content Section - Six Cards in 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mb-16">
          {/* Card 1 - InnoMedia Tech Support Agent */}
          <a 
            href="https://ai-demo.innomedia.com:5678/webhook/RagChatBotStream"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left block"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <Cpu className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              InnoMedia Tech Support Agent
            </h3>
            <p className="text-white text-lg font-normal leading-relaxed">
              Advanced RAG Expert Technical Support anytime you need it.
            </p>
          </a>

          {/* Card 2 - Standard Tech Support Agent */}
          <a 
            href="https://hschhatwal.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left block"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <Cpu className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Standard Tech Support Agent
            </h3>
            <p className="text-white text-lg font-normal leading-relaxed">
              Tech Support Agent using a Standard RAG Model.
            </p>
          </a>

          {/* Card 3 - Sales Agent */}
          <a 
            href="https://ai-demo.innomedia.com:5678/webhook/inventoryChatBotV3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left block"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Sales Agent
            </h3>
            <p className="text-white text-lg font-normal leading-relaxed">
              Inventory analysis, Sales Order processing and more.
            </p>
          </a>

          {/* Card 4 - Product Order Form */}
          <a 
            href="https://ai-demo.innomedia.com:5678/webhook/order"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left block"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <FileText className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Product Order Form
            </h3>
            <p className="text-white text-lg font-normal leading-relaxed">
              Ordering Products with Ease.
            </p>
          </a>

          {/* Card 5 - RMA Agent */}
          <a 
            href="https://hschhatwal.github.io/rma-chat.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left block"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <Cpu className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              RMA Agent
            </h3>
            <p className="text-white text-lg font-normal leading-relaxed">
              Expert Advice on how to return your devices.
            </p>
          </a>

          {/* Card 6 - RMA Support Form */}
          <a 
            href="https://form.jotform.com/251315912142346"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-left block"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              RMA Support Form
            </h3>
            <p className="text-white text-lg font-normal leading-relaxed">
              Get your products repaired and re-serviced.
            </p>
          </a>
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

export default SMBCustomerSupportPage;