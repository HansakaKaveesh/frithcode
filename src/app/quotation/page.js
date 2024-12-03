// pages/quotation.js
import Navigation from "../../components/Navigation";
import HeroSection from "../../app/quotation/components/HeroSection";
import QuotationForm from "./components/QuotationForm";

const QuotationPage = () => (
  <div>
    <Navigation />
    <HeroSection
      title="Get Your Project Quotation"
      
      breadcrumb="Quotation"
    />
    <QuotationForm />
  </div>
);

export default QuotationPage;
