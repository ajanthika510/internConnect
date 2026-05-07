import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative scroll-smooth text-gray-900 dark:text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 -z-20">
        <iframe
          src="https://my.spline.design/3dpathslines1copycopy-BUxe599Bqs1Mwj36QA9wde5X/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="bg"
          className="w-full h-full"
        />
      </div>

      {/* overlay */}
      <div className="fixed inset-0 bg-white/70 dark:bg-black/60 -z-10" />

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center px-6 md:px-16 py-4">

          <h1 className="font-bold text-xl text-blue-600">
            InternConnect
          </h1>

          <nav className="hidden md:flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#cta">Start</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">

            <button
              onClick={toggleTheme}
              className="px-3 py-2 rounded-lg border text-sm dark:border-gray-700"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>

            <Link to="/listings">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                Explore
              </button>
            </Link>

          </div>
        </div>
      </header>

      <div className="h-20"></div>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold">
              Build Your <span className="text-blue-600">Career</span> Faster
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md">
              Discover internships, gain real experience, and connect with companies.
            </p>

            <div className="mt-6 flex gap-4">
              <Link to="/listings">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
              </Link>

              <a href="#features">
                <button className="px-6 py-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  Learn More
                </button>
              </a>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center"
          >
            <img
              src="/man.png"
              className="w-[360px] drop-shadow-2xl"
              alt="hero"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-24 px-6 md:px-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "Real Internships", desc: "Verified companies." },
            { title: "Skill Growth", desc: "Hands-on experience." },
            { title: "Fast Hiring", desc: "Direct recruiters." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how" className="py-24 px-6 md:px-16 bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          {["Create Profile", "Browse Jobs", "Apply"].map((step, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <div className="text-blue-600 font-bold text-2xl">{i + 1}</div>
              <p className="mt-2">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="cta" className="py-28 text-center">
        <h2 className="text-4xl font-bold">Ready to start?</h2>
        <Link to="/listings">
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Start Now
          </button>
        </Link>
      </section>

    </div>
  );
}