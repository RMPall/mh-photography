"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/portfolio", label: "Artworks" },
    { href: "/about", label: "Biography" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative overflow-visible">
            {/* Particle effects container - 7 particles representing 7 shades */}
            <div className="absolute -left-3 -top-3 w-20 h-20 pointer-events-none opacity-60">
              {[
                { color: 'from-violet-500', delay: '0s' },
                { color: 'from-purple-500', delay: '0.15s' },
                { color: 'from-fuchsia-500', delay: '0.3s' },
                { color: 'from-pink-500', delay: '0.45s' },
                { color: 'from-rose-500', delay: '0.6s' },
                { color: 'from-orange-500', delay: '0.75s' },
                { color: 'from-amber-500', delay: '0.9s' },
              ].map((particle, i) => {
                const angle = (i * 360) / 7;
                const radius = 30;
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                return (
                  <span
                    key={i}
                    className={`absolute w-1.5 h-1.5 bg-gradient-to-r ${particle.color} to-transparent rounded-full animate-sparkle`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      animationDelay: particle.delay,
                      animationDuration: '2.5s',
                    }}
                  />
                );
              })}
            </div>
            
            {/* Number 7 with animated gradient representing 7 shades */}
            <span className="relative text-3xl md:text-4xl font-serif font-bold">
              <span className="relative z-10 bg-gradient-to-r from-violet-600 via-purple-500 via-fuchsia-500 via-pink-500 via-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent animate-gradient bg-[length:300%_auto]">
                7
              </span>
              {/* Animated glow effect with color cycle - cycles through all 7 shades */}
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-500 via-fuchsia-500 via-pink-500 via-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent opacity-50 blur-lg animate-gradient bg-[length:300%_auto]" style={{ animationDelay: '1.5s' }}>
                7
              </span>
            </span>
            
            {/* Shades text with hover effect */}
            <span className="text-xl md:text-2xl font-serif italic tracking-wide relative group-hover:tracking-wider transition-all duration-300">
              Shades
            </span>
            
            {/* Decorative gradient line on hover */}
            <span className="hidden md:block absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-violet-500 via-purple-500 via-fuchsia-500 to-pink-500 transition-all duration-700 rounded-full" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:opacity-60 transition-opacity duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              className="hover:opacity-60 transition-opacity hidden md:block"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="hover:opacity-60 transition-opacity hidden md:block"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden hover:opacity-60 transition-opacity"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-sm uppercase tracking-[0.15em] hover:opacity-60 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
