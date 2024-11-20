import Image from 'next/image';
import Link from 'next/link';
import FeaturedProjects from './FeaturedProjects';


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
      <FeaturedProjects />


      {/* Testimonials Section */}
<section className="py-16 bg-blue-50 dark:bg-gray-900">
  <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-gray-200 mb-12">
    What Our Clients Say
  </h2>
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {[1, 2].map((testimonial) => (
      <div
        key={testimonial}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 text-center border border-gray-200 dark:border-gray-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        {/* Quote Icon */}
        <div className="text-blue-600 dark:text-blue-400 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-10 h-10 mx-auto"
            viewBox="0 0 24 24"
          >
            <path d="M10 9.5c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.09-1.64 3.8-3.73 3.97l-.27.02c-.82 0-1.56.5-1.88 1.27l-.37.9H14.5c-.83 0-1.5-.67-1.5-1.5V9.5zm-7 0C3 6.74 5.24 4.5 8 4.5s5 2.24 5 5c0 2.09-1.64 3.8-3.73 3.97l-.27.02c-.82 0-1.56.5-1.88 1.27l-.37.9H1.5C.67 15 0 14.33 0 13.5V9.5z"></path>
          </svg>
        </div>
        {/* Testimonial Text */}
        <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel dolor vel ipsum
          placerat congue. Ut nec libero quis felis tincidunt pharetra."
        </p>
        {/* Client Info */}
        <h3 className="mt-6 font-semibold text-blue-600 dark:text-blue-400 text-lg">- Client Name</h3>
        <p className="text-gray-500 dark:text-gray-400">Company Name</p>
      </div>
    ))}
  </div>
</section>




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
