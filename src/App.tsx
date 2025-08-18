import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import SolutionsPage from './pages/SolutionsPage';
import WhyInnoMediaPage from './pages/WhyInnoMediaPage';
import DeploymentPage from './pages/DeploymentPage';
import SolutionIllustrationPage from './pages/SolutionIllustrationPage';
import SMBCustomerSupportPage from './pages/SMBCustomerSupportPage';
import EnterpriseInternalAgentsPage from './pages/EnterpriseInternalAgentsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'platform':
        return <PlatformPage onPageChange={setCurrentPage} />;
      case 'solutions':
        return <SolutionsPage onPageChange={setCurrentPage} />;
      case 'solution-illustration':
        return <SolutionIllustrationPage onPageChange={setCurrentPage} />;
      case 'smb-customer-support':
        return <SMBCustomerSupportPage onPageChange={setCurrentPage} />;
      case 'enterprise-internal-agents':
        return <EnterpriseInternalAgentsPage onPageChange={setCurrentPage} />;
      case 'why-innomedia':
        return <WhyInnoMediaPage onPageChange={setCurrentPage} />;
      case 'deployment':
        return <DeploymentPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;