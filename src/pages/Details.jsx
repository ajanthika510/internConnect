import { useParams, Link } from "react-router-dom";
import { internships } from "../data/internships";
import { motion } from "framer-motion";

export default function Details() {
  const { id } = useParams();

  const job = internships.find((item) => item.id == id);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
        Job not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-16 py-20 text-gray-900 dark:text-white">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto space-y-6"
      >

        {/* HEADER CARD */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border dark:border-gray-700">
          <h1 className="text-3xl font-bold text-blue-600">
            {job.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {job.company}
          </p>

          <div className="flex flex-wrap gap-3 mt-3 text-sm">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
              {job.location}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full">
              {job.type}
            </span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border dark:border-gray-700">
          <h2 className="text-xl font-semibold">Job Description</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* REQUIREMENTS */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border dark:border-gray-700">
          <h2 className="text-xl font-semibold">Requirements</h2>

          <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300 list-disc ml-5">
            <li>Basic knowledge in the field</li>
            <li>Good communication skills</li>
            <li>Willingness to learn</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <Link to="/apply">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Apply Now
            </button>
          </Link>
        </div>

      </motion.div>
    </div>
  );
}