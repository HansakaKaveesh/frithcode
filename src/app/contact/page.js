import Image from 'next/image';
import Link from 'next/link';



export default function PortfolioPage() {
  return (
    <main>
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
      Our Portfolio
    </h1>
    
    {/* Paragraph Animation */}
    <p className="mt-4 text-lg opacity-0 animate-fadeInUp delay-200">
      Explore our innovative web solutions for businesses across the globe.
    </p>

    {/* Breadcrumb Animation */}
    <p className="mt-4 text-base md:text-lg opacity-0 animate-fadeInUp delay-400">
      <Link href="/" className="text-blue-300 hover:underline dark:text-blue-400">
        Home
      </Link>{' '}
      &gt; Portfolio
    </p>
  </div>
</div>


      {/* Featured Projects Section */}
      


      {/* Testimonials Section */}





      {/* Contact Us CTA */}
<section className="bg-blue-600 text-white py-16 px-8 text-center">
  <h2 className="text-4xl font-bold mb-4 text-white">Ready to Build Your Website?</h2>
  <p className="mt-4 text-lg text-gray-200 dark:text-gray-100">
    Get in touch with us today to discuss your project and start building something great.
  </p>
  <button className="mt-6 px-6 sm:px-4 py-3 sm:py-2 bg-white text-blue-600 dark:bg-blue-800 dark:text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-700 transition-all">
    Contact Us
  </button>
</section>
    </main>
  );
}
