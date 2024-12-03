"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success or error message

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState({ ...formState, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formState;

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, // Load from environment variables
        "template_w4z7zvw", // Replace with your actual template ID
        { name, email, message },
        process.env.NEXT_PUBLIC_USER_ID // Load from environment variables
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormState({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Get In Touch</h2>
      {status && <p className="mb-4 text-sm text-green-500 dark:text-green-400">{status}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formState.name}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium">
            Message
          </label>
          <textarea
            id="message"
            value={formState.message}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
