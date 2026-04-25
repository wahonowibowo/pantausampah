'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
              <Image 
                src="/images/logo/logo.png" 
                alt="Logo" 
                width={40} 
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-xl">
              <span className="text-green-600">Pantau</span>
              <span className="text-gray-800">Sampah</span>
            </span>
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex gap-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/#layanan" className="text-gray-700 hover:text-green-600 transition-colors">
                Layanan
              </Link>
            </li>
            <li>
              <Link href="/berita" className="text-gray-700 hover:text-green-600 transition-colors">
                Berita
              </Link>
            </li>
            <li>
              <Link href="#kontak" className="text-gray-700 hover:text-green-600 transition-colors">
                Kontak
              </Link>
            </li>
          </ul>

          {/* Desktop CTA Button */}
          <button className="hidden md:block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold">
            Daftar
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t pt-4">
            <li>
              <Link 
                href="/" 
                className="text-gray-700 hover:text-green-600 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link 
                href="/#layanan" 
                className="text-gray-700 hover:text-green-600 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link 
                href="/berita" 
                className="text-gray-700 hover:text-green-600 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Berita
              </Link>
            </li>
            <li>
              <Link 
                href="#kontak" 
                className="text-gray-700 hover:text-green-600 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
            </li>
            <li>
              <button 
                className="w-full bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Daftar
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
