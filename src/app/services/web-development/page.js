// src/pages/services/web-development.js
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import OurServices from './components/OurServices';
import ContactCTA from './components/ContactCTA';
import ClientWorks from './components/ClientWorks';

const WebDevelopment = () => {
  return (
    <div>

    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <ClientWorks />
      <ContactCTA />
    </div>
    </div>
  );
};

export default WebDevelopment;
