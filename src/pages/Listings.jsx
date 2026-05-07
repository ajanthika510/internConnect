import { useState } from "react";
import { motion } from "framer-motion";
import { internships } from "../data/internships";
import { Link } from "react-router-dom";

export default function Listings() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  const filteredJobs = internships.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || job.category === category) &&
      (type === "" || job.type === type)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 md:px-16 py-20">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center">
        Internship Opportunities
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
        Discover and apply for real internships
      </p>

      {/* 🔍 SEARCH + FILTER BAR */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search internships..."
          className="w-full md:w-1/3 p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* CATEGORY FILTER */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
        >
          <option value="">All Categories</option>
          <option value="IT">IT</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Business">Business</option>
        </select>

        {/* TYPE FILTER */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
        >
          <option value="">All Types</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>

      </div>

      {/* CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >

            <h2 className="text-lg font-semibold text-blue-600">
              {job.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {job.company}
            </p>

            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <p>{job.location}</p>
              <p>{job.type}</p>
              <p className="text-blue-500">{job.category}</p>
            </div>

            <Link to={`/details/${job.id}`}>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </Link>

          </motion.div>
        ))}

      </div>

      {/* EMPTY STATE */}
      {filteredJobs.length === 0 && (
        <div className="text-center mt-12 text-gray-500">
          No internships found.
        </div>
      )}

    </div>
  );
}