import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, X } from "lucide-react";
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import member5 from "../assets/member5.jpg";

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  const team = [
    {
      name: "Alan Smith",
      role: "Owner",
      bio: "Alan has over 15 years of experience in skincare and salon management. He specializes in personalized treatments and luxury experiences.",
      image: member1,
    },
    {
      name: "Nikki Anderson",
      role: "Senior Stylist",
      bio: "Nikki is known for her artistry in skin glow therapies and advanced facial rejuvenation treatments.",
      image: member2,
    },
    {
      name: "Bradley Grosh",
      role: "Senior Stylist",
      bio: "Bradley has a passion for natural skincare routines and botanical treatments for radiant, healthy skin.",
      image: member3,
    },
    {
      name: "Jessica Mann",
      role: "Stylist",
      bio: "Jessica specializes in hydrating facials, exfoliation, and essential oils for a youthful look.",
      image: member5,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase text-sm text-gray-500 tracking-widest mb-2">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-light">
            Meet Our{" "}
            <span className="italic font-serif font-semibold">Experts</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((person, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedMember(person)}
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-neutral-800/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-xl font-semibold mb-1">
                  {person.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{person.role}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Name card */}
              <div className="absolute bottom-0 left-0 w-full bg-white p-4 group-hover:opacity-0 transition-opacity duration-500">
                <h4 className="text-lg font-medium text-gray-800">
                  {person.name}
                </h4>
                <p className="text-gray-500 text-sm">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X size={20} />
              </button>

              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-2xl font-semibold mb-1">
                {selectedMember.name}
              </h3>
              <p className="text-gray-500 mb-3">{selectedMember.role}</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {selectedMember.bio}
              </p>

              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
