"use client";

import { useState } from "react";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "family", label: "Family" },
    { id: "portraits", label: "Portraits" },
    { id: "events", label: "Events" },
    { id: "street", label: "Street" },
  ];

  const images = [
    { id: 1, category: "family", title: "Family Portrait 1" },
    { id: 2, category: "family", title: "Family Portrait 2" },
    { id: 3, category: "portraits", title: "Portrait 1" },
    { id: 4, category: "events", title: "Event 1" },
    { id: 5, category: "street", title: "Street 1" },
    { id: 6, category: "family", title: "Family Portrait 3" },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 font-light">
          Portfolio
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`text-xs uppercase tracking-[0.15em] pb-2 transition-colors ${
                activeCategory === category.id
                  ? "border-b-2 border-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="aspect-[4/5] bg-gray-200 hover:opacity-90 transition-opacity cursor-pointer group"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
