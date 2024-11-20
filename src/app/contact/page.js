'use client';
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            We'd love to hear from you! Feel free to reach out with any
            inquiries or feedback.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Company Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Information</h2>
            <p className="mb-4">
              Reach out to us via email or visit our office at the below
              address.
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Address:</strong> 123 Web Dev Lane, Tech City, TX
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@webdevcompany.com" className="text-blue-600">
                  contact@webdevcompany.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong> +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Find Us</h2>
          <div className="relative w-full h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509234!2d144.95373531531826!3d-37.81627974202168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e8a96eb3%3A0x5045675218ce7e33!2zMTIzIFRlc3QgU3QsIFRlc3QgQ2l0eSwgVGVzdCBTdGF0ZQ!5e0!3m2!1sen!2sus!4v1614223138832!5m2!1sen!2sus"
              className="absolute w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
