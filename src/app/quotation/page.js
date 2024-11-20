"use client"
import { useState } from "react";
import Link from 'next/link';

const QuotationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
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
    Get Your Project Quotation
    </h1>
    
    {/* Paragraph Animation */}
    <p className="mt-4 text-lg opacity-0 animate-fadeInUp delay-200">
    Partner with us to bring your ideas to life.
    </p>

    {/* Breadcrumb Animation */}
    <p className="mt-4 text-base md:text-lg opacity-0 animate-fadeInUp delay-400">
      <Link href="/" className="text-blue-300 hover:underline dark:text-blue-400">
        Home
      </Link>{' '}
      &gt; Quotation
    </p>
  </div>
</div>

    {/* Quotation Form Section */}
<div
  id="quotation-form"
  className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mx-auto mt-8"
>
  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
    Request a Quotation
  </h2>
  <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
    Fill out the form below and we get back to you with a customized quote for your project.
  </p>
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Grid Layout for Inputs */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Name Input */}
      <div>
        <label
          htmlFor="name"
          className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          placeholder="Your Name"
        />
      </div>
      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          placeholder="Your Email"
        />
      </div>
      {/* Phone Input */}
      <div>
        <label
          htmlFor="phone"
          className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
        >
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          placeholder="Your Phone Number"
        />
      </div>
      {/* Project Type Dropdown */}
      <div>
        <label
          htmlFor="projectType"
          className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
        >
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
        >
          <option value="">Select Project Type</option>
          <option value="website">Website Development</option>
          <option value="ecommerce">E-commerce</option>
          <option value="mobileApp">Mobile App</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
    {/* Budget Input */}
    <div>
      <label
        htmlFor="budget"
        className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
      >
        Estimated Budget
      </label>
      <input
        id="budget"
        type="text"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
        placeholder="Enter your budget"
      />
    </div>
    {/* Project Description */}
    <div>
      <label
        htmlFor="description"
        className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
      >
        Project Description
      </label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
        placeholder="Provide a brief description of your project"
        rows="5"
      ></textarea>
    </div>
    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
    >
      Submit Request
    </button>
  </form>
</div>

    </div>
  );
};

export default QuotationPage;
