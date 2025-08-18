import React from 'react';
import { Users, Calculator, ShoppingCart, Search, GraduationCap, Scale, Stethoscope, Building } from 'lucide-react';

interface SolutionsPageProps {
  onPageChange?: (page: string) => void;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D2C54] to-[#1a4480] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Solutions & Applications
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover how our platform transforms business operations across industries with intelligent AI solutions
          </p>
        </div>
      </section>

      {/* General Enterprise Applications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Streamlining Operations Across Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Horizontal applications that enhance efficiency and productivity in core business functions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* HR Applications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">HR</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• HR System Query</li>
                <li>• Onboarding</li>
                <li>• Employee Support</li>
                <li>• Policy Management</li>
              </ul>
            </div>

            {/* Accounting Applications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Accounting</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Expense Reimbursement</li>
                <li>• Invoicing</li>
                <li>• Financial Analysis</li>
                <li>• Compliance Tracking</li>
              </ul>
            </div>

            {/* Sales Applications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Sales</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Product Pricing</li>
                <li>• Inventory Management</li>
                <li>• Pre-Sales Support</li>
                <li>• Post-Sales Support</li>
              </ul>
            </div>

            {/* Enterprise Research */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-2xl flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Enterprise Research</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Market Analysis</li>
                <li>• Competitive Intelligence</li>
                <li>• Trend Identification</li>
                <li>• Strategic Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Industry Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Delivering Expert Solutions for Specialized Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Domain-specific applications that leverage deep industry knowledge and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Education */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Education</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Personalized AI Tutor</li>
                <li>• Lesson Plan Generation</li>
                <li>• Student Assessment</li>
                <li>• Curriculum Development</li>
              </ul>
              <div className="text-sm text-gray-500">
                <p className="font-medium">Domain-Specific Research:</p>
                <p>Educational methodology analysis and learning outcome optimization</p>
              </div>
            </div>

            {/* Legal */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-2xl flex items-center justify-center mb-6">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Legal</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Precedence & Case Analysis</li>
                <li>• Legal Action Recommendation</li>
                <li>• Contract Review</li>
                <li>• Compliance Monitoring</li>
              </ul>
              <div className="text-sm text-gray-500">
                <p className="font-medium">Domain-Specific Research:</p>
                <p>Legal precedent analysis and regulatory compliance tracking</p>
              </div>
            </div>

            {/* Medical */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#00A9E0] rounded-2xl flex items-center justify-center mb-6">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Medical</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Doctor Assistant</li>
                <li>• X-Ray Analyst</li>
                <li>• Diagnostic Support</li>
                <li>• Treatment Planning</li>
              </ul>
              <div className="text-sm text-gray-500">
                <p className="font-medium">Domain-Specific Research:</p>
                <p>Medical literature analysis and clinical decision support</p>
              </div>
            </div>

            {/* Enterprise Vertical */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#0D2C54] rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Custom Verticals</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Manufacturing</li>
                <li>• Financial Services</li>
                <li>• Retail & E-commerce</li>
                <li>• Energy & Utilities</li>
              </ul>
              <div className="text-sm text-gray-500">
                <p className="font-medium">Domain-Specific Research:</p>
                <p>Industry-specific analysis and specialized workflow optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Examples in Action */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C54] mb-6">
              Solution Examples in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our agent suites transform complex business processes into streamlined, intelligent workflows
            </p>
          </div>

          {/* UI Mockup Representation */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Agent Dashboard */}
              <div className="bg-gradient-to-br from-[#0D2C54] to-[#1a4480] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Agent Dashboard</h3>
                <div className="space-y-3">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm">HR Agent - Active</span>
                    </div>
                    <p className="text-xs opacity-80">Processing 12 onboarding requests</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-sm">Legal Agent - Analyzing</span>
                    </div>
                    <p className="text-xs opacity-80">Reviewing contract compliance</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm">Sales Agent - Standby</span>
                    </div>
                    <p className="text-xs opacity-80">Ready for customer queries</p>
                  </div>
                </div>
              </div>

              {/* Workflow Visualization */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Active Workflows</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-[#00A9E0]">
                    <h4 className="font-semibold text-[#0D2C54] mb-2">Employee Onboarding</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#00A9E0] h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600">75%</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-[#0D2C54] mb-2">Invoice Processing</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600">Complete</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                    <h4 className="font-semibold text-[#0D2C54] mb-2">Legal Review</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600">45%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Panel */}
              <div className="bg-gradient-to-br from-[#00A9E0] to-[#0088b8] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <p className="text-sm opacity-80 mb-1">Tasks Completed Today</p>
                    <p className="text-2xl font-bold">247</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <p className="text-sm opacity-80 mb-1">Average Response Time</p>
                    <p className="text-2xl font-bold">1.2s</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <p className="text-sm opacity-80 mb-1">Efficiency Improvement</p>
                    <p className="text-2xl font-bold">+340%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0D2C54] to-[#1a4480] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Discover how our solutions can be tailored to your specific industry and business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => {
                onPageChange?.('contact');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="bg-[#00A9E0] hover:bg-[#0088b8] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Explore Solutions for Your Industry
            </button>
            <button 
              onClick={() => {
                onPageChange?.('contact');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-[#0D2C54] px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Request Custom Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;