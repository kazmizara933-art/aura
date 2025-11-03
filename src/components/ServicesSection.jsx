import React from "react";
import { Sparkles, Droplets, Heart, Leaf } from "lucide-react"; // icon library

 function ServicesSection() {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12 text-[#cf8263] mb-4" />,
      title: "Facial Treatments",
      description:
        "Deep cleansing, exfoliation, and rejuvenating facials designed to brighten your complexion and restore natural radiance.",
    },
    {
      icon: <Droplets className="w-12 h-12 text-[#cf8263] mb-4" />,
      title: "Hydration Therapy",
      description:
        "Infuse your skin with essential moisture and nutrients through advanced hydration masks and serums that leave skin glowing.",
    },
    {
      icon: <Leaf className="w-12 h-12 text-[#cf8263] mb-4" />,
      title: "Organic Skin Rituals",
      description:
        "Experience botanical-rich treatments using natural plant extracts to detoxify, soothe, and balance your skin barrier.",
    },
    {
      icon: <Heart className="w-12 h-12 text-[#cf8263] mb-4" />,
      title: "Anti-Aging Solutions",
      description:
        "Target fine lines, wrinkles, and dullness with collagen-boosting therapies that enhance elasticity and youthful vitality.",
    },
  ];

  return (
    <section className="bg-[#fdf9f7] py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Heading */}
        <div className="mb-12 text-left">
          <p className="uppercase text-gray-500 tracking-widest text-sm mb-2">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
            Services That <br />
            <span className="text-[#cf8263]">We Offer</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 text-center rounded-2xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <button className="text-[#cf8263] font-medium hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ServicesSection;
