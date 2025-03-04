import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-blue-400">FrithCode</h2>
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses through exceptional web development. We create stunning, 
              functional websites that drive success in the digital landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                ['Home', '/'],
                ['About Us', '/about-us'],
                ['Portfolio', '/portfolio'],
                ['Contact', '/contact'],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link
                    href={url}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:underline">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaEnvelope className="flex-shrink-0 mt-1 mr-3 text-blue-400" />
                <a href="mailto:frithcode@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  frithcode@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="flex-shrink-0 mr-3 text-blue-400" />
                <div className="text-gray-300">
                  <p>+94 77 410 9023</p>
                  <p>+94 77 035 5100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-6">
              {[
                [FaFacebook, 'https://web.facebook.com/Frithcode', 'Facebook'],
                [FaTwitter, 'https://twitter.com', 'Twitter'],
                [FaInstagram, 'https://instagram.com', 'Instagram'],
                [FaLinkedin, 'https://linkedin.com', 'LinkedIn'],
              ].map(([Icon, url, name]) => (
                <Link
                  key={name}
                  href={url}
                  aria-label={`Follow us on ${name}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6 hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FrithCode. All rights reserved.
            </p>
            <div className="hidden md:block">•</div>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}