import React from 'react';
import { Database, Brain, Workflow, Handshake, CheckCircle, Star, Target, Users } from 'lucide-react';

interface WhyInnoMediaPageProps {
  onPageChange?: (page: string) => void;
}

const WhyInnoMediaPage: React.FC<WhyInnoMediaPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D2C54] to-[#1a4480] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            The InnoMedia Value Proposition
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover why leading enterprises choose InnoMedia for their AI transformation journey
          </p>
        </div>
      </section>

      {/* Value Proposition 1: Unlocking Enterprise Knowledge */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-[#00A9E0] rounded-3xl flex items-center justify-center mb-8">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
                Unlocking Enterprise Knowledge
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Using InnoMedia's Advanced RAG, InnoRAG, to deliver superior accuracy and comprehensiveness. Features multi-modal capabilities and advanced knowledge processing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Multi-modal data processing for comprehensive understanding</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Advanced knowledge graphs for contextual relationships</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Real-time knowledge updates for current insights</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00A9E0] to-[#0088b8] rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <div className="text-sm font-medium text-[#0D2C54]">Superior Accuracy</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 text-center flex items-center justify-center col-span-1 min-w-0">
                      <div className="text-xs font-medium text-[#0D2C54] text-center leading-tight">Unmatched Comprehensiveness</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <div className="text-sm font-medium text-[#0D2C54]">Enhanced Relevance</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Database className="w-16 h-16 text-[#00A9E0] mx-auto mb-4" />
                    <p className="text-[#0D2C54] font-semibold">Advanced RAG Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition 2: Tailoring AI Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#0D2C54] to-[#1a4480] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Customization Capabilities</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="w-6 h-6 text-[#00A9E0]" />
                      <span className="font-semibold">Industry-Specific Tuning</span>
                    </div>
                    <p className="text-sm opacity-90">Tailored for healthcare, finance, legal, and more</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Brain className="w-6 h-6 text-[#00A9E0]" />
                      <span className="font-semibold">Behavioral Adaptation</span>
                    </div>
                    <p className="text-sm opacity-90">AI that learns your organization's unique processes</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Star className="w-6 h-6 text-[#00A9E0]" />
                      <span className="font-semibold">Continuous Improvement</span>
                    </div>
                    <p className="text-sm opacity-90">Models that evolve with your business needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-[#0D2C54] rounded-3xl flex items-center justify-center mb-8">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
                Tailoring AI Expertise
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Continue to adjust the Knowledge Engine by further tuning the language models' skills, behaviors, and reasoning process, tailored to specific enterprises or vertical industries.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Custom fine-tuning for enterprise-specific requirements</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Industry-specific reasoning and decision-making patterns</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Adaptive learning from organizational feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition 3: Driving Business Workflow Efficiency */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-[#00A9E0] rounded-3xl flex items-center justify-center mb-8">
                <Workflow className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
                Driving Business Workflow Efficiency
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Via Enterprise-Grade Agentic AI, with agents engineered for autonomy, goal-oriented ReAct, and adaptive learning.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Autonomous agents that work independently</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Goal-oriented reasoning and action planning</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Continuous learning and process optimization</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-[#0D2C54] mb-6 text-center">Efficiency Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Process Automation</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div className="bg-[#00A9E0] h-3 rounded-full" style={{width: '95%'}}></div>
                      </div>
                      <span className="text-[#0D2C54] font-bold">95%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Response Time</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '88%'}}></div>
                      </div>
                      <span className="text-[#0D2C54] font-bold">88%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Cost Reduction</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div className="bg-orange-500 h-3 rounded-full" style={{width: '72%'}}></div>
                      </div>
                      <span className="text-[#0D2C54] font-bold">72%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Workflow className="w-16 h-16 text-[#00A9E0] mx-auto mb-4" />
                  <p className="text-[#0D2C54] font-semibold">Enterprise-Grade Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition 4: Collaborative Partnership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#00A9E0] to-[#0088b8] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Partnership Benefits</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    <Users className="w-8 h-8 text-white mb-3" />
                    <h4 className="font-bold mb-2">Dedicated Support Team</h4>
                    <p className="text-sm opacity-90">Expert consultants working alongside your team</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    <Target className="w-8 h-8 text-white mb-3" />
                    <h4 className="font-bold mb-2">Custom Implementation</h4>
                    <p className="text-sm opacity-90">Tailored deployment strategies for your infrastructure</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    <Star className="w-8 h-8 text-white mb-3" />
                    <h4 className="font-bold mb-2">Ongoing Innovation</h4>
                    <p className="text-sm opacity-90">Continuous platform updates and feature development</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-[#0D2C54] rounded-3xl flex items-center justify-center mb-8">
                <Handshake className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
                A Commitment to Collaborative Partnership
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We build strong, collaborative relationships to co-create value, offering scalable on-premise deployment, custom fine-tuning, and tailored workflow development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Co-creation approach to solution development</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Scalable on-premise deployment options</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Long-term strategic partnership commitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose InnoMedia Summary */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Why Leading Enterprises Choose InnoMedia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The complete value proposition that sets us apart in the enterprise AI landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0D2C54] mb-2">Superior Knowledge Processing</h3>
              <p className="text-gray-600 text-sm">Advanced RAG technology with multi-modal capabilities</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0D2C54] mb-2">Tailored AI Solutions</h3>
              <p className="text-gray-600 text-sm">Custom fine-tuning for your specific industry needs</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0D2C54] mb-2">Autonomous Efficiency</h3>
              <p className="text-gray-600 text-sm">Goal-oriented agents with adaptive learning capabilities</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0D2C54] mb-2">True Partnership</h3>
              <p className="text-gray-600 text-sm">Collaborative approach to long-term success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0D2C54] to-[#1a4480] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Experience the InnoMedia Advantage
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Join the leading enterprises that have transformed their operations with our comprehensive AI platform
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => {
                onPageChange?.('contact');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="bg-[#00A9E0] hover:bg-[#0088b8] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Start Your AI Transformation
            </button>
            <button 
              onClick={() => {
                onPageChange?.('contact');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-[#0D2C54] px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Speak with Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyInnoMediaPage;