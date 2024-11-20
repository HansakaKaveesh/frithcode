'use client';
import React from "react";



const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
          {/* Hero Section */}
          <div className="bg-blue-600 text-white py-10">
            <h1 className="text-4xl font-bold text-center">Contact Us</h1>
            <p className="text-center mt-2">We'd love to hear from you!</p>
          </div>


 {/* Contact Form and Details */}
 <div className="container mx-auto py-10 px-4 md:px-0">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Contact Form */}
    <div className="bg-white dark:bg-gray-800 p-8 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-300 font-medium"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full mt-2 p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-300 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 dark:text-gray-300 font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full mt-2 p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition"
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
    </div>
  );
};

export default Contact;
