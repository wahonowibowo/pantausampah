import Link from 'next/link';
import articlesData from '@/data/berita.json';

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

// Server Component - langsung import data dari JSON
export default async function ArticlesList() {
  try {
    const articles: Article[] = articlesData || [];

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.id} href={`/berita/${article.slug}`}>
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
              {/* Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{article.date}</span>
                  <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors">
                    Baca
                  </button>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Gagal memuat artikel. Silakan coba lagi.</p>
      </div>
    );
  }
}
