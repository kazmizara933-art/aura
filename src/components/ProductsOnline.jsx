import React from "react";

// ✅ Import your local images here
// Make sure the image filenames match your actual files in src/assets/
import sell1 from "../assets/sell1.jpg";
import sell2 from "../assets/sell2.jpg";
import sell33 from "../assets/sell33.jpg";
import sell4 from "../assets/sell4.jpg";
import sell5 from "../assets/sell5.jpg";
import sell6 from "../assets/sell6.jpg";
import sell7 from "../assets/sell7.jpg";
import sell8 from "../assets/sell8.jpg";
import sell9 from "../assets/sell9.jpg";
import sell10 from "../assets/sell10.jpg";

export default function ProductsOnline() {
  const products = [
    { id: 1, title: "Liquid Natural Soap", category: "Hand Care", price: "$12.99", oldPrice: "$20.99", image: sell1 },
    { id: 2, title: "Cosmetic Spray", category: "Hair Care", price: "$11.99", image: sell2 },
    { id: 3, title: "Herbal Shampoo", category: "Hair Care", price: "$19.99", oldPrice: "$24.99", sale: true, image: sell33 },
    { id: 4, title: "Cosmetic Wipes", category: "Face Care", price: "$9.99", image: sell4 },
    { id: 5, title: "Organic Face Cream", category: "Face Care", price: "$14.99", oldPrice: "$18.99", sale: true, image: sell5 },
    { id: 6, title: "Aloe Vera Lotion", category: "Body Care", price: "$16.50", image: sell6 },
    { id: 7, title: "Coconut Oil", category: "Hair Treatment", price: "$10.50", image: sell7 },
    { id: 8, title: "Gentle Face Wash", category: "Skin Care", price: "$13.25", oldPrice: "$16.25", sale: true, image: sell8 },
    { id: 9, title: "Natural Lip Balm", category: "Lips Care", price: "$7.50", image: sell9 },
    { id: 10, title: "Rosewater Toner", category: "Face Care", price: "$15.99", image: sell10 },
  ];

  return (
    <section className="bg-rose-50/50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
          Shop Here
        </p>
        <h2 className="text-3xl font-serif text-[#df936d] mb-10">
          Products Online
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col justify-between border border-slate-100 hover:shadow-md transition"
            >
              <div className="relative w-full h-72 bg-white flex items-center justify-center">
                {product.sale && (
                  <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-60 object-contain"
                />
              </div>

              <div className="p-4 text-center">
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                  {product.category}
                </p>
                <h3 className="text-sm font-medium text-slate-800 mb-2">
                  {product.title}
                </h3>

                <div className="flex justify-center items-center space-x-2 mb-4">
                  {product.oldPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="text-sm font-semibold text-slate-800">
                    {product.price}
                  </span>
                </div>

                <button className="w-full bg-[#df936d] hover:bg-[#E8CDBF] text-slate-700 text-sm font-medium py-2 rounded transition flex items-center justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h11L15 13M7 13H5.4"
                    />
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-[#df936d] hover:bg-[#E8CDBF] text-white px-6 py-2 rounded-md text-sm font-medium tracking-wide">
            Shop All Products
          </button>
        </div>
      </div>
    </section>
  );
}
