import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reasonForContact: [] as string[],
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      reasonForContact: prev.reasonForContact.includes(option)
        ? prev.reasonForContact.filter(item => item !== option)
        : [...prev.reasonForContact, option]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim() || formData.reasonForContact.length === 0) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Step 1: Send internal notification email
      const serviceId = 'service_ol6di4j';
      const internalTemplateId = 'template_zgkdvr6'; // Always use this for internal notifications
      const publicKey = 'qI-5CtTxuwAm7CZ-2';
      
      // Prepare template parameters for internal notification
      const internalTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company_name: formData.company,
        inquiry_purpose: formData.reasonForContact.join(', '),
        message: formData.message || 'No additional message provided.',
        to_email: 'ai-support@innomedia.com'
      };
      
      // Send internal notification email using EmailJS
      await emailjs.send(serviceId, internalTemplateId, internalTemplateParams, publicKey);
      
      // Step 2: Send automated reply to user (only if "Request a Personalized Demo" is selected)
      // Step 2: Send automated reply to user based on their selection
      let userReplyTemplateId = null;
      
      // Determine which template to use based on user's selection
      if (formData.reasonForContact.includes('Request a Personalized Demo')) {
        userReplyTemplateId = 'template_khrpmvc';
      } else if (formData.reasonForContact.includes('Explore a Technical Deep Dive')) {
        userReplyTemplateId = 'template_auvthdl';
      } else if (formData.reasonForContact.includes('Discuss a Proof-of-Concept (POC)')) {
        userReplyTemplateId = 'template_6g2uc8p';
      } else if (formData.reasonForContact.includes('Inquire about a Self-Service Trial')) {
        userReplyTemplateId = 'template_03ztcpj';
      } else if (formData.reasonForContact.includes('Schedule a Business Partnership Discussion')) {
        userReplyTemplateId = 'template_syzjd7w';
      } else if (formData.reasonForContact.includes('Other (please specify in the message below)')) {
        userReplyTemplateId = 'template_wjm9lb4';
      }
      
      // Send automated reply if a template was determined
      if (userReplyTemplateId) {
        try {
          // Prepare template parameters for user reply
          const userReplyTemplateParams = {
            to_name: formData.name,
            to_email: formData.email.trim(),
            company_name: formData.company,
            from_name: 'InnoMedia Team'
          };
          
          // Send automated reply to user
          await emailjs.send(serviceId, userReplyTemplateId, userReplyTemplateParams, publicKey);
          
        } catch (replyError) {
          console.error('Error sending automated reply to user:', replyError);
          // Note: We don't stop the process here as the main email was sent successfully
          // The user will still see the success message, but we log the reply email error
        }
      }
      
      // Step 3: Reset form and show success confirmation
      setFormData({
        name: '',
        email: '',
        company: '',
        reasonForContact: [],
        message: ''
      });
      
      // Step 4: Log to Google Sheets (non-blocking)
      logToGoogleSheets(formData).catch(error => {
        console.error('Error logging to Google Sheets:', error);
        // Note: We don't block the user experience if Google Sheets logging fails
      });
      
      // Step 5: Display success confirmation
      setIsSubmitted(true);
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error sending internal notification email:', error);
      alert('There was an error sending your message. Please try again or contact us directly at ai-support@innomedia.com');
    } finally {
      // Step 6: Logic reset - ensure form is ready for next submission
      setIsSubmitting(false);
      // Note: The template IDs are reset to their default values for the next submission
      // This happens automatically as they are defined as constants within the function scope
    }
  };

  // Function to log contact form data to Google Sheets
  const logToGoogleSheets = async (data: typeof formData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/log-contact-form`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          reasonForContact: data.reasonForContact,
          message: data.message
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Google Sheets logging failed: ${errorData.error}`);
      }

      const result = await response.json();
      console.log('Successfully logged to Google Sheets:', result);
    } catch (error) {
      console.error('Error logging to Google Sheets:', error);
      // Re-throw to be caught by the calling function
      throw error;
    }
  };

  const reasonOptions = [
    'Request a Personalized Demo',
    'Explore a Technical Deep Dive',
    'Discuss a Proof-of-Concept (POC)',
    'Inquire about a Self-Service Trial',
    'Schedule a Business Partnership Discussion',
    'Other (please specify in the message below)'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D2C54] to-[#1a4480] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Let's Build Your Future, Together
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your enterprise with Agentic AI? Our team of experts is here to guide you through every step of your AI journey.
          </p>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 - Schedule Demo */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="bg-[#F1F3F6] rounded-lg p-8 mx-auto w-full max-w-sm relative">
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  {/* Arrow pointing right */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <div className="w-8 h-8 bg-[#F1F3F6] transform rotate-45 border-r border-b border-gray-300"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Schedule a Personalized Demo</h3>
              <p className="text-gray-600 leading-relaxed">
                See our platform in action with your specific use cases and data challenges. Experience how our Sovereign Knowledge Engine™ can transform your enterprise.
              </p>
            </div>

            {/* Step 2 - Technical Deep Dive */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="bg-[#F1F3F6] rounded-lg p-8 mx-auto w-full max-w-sm relative">
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  {/* Arrow pointing right */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <div className="w-8 h-8 bg-[#F1F3F6] transform rotate-45 border-r border-b border-gray-300"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Request a Technical Deep Dive</h3>
              <p className="text-gray-600 leading-relaxed">
                A one-on-one session with our engineering leads to explore architecture, security protocols, and integration pathways for your unique environment.
              </p>
            </div>

            {/* Step 3 - Proof of Concept */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="bg-[#F1F3F6] rounded-lg p-8 mx-auto w-full max-w-sm">
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0D2C54] mb-4">Start a Proof-of-Concept</h3>
              <p className="text-gray-600 leading-relaxed">
                Let's solve a real business problem together and demonstrate measurable ROI with a focused implementation of our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#0D2C54] mb-6">Get Started Today</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will reach out to discuss how InnoMedia can transform your business operations.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#0D2C54] mb-2">Thank you for your message!</h3>
                  <p className="text-gray-600">Our team will be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9E0] focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9E0] focus:border-transparent transition-colors"
                      placeholder="Enter your business email"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9E0] focus:border-transparent transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      What is the primary purpose of your inquiry? *
                    </label>
                    <div className="space-y-3">
                      {reasonOptions.map((option) => (
                        <label key={option} className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.reasonForContact.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                            className="mt-1 w-4 h-4 text-[#00A9E0] border-gray-300 rounded focus:ring-[#00A9E0] focus:ring-2"
                          />
                          <span className="text-gray-700 text-sm leading-relaxed">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your AI needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9E0] focus:border-transparent transition-colors"
                      placeholder="Describe your current challenges and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-[#00A9E0] hover:bg-[#0088b8] text-white'
                    }`}
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#0D2C54] mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our team of AI experts is ready to help you unlock the full potential of your enterprise data and workflows. 
                  Whether you're just starting your AI journey or looking to enhance existing capabilities, we're here to guide you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00A9E0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0D2C54] mb-1">Email Us</h3>
                    <p className="text-gray-600">contact@innomedia.ai</p>
                    <p className="text-gray-600">sales@innomedia.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D2C54] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0D2C54] mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00A9E0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0D2C54] mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Innovation Drive</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#0D2C54] to-[#1a4480] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready for a Demo?</h3>
                <p className="text-blue-100 mb-6">
                  See our platform in action with a personalized demonstration tailored to your industry and use cases.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-[#00A9E0] hover:bg-[#0088b8] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                    Schedule a Live Demo
                  </button>
                  <button className="w-full border-2 border-white text-white hover:bg-white hover:text-[#0D2C54] px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                    Download Case Studies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D2C54] mb-6">InnoMedia Worldwide Offices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Singapore Office */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-6">Singapore</h3>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p className="font-medium">InnoMedia Pte. Ltd</p>
                <p>Blk 22 Sin Ming Lane #06-88</p>
                <p>Midview City</p>
                <p>Singapore 573969</p>
                <p className="pt-2">Tel: (65) 6248-0808</p>
              </div>
            </div>

            {/* U.S. - Fremont Office */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-6">U.S. – Fremont, CA</h3>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p className="font-medium">InnoMedia Incorporated</p>
                <p>48531 Warm Springs Blvd., Suite 417</p>
                <p>Fremont, CA 94539</p>
                <p className="pt-2">Phone: 1-408-432-5400</p>
              </div>
            </div>

            {/* Taiwan - Hsin-Chu Office */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-6">Taiwan – Hsin-Chu</h3>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p className="font-medium">InnoMedia Technology Inc.</p>
                <p>3F, No. 3, Industrial East Road IX</p>
                <p>Hsinchu Science-Based Industrial Park</p>
                <p>Hsinchu, TAIWAN 300</p>
                <p>Tel: (886) 3-564-1299</p>
                <p>Fax: (886) 3-564-1589</p>
                <div className="border-t border-gray-200 my-4 pt-4">
                  <p className="font-medium">創介科技</p>
                  <p>台灣新竹科學工業園區工業東九路三號三樓</p>
                </div>
              </div>
            </div>

            {/* China - Beijing Office */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0D2C54] mb-6">China – Beijing</h3>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p className="font-medium">InnoMedia Technology (China) Ltd</p>
                <p>Room 302,</p>
                <p>Housha Yu Bailu Guangchang,</p>
                <p>Shunyi District</p>
                <p>Beijing, 101300</p>
                <p>P. R. China</p>
                <div className="border-t border-gray-200 my-4 pt-4">
                  <p className="font-medium">英诺立新</p>
                  <p>北京市顺义区后沙峪白露广场三层302室， 邮编101300</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D2C54] mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about getting started with InnoMedia's AI platform
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#0D2C54] mb-3">How long does implementation typically take?</h3>
              <p className="text-gray-600">
                Implementation timelines vary based on your specific requirements, but most enterprises see initial results within 4-6 weeks. 
                Our team works closely with you to ensure a smooth deployment process.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#0D2C54] mb-3">What kind of support do you provide?</h3>
              <p className="text-gray-600">
                We offer comprehensive support including dedicated account management, technical support, training programs, 
                and ongoing optimization services to ensure your success.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#0D2C54] mb-3">Is my data secure with on-premise deployment?</h3>
              <p className="text-gray-600">
                Absolutely. Our on-premise deployment ensures your data never leaves your infrastructure. 
                We maintain enterprise-grade security standards and compliance with industry regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;