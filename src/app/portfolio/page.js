import Image from 'next/image';
import Link from 'next/link';
import FeaturedProjects from './FeaturedProjects';



export default function PortfolioPage() {
  return (
    <main>
 <section className="relative min-h-[70vh] flex items-center bg-blue-950 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/man-using-laptop-night-top-view-web-banner-with-copy-space.jpg')] bg-cover bg-center opacity-70 mt-12"
        aria-label="Portfolio background"
        style={{ backgroundAttachment: "fixed" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col md:flex-row items-center md:items-start">
        <div
          className="w-full md:w-2/3 lg:w-1/2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Explore My <span className="text-blue-300">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            A showcase of my best work in web development, design, and digital solutions. Dive in to see how I turn ideas into impactful digital experiences.
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white/20 hover:bg-white/30 text-blue-100 font-semibold px-6 py-3 rounded-lg shadow transition border border-blue-300"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </section>


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
