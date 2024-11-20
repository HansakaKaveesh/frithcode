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

{/* Contact Form and Details */}
<div className="container mx-auto py-10 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-2 p-3 border rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-3 border rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full mt-2 p-3 border rounded"
                  placeholder="Enter your message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            <p className="mb-4">
              Have questions? Feel free to reach out to us through the form or
              the contact details below.
            </p>
            <ul className="mb-8">
              <li className="mb-2">
                <strong>Phone:</strong> +1 234 567 890
              </li>
              <li className="mb-2">
                <strong>Email:</strong> info@webdevcompany.com
              </li>
              <li className="mb-2">
                <strong>Address:</strong> 123 Web Development St, Tech City
              </li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509629!2d144.96315761531665!3d-37.81362797975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d3c9da2d22a5!2sMelbourne!5e0!3m2!1sen!2sau!4v1638764516963!5m2!1sen!2sau"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="border rounded"
            ></iframe>
          </div>
        </div>
      </div>





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
