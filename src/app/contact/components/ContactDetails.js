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
          +94 77 410 9023 / +94 77 035 5100 / +94 74 370 3550
        </li>
        <li className="flex items-center mb-2">
          <FaEnvelope className="mr-2 text-gray-600 dark:text-gray-400" />
          frithcode@gmail.com
        </li>
        <li className="flex items-center mb-2">
          <FaMapMarkerAlt className="mr-2 text-gray-600 dark:text-gray-400" />
          420/A, Thalangama North, Thalangama.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Find Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.431181548974!2d79.929015!3d6.907057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257b7479b4d33%3A0x4a922de175e21329!2sInstitute%20of%20Alexandria!5e0!3m2!1sen!2slk!4v1733137131629!5m2!1sen!2slk"
        width="100%"
        height="300"
        allowFullScreen=""
        loading="lazy"
        className="border rounded dark:border-gray-600"
      ></iframe>
    </div>
  );
}

  