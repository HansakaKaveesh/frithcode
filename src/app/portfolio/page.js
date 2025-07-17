import Image from 'next/image';
import Link from 'next/link';
import FeaturedProjects from './FeaturedProjects';



export default function PortfolioPage() {
  return (
    <main>
 <div className="relative bg-blue-800 text-white dark:bg-blue-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: 'url("/Aboutus.jpg")',
        }}
      ></div>

      {/* Blue Transparent Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 dark:bg-blue-950/70 backdrop-blur-sm"></div>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center px-6 min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh] py-24 sm:py-28 md:py-36 lg:py-60">
        {/* Heading Animation */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-gray-100 opacity-0 animate-fadeInUp">
          Our Portfolio
        </h1>

        {/* Paragraph Animation */}
        <p className="mt-6 text-lg md:text-xl lg:text-2xl max-w-3xl text-blue-100 opacity-0 animate-fadeInUp delay-200">
          Explore our innovative web solutions for businesses across the globe.
        </p>

        {/* Breadcrumb Animation */}
        
        <p className="mt-4 text-base md:text-lg text-blue-200 opacity-0 animate-fadeInUp delay-400">
          <Link href="/" className="text-blue-300 hover:underline dark:text-blue-400">
            Home
          </Link>{" "}
          &gt; <span className="text-blue-100">Portfolio</span>
        </p>
        
      </div>
    </div>


      {/* Featured Projects Section */}
      <FeaturedProjects />


      {/* Testimonials Section */}





      {/* Contact Us CTA */}
<section className="bg-blue-600 text-white py-16 px-8 text-center">
  <h2 className="text-4xl font-bold mb-4 text-white">Ready to Build Your Website?</h2>
  <p className="mt-4 text-lg text-gray-200 dark:text-gray-100">
    Get in touch with us today to discuss your project and start building something great.
  </p>
  <Link href="/contact"><button className="mt-6 px-6 sm:px-4 py-3 sm:py-2 bg-white text-blue-600 dark:bg-blue-800 dark:text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-700 transition-all">
    Contact Us
  </button></Link>
</section>
    </main>
  );
}
