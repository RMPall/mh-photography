"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    src: "/images/hero/slide-1.jpg",
    title: "Capturing Life in Seven Shades",
    subtitle: "Every Moment, Infinite Depth",
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
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              {/* Creative 7 Shades Brand Element */}
              {index === 0 && (
                <div className="absolute top-8 md:top-16 left-1/2 -translate-x-1/2 opacity-90">
                  <div className="flex items-center gap-2 relative">
                    {/* Sparkle particles around logo */}
                    <div className="absolute -inset-4 pointer-events-none">
                      {[...Array(7)].map((_, i) => {
                        const angle = (i * 360) / 7;
                        const radius = 25;
                        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                        return (
                          <span
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-sparkle opacity-60"
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                              animationDelay: `${i * 0.2}s`,
                              animationDuration: '2s',
                            }}
                          />
                        );
                      })}
                    </div>
                    <span className="relative text-2xl md:text-3xl font-serif font-bold">
                      <span className="bg-gradient-to-r from-violet-400 via-purple-400 via-fuchsia-400 via-pink-400 via-rose-400 via-orange-400 to-amber-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                        7
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-400 via-fuchsia-400 via-pink-400 via-rose-400 via-orange-400 to-amber-400 bg-clip-text text-transparent opacity-30 blur-sm animate-gradient bg-[length:200%_auto]" style={{ animationDelay: '0.5s' }}>
                        7
                      </span>
                    </span>
                    <span className="text-xl md:text-2xl font-serif italic tracking-wide">
                      Shades
                    </span>
                  </div>
                </div>
              )}
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
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 font-light">
              Welcome to <span className="font-bold">7 Shades</span>
            </h2>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-500 mb-8">
              Capturing Life in Seven Shades
            </p>
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Every moment holds infinite shades of emotion, color, and story. At 7 Shades, we capture the depth and beauty of life's most precious moments through the art of photography. 
            From intimate family portraits to vibrant street scenes, every image reveals a unique spectrum of human experience.
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
