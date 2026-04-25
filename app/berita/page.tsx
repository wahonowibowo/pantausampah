import Link from "next/link";
import { Suspense } from "react";
import ArticlesList from "@/app/components/ArticlesList";

export const metadata = {
  title: "Artikel Berita - PantauSampah",
  description: "Baca artikel terbaru tentang pengelolaan sampah dan lingkungan",
};

export default function BeritaPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-green-100 hover:text-white mb-4 inline-block">
            ← Kembali ke Beranda
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Artikel & Berita</h1>
          <p className="text-xl text-green-100">
            Temukan informasi, tips, dan berita terkini tentang pengelolaan sampah dan lingkungan
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={
            <div className="text-center py-12">
              <p className="text-gray-500">Memuat artikel...</p>
            </div>
          }>
            <ArticlesList />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
