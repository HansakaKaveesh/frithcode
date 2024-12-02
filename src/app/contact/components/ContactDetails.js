// components/ContactDetails.js
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactDetails() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Details</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Have questions? Feel free to reach out to us through the form or the contact details below.
      </p>
      <ul className="mb-8 text-gray-800 dark:text-gray-300">
        <li className="flex items-center mb-2">
          <FaPhone className="mr-2 text-gray-600 dark:text-gray-400" />
          +1 234 567 890
        </li>
        <li className="flex items-center mb-2">
          <FaEnvelope className="mr-2 text-gray-600 dark:text-gray-400" />
          info@webdevcompany.com
        </li>
        <li className="flex items-center mb-2">
          <FaMapMarkerAlt className="mr-2 text-gray-600 dark:text-gray-400" />
          123 Web Development St, Tech City
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Find Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509629!2d144.96315761531665!3d-37.81362797975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d3c9da2d22a5!2sMelbourne!5e0!3m2!1sen!2sau!4v1638764516963!5m2!1sen!2sau"
        width="100%"
        height="300"
        allowFullScreen=""
        loading="lazy"
        className="border rounded dark:border-gray-600"
      ></iframe>
    </div>
  );
}

  