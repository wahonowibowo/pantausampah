import Link from "next/link";
import { Suspense } from "react";
import { MdArrowBack } from "react-icons/md";
import ArticlesList from "@/app/components/ArticlesList";

export const metadata = {
  title: "Artikel Berita - PantauSampah",
  description: "Baca artikel terbaru tentang pengelolaan sampah dan lingkungan",
};

export default function BeritaPage() {
  return (
    <div className="w-full">
      {/* Banner */}
      <section className="bg-[url('/images/logo/banner2.png')] bg-cover bg-center py-20 sm:py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-green-600 hover:text-gray-700 mb-4">
            <span className="text-2xl"> <MdArrowBack /> </span>
            <span>Kembali ke Beranda</span>
          </Link>
          <h1 className="text-4xl md:text-5xl text-green-700 font-bold mb-4">
            <span className="bg-white opacity-75 py-1 px-2"> Artikel & Berita</span>
          </h1>
          <p className="text-gray-800">
            <span className="bg-white opacity-75 py-1 px-2">Temukan informasi, tips, dan berita terkini tentang pengelolaan sampah</span>
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
