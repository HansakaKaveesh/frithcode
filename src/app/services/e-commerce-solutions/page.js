// src/pages/services/web-development.js
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import OurServices from './components/OurServices';
import ContactCTA from './components/ContactCTA';
import Navigation from "../../../components/Navigation";

const ecommerce = () => {
  return (
    <div>
      <Navigation/>
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <ContactCTA />
    </div>
    </div>
  );
};

export default ecommerce;
