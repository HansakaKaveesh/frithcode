import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm text-gray-400">
          FrithCode is dedicated to empowering businesses through exceptional web development services. Our mission is to create stunning, functional websites that enhance online presence and drive success in the digital landscape.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-sm text-gray-400 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm text-gray-400 hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-gray-400 hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-gray-400 hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm text-gray-400">
            Email: contact@yourstore.com
          </p>
          <p className="text-sm text-gray-400">Phone: +1 234 567 890</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com">
              <FaFacebook className="text-xl hover:text-blue-500" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="text-xl hover:text-blue-400" />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram className="text-xl hover:text-pink-500" />
            </Link>
            <Link href="https://linkedin.com">
              <FaLinkedin className="text-xl hover:text-blue-700" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} FrithCode. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
