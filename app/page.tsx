import Link from "next/link";
import ServiceCard from "./components/ServiceCard";
import ArticlesList from "./components/ArticlesList";
import { Suspense } from "react";
import { MdOutlineCalendarMonth, MdOutlineFlag, MdPayment, MdNotifications, MdGroup, MdListAlt, MdRecycling, MdPublic, MdArrowForward } from "react-icons/md";

export default function Home() {
  return (
    <div className="w-full">
      {/* ================= BANNER SECTION ================= */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-green-600">Pantau</span>
              <span className="text-gray-800">Sampah</span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-gray-700 mb-6">di daerahmu!</h2>

            {/* Slogan */}
            <div className="flex justify-center items-center gap-3 mb-8 flex-wrap">
              <span className="text-lg font-semibold text-gray-800">Pantau</span>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-lg font-semibold text-gray-800">Kelola</span>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-lg font-semibold text-gray-800">Jaga Bumi</span>
            </div>

            {/* Statistics Card */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6 text-lg">
                Mari ikut jaga bumi dengan pantau & kelola sampah di daerahmu di <b>
                  <span className="text-green-600">Pantau</span>
                  <span className="text-gray-800">Sampah</span>
                </b>
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl mb-2 text-green-600"><MdGroup /></div>
                  <p className="text-2xl font-bold text-green-600">7,896</p>
                  <p className="text-sm text-gray-600">Bergabung</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl mb-2 text-green-600"><MdListAlt /></div>
                  <p className="text-2xl font-bold text-green-600">3,876</p>
                  <p className="text-sm text-gray-600">Berlangganan DLH</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl mb-2 text-green-600"><MdRecycling /></div>
                  <p className="text-2xl font-bold text-green-600">12.5K</p>
                  <p className="text-sm text-gray-600">Sampah Terpantau</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl mb-2 text-green-600"><MdPublic /></div>
                  <p className="text-2xl font-bold text-green-600">45</p>
                  <p className="text-sm text-gray-600">Daerah Aktif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="layanan" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Layanan Kami</h2>
            <p className="text-gray-600 text-lg">Gunakan layanan kami dengan mudah dan cepat</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ServiceCard
              icon={<MdOutlineCalendarMonth className="text-green-600" />}
              title="Cek Jadwal"
              description="Lihat jadwal pengangkutan sampah di daerahmu dengan cepat dan mudah. Dapatkan notifikasi real-time untuk tidak ketinggalan jadwal pengangkutan."
            />
            <ServiceCard
              icon={<MdOutlineFlag className="text-green-600" />}
              title="Lapor Masalah"
              description="Laporkan kendala sampah langsung ke pihak terkait. Tim kami akan segera menangani laporan Anda dengan cepat dan profesional."
            />
            <ServiceCard
              icon={<MdPayment className="text-green-600" />}
              title="Bayar Iuran"
              description="Pembayaran iuran sampah menjadi lebih praktis melalui platform kami. Tersedia berbagai metode pembayaran untuk kemudahan Anda."
            />
            <ServiceCard
              icon={<MdNotifications className="text-green-600" />}
              title="Notifikasi"
              description="Terima notifikasi penting tentang jadwal, tips pengelolaan sampah, dan informasi lingkungan langsung ke perangkat Anda."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section id="daftar" className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-xl overflow-hidden shadow-lg">
            {/* Image */}
            <div className="hidden md:flex h-80 bg-gradient-to-br from-green-100 to-blue-100 items-center justify-center">
              <div className="text-6xl">♻️</div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Kelola Sampah Lebih Mudah & Praktis
              </h2>
              <p className="text-gray-600 mb-6">
                Daftar sekarang untuk menikmati layanan pengangkutan resmi DLH, pembayaran iuran yang praktis, serta notifikasi jadwal secara real-time.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mr-2">🚛 DLH Resmi</span>
                <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mr-2">💳 Bayar Iuran</span>
                <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">🔔 Notifikasi</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  Daftar Sekarang
                </button>
                <button className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Masuk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ARTICLES SECTION ================= */}
      <section id="berita" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Artikel Terkait</h2>
            <p className="text-gray-600 text-lg mb-6">Temukan informasi dan edukasi seputar pengelolaan sampah</p>
          </div>

          {/* Articles Grid with Suspense for async Server Component */}
          <Suspense fallback={
            <div className="text-center py-12">
              <p className="text-gray-500">Memuat artikel...</p>
            </div>
          }>
            <ArticlesList />
          </Suspense>
          <div className="mt-12 text-end">
            <Link href="/berita" className="flex items-center gap-2 text-green-600 hover:text-gray-800">
              <span>Lihat semua artikel</span>
              <div className="text-2xl"> <MdArrowForward /> </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
