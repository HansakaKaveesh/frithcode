// src/pages/services/web-development.js
import Image from 'next/image';
import Link from 'next/link';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section with Background Image */}
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
          <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100">
          Web Development Services
          </h1>
          <p className="mt-4 text-lg">
          Creating modern, scalable, and user-friendly websites tailored to your needs.
        </p>
          <p className="mt-4 text-base md:text-lg">
            <Link href="/" className="text-blue-300 hover:underline dark:text-blue-400">
              Home
            </Link>{' '}
            &gt; Services &gt; Web Development
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
<section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
  <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-400 mb-12">Why Choose Us?</h2>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {[
      { src: "/Services/custom-design.png", title: "Custom Design", description: "Tailored website designs that reflect your unique brand and goals, making your online presence truly stand out." },
      { src: "/Services/secure.png", title: "Secure & Fast", description: "Our websites are highly optimized, secure, and provide a seamless user experience, ensuring both speed and safety." },
      { src: "/Services/support.png", title: "Ongoing Support", description: "We provide reliable support to ensure your website remains up-to-date and performs optimally at all times." }
    ].map((item, index) => (
      <div
        key={index}
        className="text-center bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow rounded-lg p-8 transform hover:scale-105"
      >
        <div className="relative w-20 h-20 mx-auto">
          <Image src={item.src} alt={item.title} fill className="object-contain" />
        </div>
        <h3 className="text-2xl font-semibold mt-6 text-blue-600 dark:text-blue-300">{item.title}</h3>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{item.description}</p>
      </div>
    ))}
  </div>
</section>

{/* Services We Offer Section */}
<section className="bg-gray-100 py-16 px-8 dark:bg-gray-800">
  <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-400 mb-12">Our Web Development Services</h2>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {[
      { title: "Front-End Development", description: "Create interactive and responsive interfaces using modern frameworks like React and Next.js, ensuring your website stands out." },
      { title: "Back-End Development", description: "Build scalable and robust server-side logic for seamless data handling, ensuring your website functions optimally." },
      { title: "E-Commerce Solutions", description: "We design custom online stores to enhance your e-commerce experience and boost sales with user-friendly features." }
    ].map((service, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl rounded-lg p-8 transform hover:scale-105 transition-all"
      >
        <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-300">{service.title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
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


    </div>
  );
};

export default WebDevelopment;
