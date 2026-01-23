import { motion } from "framer-motion";
import React from "react";

const Login: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Coming Soon
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          This space will open the doors to your full Glamara experience — where you’ll enter the shop,
          build your cart, place orders, and manage your profile with ease.  
          A personal boutique, designed to move with your life and your style.
        </p>
      </motion.div>
    </section>
  );
};
export default Login;