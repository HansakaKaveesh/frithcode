// pages/contact.js
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';


export default function ContactUs() {
  return (
    <main>
      
      <HeroSection title="Contact Us" breadcrumb="Contact Us" />
      <div className="container mx-auto py-10 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </main>
  );
}
