import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Import data berita dari JSON lokal
    const beritaData = await import('@/data/berita.json').then(m => m.default);
    
    // Optional: filter berdasarkan query parameter
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (slug) {
      // Jika ada slug parameter, return artikel spesifik
      const artikel = beritaData.find((item: any) => item.slug === slug);
      if (!artikel) {
        return NextResponse.json(
          { error: 'Artikel tidak ditemukan' },
          { status: 404 }
        );
      }
      return NextResponse.json(artikel);
    }
    
    // Return semua berita dengan limit
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 10;
    const articles = beritaData.slice(0, limit);
    
    return NextResponse.json({
      success: true,
      total: beritaData.length,
      limit: limit,
      data: articles
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Gagal mengambil data berita' },
      { status: 500 }
    );
  }
}
