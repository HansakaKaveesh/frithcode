// pages/quotation.js

import HeroSection from "../../app/quotation/components/HeroSection";
import QuotationForm from "./components/QuotationForm";

const QuotationPage = () => (
  <div>
    
    <HeroSection
      title="Get Your Project Quotation"
      
      breadcrumb="Quotation"
    />
    <QuotationForm />
  </div>
);

export default QuotationPage;
