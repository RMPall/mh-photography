"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    src: "/images/hero/slide-1.jpg",
    title: "Capturing Life's Moments",
    subtitle: "Professional Photography Services",
  },
  {
    src: "/images/hero/slide-2.jpg",
    title: "Timeless Memories",
    subtitle: "Family & Portrait Photography",
  },
  {
    src: "/images/hero/slide-3.jpg",
    title: "Every Moment Matters",
    subtitle: "Event & Street Photography",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative h-full w-full bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">{image.title}</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 font-light tracking-tight">
                {image.title}
              </h1>
              <p className="text-sm md:text-base uppercase tracking-[0.3em] font-light">
                {image.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-4 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 font-light">Welcome to Mahesh Padmanabhan Photography</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Capturing the beauty of life's most precious moments through the art of photography. 
            From intimate family portraits to vibrant street scenes, every image tells a unique story.
          </p>
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 border border-black text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 md:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 font-light">Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Family & Portraits",
                description: "Capturing authentic moments and connections that you'll treasure forever.",
              },
              {
                title: "Events & Celebrations",
                description: "Professional coverage of your special occasions and milestones.",
              },
              {
                title: "Street & Documentary",
                description: "Telling stories through candid moments and urban landscapes.",
              },
            ].map((service, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-3 border border-black text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 font-light">Let's Work Together</h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            Ready to create something beautiful? Get in touch to discuss your photography needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
