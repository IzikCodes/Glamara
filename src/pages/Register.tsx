import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import { useState } from "react";

const Register: React.FC = () => {
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
  const rules = {
    length: password.length >= 8,
    number: /\d/.test(password),
    letter: /[a-zA-Z]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
return (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 sm:p-10 mt-6 mb-6"
    >
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-gray-800">
          Welcome to Glamara
        </h1>
        <p className="text-gray-500 mt-2">
          Where style becomes story.
        </p>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            First Name
          </label>
          <input
            type="text"
            placeholder="Your first name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Your last name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-3 space-y-1 text-xs"
          >
            {[
              { label: "At least 8 characters", valid: rules.length },
              { label: "Contains a letter", valid: rules.letter },
              { label: "Contains a number", valid: rules.number },
              { label: "Contains a special character", valid: rules.special },
            ].map((rule, i) => (
              <li key={i} className={`flex items-center gap-2 ${rule.valid ? "text-green-600" : "text-gray-500"}`}>
                <CheckCircle size={14} className={rule.valid ? "opacity-100" : "opacity-30"} />
                {rule.label}
              </li>
            ))}
          </motion.ul>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Repeat your password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold tracking-wide hover:bg-blue-700 transition"
        >
          Create Account
        </button>
      </form>

      <div className="text-center mt-6 text-sm text-gray-500">
        Already part of Glamara?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Log in
        </Link>
      </div>
    </motion.div>
  </section>
  );
};

export default Register;
