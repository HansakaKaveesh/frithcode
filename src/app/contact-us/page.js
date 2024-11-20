import React from "react";
import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-800 text-white dark:bg-blue-900">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url("/Aboutus.jpg")', // Adjust the image path accordingly
    }}
  ></div>

  {/* Blue Transparent Overlay */}
  <div className="absolute inset-0 bg-blue-900 bg-opacity-50 dark:bg-opacity-70"></div>

  {/* Overlay Content */}
  <div className="relative container mx-auto min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh] py-24 sm:py-28 md:py-36 lg:py-60 text-center flex flex-col justify-center">
    {/* Heading Animation */}
    <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 opacity-0 animate-fadeInUp">
    Contact Us
    </h1>
    
    {/* Paragraph Animation */}
    <p className="mt-4 text-lg opacity-0 animate-fadeInUp delay-200">
    We'd love to hear from you!
    </p>

    {/* Breadcrumb Animation */}
    <p className="mt-4 text-base md:text-lg opacity-0 animate-fadeInUp delay-400">
      <Link href="/" className="text-blue-300 hover:underline dark:text-blue-400">
        Home
      </Link>{' '}
      &gt; Contact Us
    </p>
  </div>
</div>


 

    </div>
  );
};

export default ContactUs;
