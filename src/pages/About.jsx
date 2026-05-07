import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-16 py-20 text-gray-900 dark:text-white">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold">About Our Platform</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Learn more about what we do and why we built this system
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">

        {/* PLATFORM DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border dark:border-gray-700"
        >
          <h2 className="text-xl font-semibold">Platform Description</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            InternConnect is a modern internship and career platform designed to connect students with real industry opportunities.
            It provides a simple way to discover, apply, and manage internships.
          </p>
        </motion.div>

        {/* PURPOSE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border dark:border-gray-700"
        >
          <h2 className="text-xl font-semibold">Purpose of the System</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            The system aims to bridge the gap between students and companies by providing a transparent, efficient, and accessible internship application platform.
          </p>
        </motion.div>

      </div>
    </div>
  );
}