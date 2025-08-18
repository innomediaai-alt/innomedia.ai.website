import React from 'react';
import { Brain, Database, Server, Shield, Cpu, Zap, Users, MemoryStick as Memory, Workflow } from 'lucide-react';

interface PlatformPageProps {
  onPageChange?: (page: string) => void;
}

const PlatformPage: React.FC<PlatformPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D2C54] to-[#1a4480] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our Platform: Three Strategic Pillars
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Deep dive into the comprehensive architecture that powers InnoMedia's enterprise AI solutions
          </p>
          <div className="mt-12 flex justify-center">
            <img 
              src="https://www.innomedia.com/wp-content/uploads/2025/07/The-Three-Strategic-Pillars-for-Enterprise-AI.png" 
              alt="The Three Strategic Pillars for Enterprise AI" 
              className="w-2/3 max-w-2xl h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pillar 1: The Knowledge Engine */}
      <section id="knowledge-engine" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Pillar 1: The Knowledge Engine
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your enterprise data into intelligent, actionable insights through advanced AI technologies
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - InnoRAG */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Element 1: InnoRAG (Knowing What)</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensively unlock data and expert knowledge into intelligence and "long-term memory" through our advanced Agentic RAG module.
              </p>
            </div>

            {/* Right Column - Customized Post-Training */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Element 2: Customized Post-Training (Knowing How)</h3>
              <p className="text-gray-600 leading-relaxed">
                Further tune the language models' skills, behaviors, and reasoning processes, tailored to specific enterprises or vertical industries.
              </p>
            </div>
          </div>

          {/* New Image Row - Two-column layout matching above blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - InnoRAG Image */}
            <div className="flex justify-center">
              <img 
                src="https://www.innomedia.com/wp-content/uploads/2025/08/InnoRAG-with-4-Feature-Blocks-r1.png" 
                alt="InnoRAG with 4 Feature Blocks" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Column - Post-Training Image */}
            <div className="flex justify-center">
              <img 
                src="https://www.innomedia.com/wp-content/uploads/2025/08/Post-Training-with-4-Feature-Blocks-r1.png" 
                alt="Post-Training with 4 Feature Blocks" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* InnoRAG Technologies Table */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            {/* Page Title */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-[#005A9C] mb-4">InnoRAG Technologies & Business Value</h3>
              <div className="w-full h-1 bg-[#005A9C]"></div>
            </div>
            
            {/* Professional Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                {/* Table Headers */}
                <thead>
                  <tr>
                    <th className="bg-[#3b5998] text-white font-bold py-4 px-6 text-left border border-gray-300">
                      InnoRAG
                    </th>
                    <th className="bg-[#3b5998] text-white font-bold py-4 px-6 text-left border border-gray-300">
                      Technologies
                    </th>
                    <th className="bg-[#3b5998] text-white font-bold py-4 px-6 text-left border border-gray-300">
                      Resulting RAG Performance Improvements & Business Value
                    </th>
                  </tr>
                </thead>
                
                <tbody>
                  {/* Knowledge Management Section - Row 1 */}
                  <tr>
                    <td className="bg-[#3b5998] text-white font-bold text-center align-middle border border-gray-300" rowSpan={3}>
                      <div className="flex flex-col items-center justify-center h-full py-4">
                        <div style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}} className="text-sm leading-tight">
                          Knowledge Extraction, Processing, and
                        </div>
                        <div style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}} className="text-sm leading-tight mt-2">
                          Management
                        </div>
                      </div>
                    </td>
                    <td className="bg-gray-50 py-4 px-6 border border-gray-300 font-medium text-gray-900">
                      1. Multi-Path Knowledge Processing & Agentic Enhancement
                    </td>
                    <td className="bg-white py-4 px-6 border border-gray-300 text-gray-700">
                      Enhanced Comprehensiveness & Context Preservation for different document types, resulting in complete and comprehensive answers.
                    </td>
                  </tr>
                  
                  {/* Knowledge Management Section - Row 2 */}
                  <tr>
                    <td className="bg-gray-50 py-4 px-6 border border-gray-300 font-medium text-gray-900">
                      2. Multi-Dimensional and Hierarchical Knowledge Representation
                    </td>
                    <td className="bg-white py-4 px-6 border border-gray-300 text-gray-700">
                      Superior Accuracy & Deeper Insights in handling Complex Queries, far surpassing the capabilities of vector-only RAG.
                    </td>
                  </tr>
                  
                  {/* Knowledge Management Section - Row 3 */}
                  <tr>
                    <td className="bg-gray-50 py-4 px-6 border border-gray-300 font-medium text-gray-900">
                      3. Multimodal & Cross-Modal Handling
                    </td>
                    <td className="bg-white py-4 px-6 border border-gray-300 text-gray-700">
                      Providing richer and more complete answers that can include relevant images, graphs, charts, diagrams, and tables.
                    </td>
                  </tr>
                  
                  {/* Knowledge Retrieval Section - Row 4 */}
                  <tr>
                    <td className="bg-[#3b5998] text-white font-bold text-center align-middle border border-gray-300" rowSpan={2}>
                      <div className="flex flex-col items-center justify-center h-full py-4">
                        <div style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}} className="text-sm leading-tight">
                          Knowledge
                        </div>
                        <div style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}} className="text-sm leading-tight mt-2">
                          Retrieval
                        </div>
                      </div>
                    </td>
                    <td className="bg-gray-50 py-4 px-6 border border-gray-300 font-medium text-gray-900">
                      1. Iterative Reasoning & Agentic Capabilities
                    </td>
                    <td className="bg-white py-4 px-6 border border-gray-300 text-gray-700">
                      Comprehensive Answers to Multi-hop, and Open-Ended Questions, dramatically improving performance on difficult queries.
                    </td>
                  </tr>
                  
                  {/* Knowledge Retrieval Section - Row 5 */}
                  <tr>
                    <td className="bg-gray-50 py-4 px-6 border border-gray-300 font-medium text-gray-900">
                      2. Advanced Query Processing & Retrieval
                    </td>
                    <td className="bg-white py-4 px-6 border border-gray-300 text-gray-700">
                      Increased Relevance and builds user trust by providing verifiable, citable answers.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance Assessment Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Preliminary InnoRAG Performance Assessment</h3>
            
            {/* Main Performance Table */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {/* Header Row */}
                    <tr>
                      <th className="bg-[#4A86E8] text-white font-bold py-4 px-6 text-left border border-gray-300">
                        ChatGPT-generated Queries
                      </th>
                      <th className="bg-[#4A86E8] text-white font-bold py-4 px-6 text-center border border-gray-300">
                        Std RAG
                      </th>
                      <th className="bg-[#4A86E8] text-white font-bold py-4 px-6 text-center border border-gray-300">
                        InnoRAG
                      </th>
                    </tr>
                    
                    {/* Level 1 */}
                    <tr>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-gray-900">
                        Level 1
                      </td>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-center text-gray-900">
                        5.5
                      </td>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-center text-gray-900">
                        8.1
                      </td>
                    </tr>
                    
                    {/* Level 2 */}
                    <tr>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-gray-900">
                        Level 2
                      </td>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-center text-gray-900">
                        4.1
                      </td>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-center text-gray-900">
                        6.5
                      </td>
                    </tr>
                    
                    {/* Level 3 */}
                    <tr>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-gray-900">
                        Level 3
                      </td>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-center text-gray-900">
                        3.7
                      </td>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-center text-gray-900">
                        6.3
                      </td>
                    </tr>
                    
                    {/* Overall Average 1 */}
                    <tr>
                      <td className="bg-white py-4 px-6 border border-gray-300 font-bold text-gray-900">
                        Overall Average
                      </td>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-center font-bold text-gray-900">
                        4.4
                      </td>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-center font-bold text-gray-900">
                        7.0
                      </td>
                    </tr>
                    
                    {/* Sub-header 1 */}
                    <tr>
                      <th className="bg-[#4A86E8] text-white font-bold py-4 px-6 text-left border border-gray-300">
                        Past customers' OnTime Queries
                      </th>
                      <th className="bg-[#4A86E8] text-white font-bold py-4 px-6 text-center border border-gray-300">
                        Std RAG
                      </th>
                      <th className="bg-[#4A86E8] text-white font-bold py-4 px-6 text-center border border-gray-300">
                        InnoRAG
                      </th>
                    </tr>
                    
                    {/* Overall Average 2 */}
                    <tr>
                      <td className="bg-white py-4 px-6 border border-gray-300 font-bold text-gray-900">
                        Overall Average
                      </td>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-center font-bold text-gray-900">
                        4.3
                      </td>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-center font-bold text-gray-900">
                        6.2
                      </td>
                    </tr>
                    
                    {/* Sub-header 2 */}
                    <tr>
                      <th className="bg-[#4A86E8] text-white font-bold py-4 px-6 text-left border border-gray-300">
                        Manually Constructed Queries
                      </th>
                      <th className="bg-[#4A86E8] text-white font-bold py-4 px-6 text-center border border-gray-300">
                        Std RAG
                      </th>
                      <th className="bg-[#4A86E8] text-white font-bold py-4 px-6 text-center border border-gray-300">
                        InnoRAG
                      </th>
                    </tr>
                    
                    {/* Overall Average 3 */}
                    <tr>
                      <td className="bg-white py-4 px-6 border border-gray-300 font-bold text-gray-900">
                        Overall Average
                      </td>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-center font-bold text-gray-900">
                        4.3
                      </td>
                      <td className="bg-white py-4 px-6 border border-gray-300 text-center font-bold text-gray-900">
                        6.5
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Scoring Description Table */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="bg-gray-800 text-white font-bold py-4 px-6 text-left border border-black">
                        Score
                      </th>
                      <th className="bg-gray-800 text-white font-bold py-4 px-6 text-left border border-black">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bg-white py-4 px-6 border border-black text-gray-900">
                        1-4
                      </td>
                      <td className="bg-white py-4 px-6 border border-black text-gray-900">
                        Reply mostly not relevant or too vague/generic
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-white py-4 px-6 border border-black text-gray-900">
                        5-8
                      </td>
                      <td className="bg-white py-4 px-6 border border-black text-gray-900">
                        Reply mostly relevant with perhaps some useful information missing
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-white py-4 px-6 border border-black text-gray-900">
                        9
                      </td>
                      <td className="bg-white py-4 px-6 border border-black text-gray-900">
                        Reply correct with most information needed
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Optimized On-Premise Deployment */}
      <section id="on-premise-deployment" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Pillar 2: The Optimized On-Premise Deployment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Holistic, multi-layered optimization approach for maximum performance, security, stability, and control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Model-Level Optimization */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Model-Level Optimization</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Multi-LMs - the right models for the right tasks – Superior performance with lower inference compute requirements.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Best-in-Class LMs</li>
                <li>• Post-Training efficiency</li>
                <li>• MoE & AWQ</li>
              </ul>
            </div>

            {/* Inference-Level Optimization */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Inference-Level Optimization</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Efficient LM inference engine, maximizing on-premise deployment efficiency.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Virtual memory and paging</li>
                <li>• Dynamic batching</li>
                <li>• Efficient key-value caching</li>
              </ul>
            </div>

            {/* Algorithmic-Level Architecture */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Algorithmic-Level Architecture</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Advanced algorithms, improving inference-compute performance and efficiency.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Hierarchical RAG DBs</li>
                <li>• Query-dependent multi-path retrieval</li>
                <li>• Reasoning vs. non-reasoning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: The Orchestration Studio */}
      <section id="orchestration-studio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Pillar 3: The Orchestration Studio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent workflow orchestration that brings together AI agents for seamless business process automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Grounded Expert Agents */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Grounded, Expert Agents</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Leveraging Pillar 1's Knowledge Engine to create specialized AI agents with deep domain expertise and contextual understanding.
              </p>
              <div className="text-sm text-gray-500">
                <p className="font-medium mb-2">Key Features:</p>
                <ul className="space-y-1">
                  <li>• Domain-specific expertise</li>
                  <li>• Contextual decision-making</li>
                  <li>• Continuous learning</li>
                </ul>
              </div>
            </div>

            {/* Collective Consciousness */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-2xl flex items-center justify-center mb-6">
                <Memory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">A "Collective Consciousness"</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Advanced memory systems that enable agents to share knowledge, learn from each other, and maintain organizational intelligence.
              </p>
              <div className="text-sm text-gray-500">
                <p className="font-medium mb-2">Key Features:</p>
                <ul className="space-y-1">
                  <li>• Shared knowledge base</li>
                  <li>• Cross-agent learning</li>
                  <li>• Organizational memory</li>
                </ul>
              </div>
            </div>

            {/* Customer-Centric Workflow Design */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Customer-Centric Workflow Design</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Intuitive workflow creation tools that allow businesses to design, customize, and optimize their AI-powered processes.
              </p>
              <div className="text-sm text-gray-500">
                <p className="font-medium mb-2">Key Features:</p>
                <ul className="space-y-1">
                  <li>• Visual workflow builder</li>
                  <li>• Custom process design</li>
                  <li>• Real-time optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0D2C54] to-[#1a4480] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Experience Our Platform?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            See how our three-pillar approach can transform your enterprise AI capabilities
          </p>
          <button 
            onClick={() => {
              onPageChange?.('contact');
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
            }}
            className="bg-[#00A9E0] hover:bg-[#0088b8] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Schedule a Platform Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;