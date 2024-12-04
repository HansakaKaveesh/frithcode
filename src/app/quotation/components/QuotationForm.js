"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    currency: "LKR", // Default currency
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      budget: `${formData.currency} ${formData.budget}`,
      description: formData.description,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, // Your EmailJS service ID
        'template_n1r2qd4', // Your EmailJS template ID (as a string)
        templateParams, // Data to pass to the template
        process.env.NEXT_PUBLIC_USER_ID // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your request has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            projectType: "",
            budget: "",
            currency: "LKR", // Reset currency to default
            description: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("There was an error sending your request. Please try again.");
        }
      );
  };

  return (
    <div className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
        Request a Quotation
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
        Fill out the form below, and we will get back to you with a customized quote for your project.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700"
              placeholder="Your Phone Number"
            />
          </div>
          <div>
            <label htmlFor="projectType" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700"
            >
              <option value="">Select Project Type</option>
              <option value="website">Website Development</option>
              <option value="e_commerce">E-commerce</option>
              <option value="VLE_site">VLE Site</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="budget" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Estimated Budget
          </label>
          <div className="flex items-center">
            <select
              id="currency"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="w-24 px-4 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700"
            >
              <option value="LKR">LKR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
              {/* Add more currencies as needed */}
            </select>
            <input
              id="budget"
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700 ml-2"
              placeholder="Enter your budget"
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700"
            placeholder="Provide a brief description of your project"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default QuotationForm;
