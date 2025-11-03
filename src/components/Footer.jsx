import React, { useState } from "react";
import { motion } from "framer-motion";

 function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setEmail("");
  };

  return (
    <footer className="bg-[#4b2c21] text-white py-10 px-6 md:px-16 relative overflow-hidden">
      {/* Background pattern circles */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#60392c]/40 rounded-full blur-3xl" />
      <div className="absolute -top-20 right-0 w-96 h-96 bg-[#60392c]/30 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left: Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold tracking-wide">A U R A</h1>
          <p className="text-sm text-gray-300 mt-2">© 2025 Aura. All Rights Reserved.</p>
        </motion.div>

        {/* Center: Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-start md:items-center"
        >
          <h3 className="uppercase text-sm tracking-wider text-gray-200 font-medium">Newsletter Sign Up</h3>
          <p className="text-sm text-gray-400 mt-1 mb-3">Sign up for news and special offers</p>

          <form onSubmit={handleSubmit} className="flex w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="flex-grow px-3 py-2 rounded-l-md text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#e58d71] hover:bg-[#cf7a61] text-white px-4 py-2 rounded-r-md font-semibold"
            >
              {submitted ? "Done" : "Subscribe"}
            </button>
          </form>
        </motion.div>

        {/* Right: Featured & Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-right space-y-4"
        >
          <div>
            <p className="text-sm text-gray-400">Featured On</p>
            <div className="flex justify-end items-center gap-3 text-white text-lg font-semibold mt-1">
              <span>VOGUE</span>
              <span>QR</span>
              <span>ELLE</span>
            </div>
          </div>

          <nav className="text-sm flex flex-wrap justify-end gap-3 text-gray-300">
            <a href="#" className="hover:text-[#e58d71] transition">About</a>
            <a href="#" className="hover:text-[#e58d71] transition">Services</a>
            <a href="#" className="hover:text-[#e58d71] transition">Gallery</a>
            <a href="#" className="hover:text-[#e58d71] transition">Academy</a>
            <a href="#" className="hover:text-[#e58d71] transition">News</a>
            <a href="#" className="hover:text-[#e58d71] transition">Shop</a>
            <a href="#" className="hover:text-[#e58d71] transition">Contact Us</a>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
export default Footer;
