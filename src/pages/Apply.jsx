import { useState } from "react";
import { motion } from "framer-motion";

export default function Apply() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!form.name || !form.email || !form.phone) {
      setError("Please fill all required fields");
      return;
    }

    if (!emailRegex.test(form.email)) {
  setError(
    "Email must contain only lowercase letters and numbers"
  );
  return;
}

    if (!phoneRegex.test(form.phone)) {
      setError("Phone must be 10 digits");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  /* ================= SUCCESS SCREEN ================= */
  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-6">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-3xl font-bold text-green-500"
        >
          🎉 Application Submitted!
        </motion.h1>

        <p className="text-gray-600 dark:text-gray-300 mt-3">
          We will contact you soon.
        </p>

        <a href="/">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Back to Home
          </button>
        </a>
      </div>
    );
  }

  /* ================= FORM ================= */
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-6 py-20">

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-white dark:bg-gray-800 border dark:border-gray-700 p-8 rounded-xl shadow space-y-4"
      >

        <h1 className="text-2xl font-bold text-center text-blue-600">
          Apply Now
        </h1>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
        />

        {/* EMAIL */}
        <input
  type="email"
  name="email"
  placeholder="Email"
  onChange={(e) =>
    setForm({
      ...form,
      email: e.target.value.toLowerCase(),
    })
  }
  className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
/>

        {/* PHONE (FIXED - ONLY ONE) */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Cover Message"
          rows="4"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
        />

        {/* FILE UPLOAD */}
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-300">
            Upload CV
          </label>

          <input
            type="file"
            className="w-full mt-2 p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Application
        </button>

      </motion.form>
    </div>
  );
}