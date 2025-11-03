import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

// NOTE: Replace the mapImage import/source with your own map (static image, map provider iframe, or Leaflet/Mapbox component).
// Example: import mapImage from "../assets/map.jpg";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message cannot be empty";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    // Replace this with real submit logic (API call, email, etc.)
    console.log("Submitting form", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left card: contact details + form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-white/95 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-lg p-8 flex flex-col justify-between"
        >
          <div>
            <p className="text-sm text-[#b56b47] uppercase tracking-wide">How to find us</p>
            <h2 className="text-3xl font-serif text-slate-900 dark:text-slate-100 mt-2">Contact Details</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Have a question or want to work together? Drop us a message and we'll get back to you as soon as
              possible. We typically reply within 24 hours.
            </p>

            <ul className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#b56b47] mt-1" />
                <div>
                  <div className="font-medium">135 Shoreditch High St, London E1 6JE, United Kingdom</div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#b56b47] mt-1" />
                <div>
                  <div className="font-medium">+1 800 603 6035</div>
                  <div className="text-sm text-slate-500">Mon – Sat: 8AM – 10PM</div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#b56b47] mt-1" />
                <div>
                  <div className="font-medium">mail@companyname.com</div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Clock className="w-5 h-5  text-[#b56b47]  mt-1" />
                <div>
                  <div className="font-medium">Sunday: 10AM – 8PM</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="block">
                <span className="text-sm text-slate-600 dark:text-slate-300">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg p-2 border focus:outline-none focus:ring-2 focus:ring-[#b56b47] dark:bg-slate-800 dark:border-slate-700 ${
                    errors.name ? "border-[#b56b47]" : "border-slate-200"
                  }`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="text-[#b56b47] text-sm mt-1">{errors.name}</p>}
              </label>

              <label className="block">
                <span className="text-sm text-slate-600 dark:text-slate-300">Email</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg p-2 border focus:outline-none focus:ring-2 focus:ring-[#b56b47] dark:bg-slate-800 dark:border-slate-700 ${
                    errors.email ? "border-[#b56b47] " : "border-slate-200"
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="text-[#b56b47] text-sm mt-1">{errors.email}</p>}
              </label>
            </div>

            <label className="block mt-3">
              <span className="text-sm text-slate-600 dark:text-slate-300">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className={`mt-1 block w-full rounded-xl p-3 border focus:outline-none focus:ring-2 focus:ring-[#b56b47] dark:bg-slate-800 dark:border-slate-700 ${
                  errors.message ? "border-[#b56b47]" : "border-slate-200"
                }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && <p id="message-error" className="text-[#b56b47] text-sm mt-1">{errors.message}</p>}
            </label>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-[#b56b47] text-white font-medium shadow hover:bg-[#b56b47] focus:outline-none focus:ring-2 focus:ring-[#b56b47]"
              >
                {submitted ? "Sent!" : "Send Message"}
              </button>

              <button
                type="button"
                onClick={() => setForm({ name: "", email: "", message: "" })}
                className="px-3 py-2 rounded-full border text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Clear
              </button>
            </div>
          </form>

          <div className="mt-6 flex gap-4 text-slate-500">
            <a href="#" aria-label="facebook" className="text-slate-400 hover:text-[#b56b47]">FB</a>
            <a href="#" aria-label="twitter" className="text-slate-400 hover:text-[#b56b47]">TW</a>
            <a href="#" aria-label="instagram" className="text-slate-400 hover:text-[#b56b47]">IG</a>
          </div>
        </motion.div>

        {/* Right: map visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 rounded-2xl overflow-hidden relative shadow-inner"
          aria-hidden={false}
        >
          {/* If you want an interactive map, replace the following <img> with a Map component (Leaflet/Mapbox) or an iframe from Google Maps. */}
          <div className="absolute inset-0 lg:rounded-r-2xl">
            <img
              src="/mnt/data/20C19ADE-7AA9-4C7C-81F6-2F0E93697706.jpeg"
              alt="map preview"
              className="w-full h-full object-cover filter saturate-90 brightness-95"
            />

            {/* Location pin */}
            <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90 shadow-lg">
                <div className="w-9 h-9 rounded-full bg-[#b56b47] grid place-items-center text-white font-bold">📍</div>
              </div>
            </div>

            {/* Small floating card on the map */}
            <div className="absolute right-6 bottom-6 bg-white/95 dark:bg-slate-800 rounded-xl p-3 shadow-lg w-56">
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Open hours</div>
              <div className="text-xs text-slate-500 mt-1">Mon - Sat: 8AM - 10PM</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}