// src/pages/HomePage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import brownwave from "../assets/brownwave.svg"
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import TeamSection from "../components/TeamSection";
import BookAppointment from "../components/BookAppointment";
import ProductsOnline from "../components/ProductsOnline";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


 function Home() {
      const waveVariants = {
    initial: { 
      x: 0,
    },
    animate: {
      x: [0, -50, 0], // Moves left and back
      transition: {
        x: {
          repeat: Infinity,
          duration: 10,
          ease: "linear",
          repeatType: "loop"
        }
      }
    }
  };
  return (
    <>
       <div className="relative font-sans">
      <Navbar />
      <HeroSection />
    </div>
    <section>
      <img src={brownwave} alt="wave" className="" />
      {/* <div className="bg [#fdf9f7]"> */}
        <AboutSection />

      {/* </div> */}
    </section>
    <ServicesSection />
    <Testimonials />
    <TeamSection />
    <BookAppointment />
   
    <ProductsOnline />
    <ContactSection />
    <Footer />
    </>
 
  );
}

export default Home;
