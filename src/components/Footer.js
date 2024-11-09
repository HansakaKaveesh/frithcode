// In your Next.js component (e.g., `Footer.js`)

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-8 lg:gap-0">
          {/* Logo or Branding */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
            <Image
              src="/Frithcode.png" // Replace with your logo's path
              alt="FrithCode Logo"
              width={150} // Adjust the width as needed
              height={50} // Adjust the height as needed
            />
            <p className="mt-2 text-lg font-light text-gray-200">
              Innovating tech with passion and creativity.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-4 text-gray-200">
              <li>
                <Link href="#" className="hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition duration-300">About</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition duration-300">Services</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition duration-300">Portfolio</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full sm:w-1/2 lg:w-1/3 text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link href="https://www.facebook.com" target="_blank">
                <i className="fab fa-facebook-f text-gray-200 hover:text-white transition duration-300"></i>
              </Link>
              <Link href="https://www.twitter.com" target="_blank">
                <i className="fab fa-twitter text-gray-200 hover:text-white transition duration-300"></i>
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <i className="fab fa-instagram text-gray-200 hover:text-white transition duration-300"></i>
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <i className="fab fa-linkedin-in text-gray-200 hover:text-white transition duration-300"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Stay Updated!</h3>
          <p className="text-gray-200 mb-4">Subscribe to our newsletter for the latest news and updates.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full sm:w-64 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center mt-12 text-gray-200">
          <p>&copy; {new Date().getFullYear()} FrithCode. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
