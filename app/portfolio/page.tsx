"use client";

import { useState } from "react";
import Image from "next/image";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "family", label: "Family" },
    { id: "portraits", label: "Portraits" },
    { id: "events", label: "Events" },
    { id: "street", label: "Street" },
  ];

  // Portfolio images array
  // Naming convention: category-number.jpg (e.g., family-1.jpg, portraits-2.jpg, event-1.jpg)
  // Place your images in: public/images/portfolio/
  const images = [
    { id: 1, category: "family", title: "Family Portrait 1", src: "/images/portfolio/family-1.jpg" },
    { id: 2, category: "family", title: "Family Portrait 2", src: "/images/portfolio/family-2.jpg" },
    { id: 3, category: "family", title: "Family Portrait 3", src: "/images/portfolio/family-3.jpg" },
    { id: 4, category: "portraits", title: "Portrait 1", src: "/images/portfolio/portraits-1.jpg" },
    { id: 5, category: "portraits", title: "Portrait 2", src: "/images/portfolio/portraits-2.jpg" },
    { id: 6, category: "portraits", title: "Portrait 3", src: "/images/portfolio/portraits-3.jpg" },
    { id: 7, category: "events", title: "Event 1", src: "/images/portfolio/event-1.jpg" },
    { id: 8, category: "events", title: "Event 2", src: "/images/portfolio/event-2.jpg" },
    { id: 9, category: "events", title: "Event 3", src: "/images/portfolio/event-3.jpg" },
    { id: 10, category: "street", title: "Street 1", src: "/images/portfolio/street-1.jpg" },
    { id: 11, category: "street", title: "Street 2", src: "/images/portfolio/street-2.jpg" },
    { id: 12, category: "street", title: "Street 3", src: "/images/portfolio/street-3.jpg" },
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
              className="relative aspect-[4/5] bg-gray-200 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer group"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                <p className="text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
