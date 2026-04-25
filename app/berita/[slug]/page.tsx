import Link from "next/link";
import { notFound } from "next/navigation";

interface BeritaDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  // Generate static paths untuk artikel
  const beritaData = await import("@/data/berita.json").then(m => m.default);
  return beritaData.map((artikel: any) => ({
    slug: artikel.slug,
  }));
}

export async function generateMetadata({ params }: BeritaDetailPageProps) {
  const { slug } = await params;
  const beritaData = await import("@/data/berita.json").then(m => m.default);
  const artikel = beritaData.find((item: any) => item.slug === slug);
  
  if (!artikel) {
    return {
      title: "Artikel Tidak Ditemukan - PantauSampah",
    };
  }

  return {
    title: `${artikel.title} - PantauSampah`,
    description: artikel.excerpt,
  };
}

export default async function BeritaDetailPage({ params }: BeritaDetailPageProps) {
  const { slug } = await params;
  
  // Fetch data dari API route
  try {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const host = process.env.VERCEL_URL || 'localhost:3000';
    const apiUrl = `${protocol}://${host}/api/berita?slug=${slug}`;
    
    const response = await fetch(apiUrl, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      notFound();
    }

    const artikel = await response.json();

    return (
      <div className="w-full">
        {/* Breadcrumb */}
        <div className="bg-gray-50 px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/berita" className="text-green-600 hover:text-green-700">
              ← Kembali ke Daftar Artikel
            </Link>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="relative h-96 bg-gray-300 rounded-lg overflow-hidden mb-8">
              <img
                src={artikel.image}
                alt={artikel.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {artikel.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 border-b-2 border-gray-200 pb-6">
                <div className="flex items-center gap-2">
                  <span className="text-xl">👤</span>
                  <span>Oleh {artikel.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">📅</span>
                  <span>{artikel.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">📖</span>
                  <span>~5 menit membaca</span>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none mb-12">
              {artikel.content.split('\n\n').map((paragraph: string, idx: number) => {
                // Handle bold text
                const formattedParagraph = paragraph.replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong>$1</strong>'
                );

                if (paragraph.startsWith('-')) {
                  // List items
                  return (
                    <ul key={idx} className="list-disc list-inside text-gray-700 my-4 space-y-2">
                      {paragraph.split('-').filter(Boolean).map((item: string, i: number) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item.trim() }} />
                      ))}
                    </ul>
                  );
                } else if (paragraph.includes(':')) {
                  // Highlighted sections
                  return (
                    <div
                      key={idx}
                      className="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded"
                      dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                    />
                  );
                } else {
                  return (
                    <p
                      key={idx}
                      className="text-gray-700 leading-relaxed my-4"
                      dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                    />
                  );
                }
              })}
            </div>

            {/* Related Articles Section */}
            <div className="border-t-2 border-gray-200 pt-12 mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artikel Lainnya</h2>
              <div className="text-center text-gray-600">
                <Link
                  href="/berita"
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  Lihat semua artikel →
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Footer */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Bergabunglah dengan Komunitas PantauSampah
            </h3>
            <p className="text-gray-600 mb-6">
              Jadilah bagian dari gerakan untuk menjaga lingkungan yang lebih baik
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Daftar Sekarang
            </button>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
