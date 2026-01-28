import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 sm:p-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-gray-800">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Enter your boutique and continue your Glamara story.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@glamara.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>
            <Link to="#" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold tracking-wide hover:bg-blue-700 transition"
          >
            Enter Glamara
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-500">
          New to Glamara?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Login;