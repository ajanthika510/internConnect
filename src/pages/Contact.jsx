import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-16 py-20 text-gray-900 dark:text-white">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          We are here to help you anytime
        </p>
      </motion.div>

      {/* INFO CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border dark:border-gray-700">
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            support@internconnect.com
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border dark:border-gray-700">
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            +94 77 123 4567
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border dark:border-gray-700">
          <h3 className="font-semibold">Location</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Colombo, Sri Lanka
          </p>
        </div>

      </div>

      {/* CONTACT FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 mt-12 p-6 rounded-xl shadow border dark:border-gray-700 max-w-2xl mx-auto space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">
          Send Message
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}