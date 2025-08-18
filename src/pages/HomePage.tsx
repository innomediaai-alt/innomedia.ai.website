import React from 'react';
import { Brain, Shield, Workflow, Database, Server, Heart as Gears, ArrowRight, Play } from 'lucide-react';
import HeroSlideshow from '../components/HeroSlideshow';

interface HomePageProps {
  onPageChange?: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0D2C54] to-[#1a4480] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Agentic AI for
                <span className="text-[#00A9E0] block">Modern Enterprises</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Unlocking Knowledge. Optimized On-Premise Deployment. Orchestrating Workflows.
              </p>
              <button 
                onClick={() => onPageChange?.('contact')}
                className="bg-[#00A9E0] hover:bg-[#0088b8] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative bg-gradient-to-br from-[#00A9E0] to-[#0088b8] rounded-2xl">
              <HeroSlideshow onPageChange={onPageChange || (() => {})} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Cohesive Strategy Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Our Cohesive Strategy for True Enterprise Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three integrated pillars that work seamlessly together to deliver unparalleled AI solutions for modern enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Pillar 1: The Knowledge Engine</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlock proprietary data and domain-specific knowledge into intelligence that provides context-aware insights.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Pillar 2: The Optimized On-Premise Deployment</h3>
              <p className="text-gray-600 leading-relaxed">
                Maintain complete control over your AI infrastructure with secure, enterprise-grade, inference-scalable deployment.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Pillar 3: The Orchestration Studio</h3>
              <p className="text-gray-600 leading-relaxed">
                Maximize business process efficiency with an Orchestrated Agentic AI workflow platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Ingredients Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Key Ingredients of Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive architecture integrates cutting-edge technologies to deliver unparalleled enterprise AI solutions.
            </p>
          </div>

          <div className="relative">
            {/* Architectural Diagram */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* InnoRAG */}
                <div className="text-center">
                  <div className="bg-[#00A9E0] rounded-2xl p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                    <Database className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D2C54] mb-2">InnoRAG</h3>
                  <p className="text-gray-600 text-sm">Advanced Retrieval Augmented Generation</p>
                </div>

                {/* Customized LMs */}
                <div className="text-center">
                  <div className="bg-[#0D2C54] rounded-2xl p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                    <Server className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D2C54] mb-2">Customized LMs</h3>
                  <p className="text-gray-600 text-sm">Tailored Language Models</p>
                </div>

                {/* MCP */}
                <div className="text-center">
                  <div className="bg-[#00A9E0] rounded-2xl p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                    <Gears className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D2C54] mb-2">MCP</h3>
                  <p className="text-gray-600 text-sm">Model Control Protocol</p>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="text-center mb-8">
                <div className="inline-block bg-[#00A9E0] rounded-full p-3">
                  <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
                </div>
              </div>

              {/* Orchestrated Agentic AI Workflow */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#0D2C54] to-[#00A9E0] rounded-3xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">Orchestrated Agentic AI Workflow</h3>
                  <p className="text-blue-100">The unified platform that brings all components together for seamless enterprise AI automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0D2C54] to-[#1a4480] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Let's Build Your Future, Together
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Experience the power of Enterprise Agentic AI. See how InnoMedia can transform your business operations with our integrated three-pillar approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => {
                onPageChange?.('contact');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="bg-[#00A9E0] hover:bg-[#0088b8] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Schedule a Demo
            </button>
            <button 
              onClick={() => {
                onPageChange?.('contact');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-[#0D2C54] px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;