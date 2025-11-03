import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// Uncomment and import these as you create the pages
// import AboutPage from "./pages/AboutPage";
// import ServicesPage from "./pages/ServicesPage";
// import PortfolioPage from "./pages/PortfolioPage";
// import BlogPage from "./pages/BlogPage";
// import ShopPage from "./pages/ShopPage";
// import ElementsPage from "./pages/ElementsPage";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="font-sans relative min-h-screen">
        <Navbar />
        <main>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            
            {/* Other Routes - Uncomment as you create these components */}
            {/*
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/elements" element={<ElementsPage />} />
            
            {/* 404 - Not Found Page */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;