import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PantauSampah - Pantau & Kelola Sampah",
  description: "Pantau, Kelola, dan Jaga Bumi - Platform monitoring pengelolaan sampah untuk komunitas",
  keywords: ["sampah", "lingkungan", "recycling", "monitoring"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer id="kontak" className="bg-gray-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Logo Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/images/logo/logo.png" 
                      alt="Logo" 
                      width={40} 
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-bold text-lg">PantauSampah</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Pantau, Kelola, dan Jaga Bumi untuk generasi mendatang.
                </p>
              </div>

              {/* Menu */}
              <div>
                <h4 className="font-semibold mb-4">Menu</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/" className="hover:text-green-400">Beranda</Link></li>
                  <li><Link href="#layanan" className="hover:text-green-400">Layanan</Link></li>
                  <li><Link href="/berita" className="hover:text-green-400">Berita</Link></li>
                  <li><Link href="#daftar" className="hover:text-green-400">Daftar</Link></li>
                </ul>
              </div>

              {/* Kontak */}
              <div>
                <h4 className="font-semibold mb-4">Kontak Kami</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="mailto:pantausampah@gmail.com" className="hover:text-green-400">pantausampah@gmail.com</a></li>
                  <li><a href="tel:+62213453200" className="hover:text-green-400">+62 21 3453 200</a></li>
                  <li className="pt-2 flex gap-4">
                    <a href="#" className="hover:text-green-400">Instagram</a>
                    <a href="#" className="hover:text-green-400">Facebook</a>
                    <a href="#" className="hover:text-green-400">Twitter</a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold mb-4">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-3">Dapatkan update terbaru tentang sampah dan lingkungan.</p>
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded text-sm placeholder-gray-500"
                />
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 PantauSampah. All rights reserved. | Pantau, Kelola, Jaga Bumi</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
