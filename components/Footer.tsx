import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-4 relative">
              <span className="relative text-2xl font-serif font-bold">
                <span className="bg-gradient-to-r from-violet-500 via-purple-500 via-fuchsia-500 via-pink-500 via-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  7
                </span>
              </span>
              <span className="text-lg font-serif italic">Shades</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">London, United Kingdom</p>
            <a
              href="mailto:hello@7shades.photography"
              className="text-sm hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              hello@7shades.photography
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm uppercase tracking-[0.15em] mb-4">Newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-black text-sm uppercase tracking-[0.15em] hover:bg-gray-200 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} 7 Shades. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
