import React from 'react';
import { Server, Shield, Cpu, Database, Network, CheckCircle, ArrowRight, Clock, Users, Zap } from 'lucide-react';

interface DeploymentPageProps {
  onPageChange?: (page: string) => void;
}

const DeploymentPage: React.FC<DeploymentPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D2C54] to-[#1a4480] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Enterprise-Grade Deployment
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Secure, scalable, and optimized on-premise AI deployment solutions designed for modern enterprises
          </p>
        </div>
      </section>

      {/* Deployment Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Complete Control Over Your AI Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              InnoMedia's deployment solutions ensure your AI systems run efficiently, securely, and at scale within your own infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Security First */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Security First</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data never leaves your premises. Complete control over access, encryption, and compliance requirements.
              </p>
            </div>

            {/* Optimized Performance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Optimized Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-layered optimization ensures maximum efficiency and minimal resource consumption for your hardware.
              </p>
            </div>

            {/* Scalable Architecture */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Scalable Architecture</h3>
              <p className="text-gray-600 leading-relaxed">
                Grow from pilot projects to enterprise-wide deployment with our flexible, modular architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Turn Technologies into Solutions and Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-12">
              Turn Technologies into Solutions and Services
            </h2>
            <div className="flex justify-center">
              <img 
                src="https://www.innomedia.com/wp-content/uploads/2025/07/Turn-Technologies-into-Solutions-and-Services-1.png" 
                alt="Turn Technologies into Solutions and Services" 
                className="w-4/5 max-w-3xl h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Three Deployment Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the deployment approach that aligns with your organization's infrastructure, security requirements, and operational preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cloud Deployment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Cloud Deployment</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Leverage cloud infrastructure for rapid deployment and automatic scaling with enterprise-grade security.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Rapid deployment and setup</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Automatic scaling and updates</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Enterprise-grade security</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Global availability and redundancy</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-sm font-bold text-[#0D2C54] mb-2">Best For:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Startups and growing companies</li>
                  <li>• Organizations prioritizing speed</li>
                  <li>• Teams with limited IT resources</li>
                  <li>• Multi-region operations</li>
                </ul>
              </div>
            </div>

            {/* On-Premise Deployment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-2xl flex items-center justify-center mb-6">
                <Server className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">On-Premise Deployment</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Maximum control and security with AI models running entirely within your own infrastructure.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Complete data sovereignty</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">No external data transmission</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Custom hardware optimization</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Full compliance control</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-sm font-bold text-[#0D2C54] mb-2">Best For:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Financial institutions</li>
                  <li>• Healthcare organizations</li>
                  <li>• Government agencies</li>
                  <li>• Highly regulated industries</li>
                </ul>
              </div>
            </div>

            {/* Hybrid Cloud Deployment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-4">Hybrid Deployment</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Combine the benefits of both cloud and on-premise deployment for optimal flexibility and security.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Sensitive data stays on-premise</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Cloud scalability for compute</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Optimized cost structure</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00A9E0] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Flexible resource allocation</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-sm font-bold text-[#0D2C54] mb-2">Best For:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Growing enterprises</li>
                  <li>• Variable workloads</li>
                  <li>• Multi-location organizations</li>
                  <li>• Balanced security needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Streamlined Deployment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial assessment to full production deployment in weeks, not months
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Assessment & Planning</h3>
              <p className="text-gray-600">
                Infrastructure evaluation, requirements analysis, and deployment strategy development
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Environment Setup</h3>
              <p className="text-gray-600">
                Hardware configuration, software installation, and security implementation
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Model Deployment</h3>
              <p className="text-gray-600">
                AI model installation, optimization, and initial configuration for your use cases
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Testing & Go-Live</h3>
              <p className="text-gray-600">
                Comprehensive testing, user training, and production deployment with ongoing support
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#0D2C54] mb-6 text-center">Typical Deployment Timeline</h3>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00A9E0]">Week 1-2</div>
                <div className="text-gray-600">Assessment</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0D2C54]">Week 3-4</div>
                <div className="text-gray-600">Setup</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00A9E0]">Week 5-6</div>
                <div className="text-gray-600">Deployment</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0D2C54]">Week 7-8</div>
                <div className="text-gray-600">Go-Live</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Maintenance */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Ongoing Support & Maintenance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure optimal performance and continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 24/7 Monitoring */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">24/7 Monitoring</h3>
              <p className="text-gray-600">
                Continuous system monitoring with proactive issue detection and resolution
              </p>
            </div>

            {/* Regular Updates */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Regular Updates</h3>
              <p className="text-gray-600">
                Scheduled model updates, security patches, and performance optimizations
              </p>
            </div>

            {/* Expert Support */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated support team with deep AI expertise and enterprise experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0D2C54] to-[#1a4480] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Deploy Enterprise AI?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Let our experts help you design and implement the perfect AI deployment for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => {
                onPageChange?.('contact');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="bg-[#00A9E0] hover:bg-[#0088b8] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Schedule Deployment Consultation
            </button>
            <button 
              onClick={() => {
                onPageChange?.('contact');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-[#0D2C54] px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Download Technical Specs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeploymentPage;