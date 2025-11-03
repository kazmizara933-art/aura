import React from "react";
import skinproduct from "../assets/skinproduct.jpg"; // replace with your actual image path

 function AboutSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20 gap-10">
        
        {/* LEFT TEXT CONTENT */}
        <div className="flex-1 text-left">
          <p className="uppercase text-gray-500 tracking-widest text-sm mb-3">
            Hello and Welcome
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Providing{" "}
            <span className="italic font-serif font-semibold">
              The Best Skincare Solutions
            </span>{" "}
            Tailored to Your Glow
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Discover a range of luxurious skincare products designed to nourish,
            hydrate, and rejuvenate your skin. From gentle cleansers that remove
            impurities to vitamin-enriched serums that restore radiance, our
            formulas are crafted with natural botanicals and dermatologist-tested
            ingredients for healthy, glowing skin.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether your goal is deep hydration, anti-aging support, or soothing
            sensitive skin, our moisturizers, masks, and toners deliver visible
            results. Each product is enriched with antioxidants, hyaluronic acid,
            and essential oils that help protect your skin barrier, leaving it
            soft, smooth, and luminous all day long.
          </p>

          <div>
            <p className="font-signature text-xl mb-1 italic">John Wilson</p>
            <p className="text-gray-500 text-sm">Founder & Skin Specialist</p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1">
          <img
            src={skinproduct}
            alt="Luxury Skincare Studio"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;