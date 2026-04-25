# 📚 DOKUMENTASI LENGKAP PANTAUSAMPAH WEBSITE

**Tanggal Pembuatan:** 25 April 2026  
**Versi Website:** Next.js 16.2.4 + Tailwind CSS  
**Status:** Production Ready

---

## 📖 DAFTAR ISI

1. [Cara Kerja Website](#cara-kerja-website)
2. [Struktur Folder & File](#struktur-folder--file)
3. [Menambah Halaman Baru](#menambah-halaman-baru)
4. [Mengedit Header & Footer](#mengedit-header--footer)
5. [Memahami API](#memahami-api)
6. [Mengedit Data (Artikel)](#mengedit-data-artikel)
7. [Mengganti Gambar & Logo](#mengganti-gambar--logo)
8. [Deploy ke Internet](#deploy-ke-internet)
9. [Troubleshooting](#troubleshooting)

---

## 🔧 CARA KERJA WEBSITE

### Arsitektur Teknologi

```
┌─────────────────────────────────────────────────┐
│         BROWSER (Client Side)                    │
│  - Melihat halaman, klik link, interaksi user   │
└──────────────────┬──────────────────────────────┘
                   │ HTTP Request
                   ↓
┌─────────────────────────────────────────────────┐
│    NEXT.JS SERVER (Server Side Rendering)       │
│  - App Router: /app → struktur folder = URL     │
│  - Server Components: ambil data langsung       │
│  - Client Components: interaksi user (useState) │
└──────────────────┬──────────────────────────────┘
                   │
        ┌──────────┴──────────┐
        ↓                     ↓
    DATA JSON           API Routes
  (data/berita.json)   (/api/berita)
        │                     │
        └──────────┬──────────┘
                   ↓
          ✅ Render HTML
        Send ke Browser
```

### Flow Akses Halaman

**Home Page (`/`)**

```
1. Browser buka http://localhost:3000/
2. Next.js load app/page.tsx
3. page.tsx render:
   - Layout (header + footer) dari layout.tsx
   - 5 sections: Banner, Services, CTA, Articles, Footer
   - ArticlesList component fetch data dari /api/berita
4. API route /api/berita baca data/berita.json
5. Return JSON, display di halaman
```

**Articles List (`/berita`)**

```
1. Browser buka http://localhost:3000/berita
2. Next.js load app/berita/page.tsx
3. Render ArticlesList component
4. ArticlesList fetch /api/berita → dapatkan 3 artikel
5. Display grid 3 kolom dengan gambar thumbnail
```

**Article Detail (`/berita/[slug]`)**

```
1. Browser buka URL: /berita/cara-memilah-sampah-benar
2. Next.js load app/berita/[slug]/page.tsx
3. Baca params.slug dari URL
4. Fetch /api/berita?slug=cara-memilah-sampah-benar
5. API cari artikel di berita.json dengan slug cocok
6. Display detail artikel + gambar hero
```

---

## 📁 STRUKTUR FOLDER & FILE

```
pantausampah/
│
├── app/
│   ├── layout.tsx                    ← Global layout (Header + Footer)
│   ├── page.tsx                      ← Home page (/)
│   ├── globals.css                   ← Tailwind styles
│   ├── berita/
│   │   ├── page.tsx                  ← Articles list page (/berita)
│   │   └── [slug]/
│   │       └── page.tsx              ← Article detail page (/berita/:slug)
│   ├── api/
│   │   └── berita/
│   │       └── route.ts              ← API endpoint (/api/berita)
│   └── components/
│       ├── ServiceCard.tsx           ← Reusable card (Client Component)
│       └── ArticlesList.tsx          ← Fetch articles (Server Component)
│
├── public/
│   └── images/
│       ├── logo/
│       │   ├── logo.png              ← Logo besar di header (40x40)
│       │   ├── logo-small-16x16.png  ← Logo favicon
│       │   └── logo-small-32x32.png  ← Logo backup
│       └── articles/
│           ├── berita1.jpg           ← Gambar artikel 1
│           ├── berita2.jpg           ← Gambar artikel 2
│           └── berita3.jpg           ← Gambar artikel 3
│
├── data/
│   └── berita.json                   ← Database artikel (JSON)
│
├── DOKUMENTASI_LENGKAP.md            ← File ini!
├── UPLOAD_GAMBAR_GUIDE.md            ← Panduan upload gambar
├── package.json                      ← Dependencies
└── node_modules/                     ← Library (otomatis install)
```

### URL Mapping (Penting!)

| Folder               | File       | URL Path        |
| -------------------- | ---------- | --------------- |
| `app/`               | `page.tsx` | `/`             |
| `app/berita/`        | `page.tsx` | `/berita`       |
| `app/berita/[slug]/` | `page.tsx` | `/berita/:slug` |
| `app/tentang/`       | `page.tsx` | `/tentang`      |
| `app/api/berita/`    | `route.ts` | `/api/berita`   |

**Rule:** Nama file HARUS `page.tsx` (lowercase), folder name = URL path

---

## ➕ MENAMBAH HALAMAN BARU

### Step-by-Step: Menambah Halaman "Tentang Kami"

#### Step 1: Buat Folder Baru

Path: `app/tentang/`

Buka Windows Explorer ke:

```
D:\WAHONO\pemrogramanWeb\pantausampah\app\
```

Klik kanan → New Folder → Ketik `tentang`

#### Step 2: Buat File `page.tsx`

Path: `app/tentang/page.tsx`

Buka VS Code, buat file baru di folder `tentang`:

```typescript
import Link from "next/link";

export default function TentangPage() {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-gray-50 px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-green-600 hover:text-green-700">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tentang PantauSampah
          </h1>
          <p className="text-gray-600 text-lg">
            Kami adalah platform inovatif untuk monitoring pengelolaan sampah di komunitas.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Visi Kami</h2>
          <p className="text-gray-700 leading-relaxed">
            Menciptakan sistem pengelolaan sampah yang transparan, terpadu, dan berkelanjutan
            untuk lingkungan yang lebih bersih di seluruh Indonesia.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Misi Kami</h2>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Memberikan edukasi tentang pengelolaan sampah yang benar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Memudahkan monitoring jadwal pengangkutan sampah</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Menjaga lingkungan melalui daur ulang dan pengurangan limbah</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-600 mb-2">🌱 Berkelanjutan</h3>
              <p className="text-gray-700">Komitmen jangka panjang untuk lingkungan</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-600 mb-2">🤝 Kolaboratif</h3>
              <p className="text-gray-700">Bekerja sama dengan komunitas</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-600 mb-2">💡 Inovatif</h3>
              <p className="text-gray-700">Solusi teknologi terdepan</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
```

#### Step 3: Tambah Link di Navigation

Edit: `app/layout.tsx`

Cari bagian navigation (sekitar line 50):

```typescript
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
  {/* ← TAMBAH INI */}
  <li>
    <Link href="/tentang" className="text-gray-700 hover:text-green-600 transition-colors">
      Tentang
    </Link>
  </li>
  {/* ← SAMPAI SINI */}
  <li>
    <Link href="#kontak" className="text-gray-700 hover:text-green-600 transition-colors">
      Kontak
    </Link>
  </li>
</ul>
```

Juga tambah di footer (section Menu, sekitar line 95):

```typescript
<li><Link href="/berita" className="hover:text-green-400">Berita</Link></li>
<li><Link href="/tentang" className="hover:text-green-400">Tentang</Link></li>  {/* ← TAMBAH */}
<li><Link href="#daftar" className="hover:text-green-400">Daftar</Link></li>
```

#### Step 4: Test Halaman

1. Buka terminal (Ctrl + `)
2. Ketik: `npm run dev`
3. Buka browser: `http://localhost:3000/tentang`

✅ Halaman baru aktif!

---

## ✏️ MENGEDIT HEADER & FOOTER

File yang mengontrol: **`app/layout.tsx`**

### Mengedit Header (Navbar)

Lokasi kode: Line 39-75

#### Ubah Warna Background Header

```typescript
// BEFORE
<header className="bg-white shadow-sm sticky top-0 z-50">

// AFTER (Ganti jadi warna hijau)
<header className="bg-green-600 shadow-sm sticky top-0 z-50">
```

**Tailwind color options:**

- `bg-white`, `bg-gray-50`, `bg-green-500`, `bg-green-600`, `bg-blue-600`, dll

#### Ubah Teks Logo

```typescript
// BEFORE
<span className="font-bold text-xl">
  <span className="text-green-600">Pantau</span>
  <span className="text-gray-800">Sampah</span>
</span>

// AFTER
<span className="font-bold text-xl">
  <span className="text-green-600">Pantau</span>
  <span className="text-gray-800">Lingkungan</span>  {/* Ganti */}
</span>
```

#### Ubah Teks Navigation Link

```typescript
// BEFORE
<Link href="/#layanan" className="...">
  Layanan
</Link>

// AFTER
<Link href="/#layanan" className="...">
  Layanan Kami
</Link>
```

#### Ubah Teks Button

```typescript
// BEFORE
<button className="hidden md:block bg-green-500 text-white px-6 py-2 rounded-lg ...">
  Daftar
</button>

// AFTER
<button className="hidden md:block bg-green-500 text-white px-6 py-2 rounded-lg ...">
  Daftar Sekarang
</button>
```

---

### Mengedit Footer

Lokasi kode: Line 85-160

#### Ubah Informasi Kontak

```typescript
// BEFORE (Section Kontak)
<li>
  <Link href="mailto:pantausampah@gmail.com">
    pantausampah@gmail.com
  </Link>
</li>
<li>
  <Link href="tel:+62213453200">
    +62 21 3453 200
  </Link>
</li>

// AFTER (Ganti email & telepon)
<li>
  <Link href="mailto:kontak@pantausampah.id">
    kontak@pantausampah.id
  </Link>
</li>
<li>
  <Link href="tel:+62212345678">
    +62 21 2345 678
  </Link>
</li>
```

#### Ubah Text Copyright

```typescript
// BEFORE
© 2024 PantauSampah. All rights reserved. | Pantau, Kelola, Jaga Bumi

// AFTER
© 2024 PantauSampah Indonesia. All rights reserved. | Pantau, Kelola, Jaga Bumi
```

#### Tambah Social Media Link

```typescript
// BEFORE
<li>
  <Link href="#" className="hover:text-green-400">Instagram</Link>
  <span> | </span>
  <Link href="#" className="hover:text-green-400">Facebook</Link>
</li>

// AFTER
<li>
  <Link href="https://instagram.com/pantausampah" className="hover:text-green-400">Instagram</Link>
  <span> | </span>
  <Link href="https://facebook.com/pantausampah" className="hover:text-green-400">Facebook</Link>
  <span> | </span>
  <Link href="https://twitter.com/pantausampah" className="hover:text-green-400">Twitter</Link>
</li>
```

---

## 🔌 MEMAHAMI API

File API: **`app/api/berita/route.ts`**

### Konsep Dasar API

```
Browser request: GET /api/berita
                 ↓
            route.ts dijalankan
                 ↓
        Ambil data dari berita.json
                 ↓
         Return JSON response
                 ↓
Browser terima: { success: true, data: [...] }
```

### Struktur Route Handler

```typescript
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // 1. BACA DATA
    const beritaData = await import("@/data/berita.json").then(
      (m) => m.default,
    );

    // 2. PARSE PARAMETER (opsional)
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug"); // Ambil dari ?slug=value

    // 3. PROCESS DATA
    if (slug) {
      const artikel = beritaData.find((item: any) => item.slug === slug);
      if (!artikel) {
        return NextResponse.json(
          { error: "Artikel tidak ditemukan" },
          { status: 404 },
        );
      }
      return NextResponse.json(artikel);
    }

    // 4. RETURN RESPONSE
    const limit = searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : 10;

    const articles = beritaData.slice(0, limit);

    return NextResponse.json({
      success: true,
      total: beritaData.length,
      limit: limit,
      data: articles,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data berita" },
      { status: 500 },
    );
  }
}
```

### Cara Memanggil API dari Browser

```javascript
// GET: Ambil semua artikel (limit 3)
fetch("/api/berita?limit=3")
  .then((res) => res.json())
  .then((data) => console.log(data));
// Response: { success: true, total: 3, limit: 3, data: [...] }

// GET: Ambil artikel spesifik
fetch("/api/berita?slug=cara-memilah-sampah-benar")
  .then((res) => res.json())
  .then((data) => console.log(data));
// Response: { id: 1, slug: "...", title: "...", ... }
```

### Contoh: Tambah Parameter Baru (Filter by Author)

**Edit: `app/api/berita/route.ts`**

Tambah ini setelah line `const limit = ...`:

```typescript
// Ambil parameter author
const author = searchParams.get("author");

// Filter articles berdasarkan author
let articles = beritaData.slice(0, limit);
if (author) {
  articles = beritaData.filter((item: any) =>
    item.author.toLowerCase().includes(author.toLowerCase()),
  );
}
```

Sekarang bisa gunakan:

```javascript
// Cari artikel dari Tim PantauSampah
fetch("/api/berita?author=Tim%20PantauSampah");
```

### Contoh: Buat API Baru (Categories)

**Buat file baru:** `app/api/categories/route.ts`

```typescript
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const beritaData = await import("@/data/berita.json").then(
      (m) => m.default,
    );

    // Extract kategori unik (jika ada field category di JSON)
    const categories = [
      ...new Set(beritaData.map((item: any) => item.category || "Umum")),
    ];

    return NextResponse.json({
      success: true,
      categories: categories,
      total: categories.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching categories" },
      { status: 500 },
    );
  }
}
```

Sekarang bisa akses: `/api/categories`

---

## 📝 MENGEDIT DATA (ARTIKEL)

File data: **`data/berita.json`**

### Struktur Artikel

```json
{
  "id": 1,
  "slug": "cara-memilah-sampah-benar",
  "title": "Cara Memilah Sampah yang Benar di Rumah",
  "excerpt": "Pelajari cara sederhana memilah sampah...",
  "content": "Memilah sampah adalah...\n\n1. **Sampah Organik**: ...",
  "image": "/images/articles/berita1.jpg",
  "date": "3 menit lalu",
  "author": "Tim PantauSampah"
}
```

### Menambah Artikel Baru

1. Buka file: `data/berita.json`
2. Tambah object baru di dalam array:

```json
{
  "id": 4,
  "slug": "cara-membuat-kompos-rumah",
  "title": "Cara Membuat Kompos di Rumah dengan Mudah",
  "excerpt": "Kompos adalah hasil penguraian sampah organik yang dapat digunakan sebagai pupuk alami.",
  "content": "Berikut adalah langkah-langkah membuat kompos di rumah:\n\n1. **Persiapan Wadah**: Siapkan wadah atau tong bekas\n2. **Kumpulkan Bahan**: Kumpulkan sampah organik seperti daun, sisa makanan\n3. **Campur dengan Tanah**: Lapisi dengan tanah untuk mempercepat proses",
  "image": "/images/articles/berita4.jpg",
  "date": "1 menit lalu",
  "author": "Tim PantauSampah"
}
```

**Penting:**

- Jangan lupa koma setelah object sebelumnya
- `slug` harus unique dan lowercase
- `image` harus sesuai nama file di `public/images/articles/`

### Mengedit Artikel Existing

Cari artikel berdasarkan `id` atau `slug`, edit field yang diperlukan:

```json
// BEFORE
{
  "id": 1,
  "slug": "cara-memilah-sampah-benar",
  "title": "Cara Memilah Sampah yang Benar di Rumah",
  "excerpt": "Pelajari cara sederhana..."
}

// AFTER (ubah title)
{
  "id": 1,
  "slug": "cara-memilah-sampah-benar",
  "title": "Panduan Lengkap: Cara Memilah Sampah yang Benar di Rumah",
  "excerpt": "Pelajari cara sederhana..."
}
```

### Menghapus Artikel

Hapus object dari array:

```json
// BEFORE
[
  { "id": 1, ... },
  { "id": 2, ... },
  { "id": 3, ... }
]

// AFTER (hapus id 2)
[
  { "id": 1, ... },
  { "id": 3, ... }
]
```

---

## 🖼️ MENGGANTI GAMBAR & LOGO

### Mengganti Logo

**Lokasi:** `public/images/logo/logo.png`

#### Opsi 1: Ganti File Langsung

1. Siapkan gambar baru (PNG transparent recommended)
2. Rename menjadi: `logo.png`
3. Ganti file di: `public/images/logo/`
4. Refresh browser (F5)

#### Opsi 2: Ganti Nama File

Jika logo dengan nama berbeda, edit `app/layout.tsx` line ~45:

```typescript
// BEFORE
<Image
  src="/images/logo/logo.png"
  alt="Logo"
  width={40}
  height={40}
/>

// AFTER
<Image
  src="/images/logo/nama-logo-baru.png"
  alt="Logo"
  width={40}
  height={40}
/>
```

---

### Mengganti Gambar Artikel

**Lokasi:** `public/images/articles/`

#### Cara Simpel: Replace File

1. Siapkan gambar baru
2. Rename sesuai: `berita1.jpg`, `berita2.jpg`, `berita3.jpg`
3. Copy ke `public/images/articles/`
4. Refresh browser (F5)

#### Jika Ukuran File Berbeda

Ukuran recommended:

- Width: 600-800px
- Height: 400-600px
- Format: JPG (ringan) atau PNG

#### Mengubah Path Gambar di JSON

Edit `data/berita.json`:

```json
// BEFORE
"image": "/images/articles/berita1.jpg"

// AFTER (jika nama file berbeda)
"image": "/images/articles/sampah-organik.jpg"
```

---

## 🚀 DEPLOY KE INTERNET

### Opsi 1: Vercel (Paling Mudah - GRATIS) ⭐

Vercel adalah platform resmi Next.js, cukup 5 menit!

#### Step 1: Persiapan Git

```powershell
cd d:\WAHONO\pemrogramanWeb\pantausampah

# Init git (jika belum)
git init

# Add semua file
git add .

# Commit
git commit -m "Initial commit: PantauSampah website"

# Rename branch ke main
git branch -M main
```

#### Step 2: Push ke GitHub

1. Buat account GitHub (jika belum): https://github.com/signup
2. Buat repository baru: https://github.com/new
   - Name: `pantausampah`
   - Privacy: Public
   - Click "Create repository"

3. Copy URL repository (misal: `https://github.com/USERNAME/pantausampah.git`)

4. Di terminal:

```powershell
# Tambah remote
git remote add origin https://github.com/USERNAME/pantausampah.git

# Push ke GitHub
git push -u origin main
```

#### Step 3: Deploy di Vercel

1. Buka: https://vercel.com
2. Click "New Project"
3. Pilih "Import Git Repository"
4. Pilih repository `pantausampah`
5. Click "Deploy"
6. Tunggu ~3 menit

✅ Website live di: `https://pantausampah.vercel.app`

---

### Opsi 2: Netlify (Alternatif)

1. Buka: https://netlify.com
2. Click "New site from Git"
3. Pilih repository GitHub
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy

✅ Website live di: `https://pantausampah-xxx.netlify.app`

---

### Update Website (Setelah Deploy)

Setiap kali edit code lokal:

```powershell
# Save changes
git add .
git commit -m "Deskripsi perubahan"
git push

# Vercel otomatis deploy dalam 1-2 menit
```

---

## 🔍 TROUBLESHOOTING

### Error: "Module not found"

**Penyebab:** Import path salah  
**Solusi:**

```typescript
// ❌ SALAH
import ArticlesList from "./ArticlesList";

// ✅ BENAR
import ArticlesList from "./ArticlesList.tsx";
```

---

### Error: "Image not showing"

**Penyebab:** Path gambar salah  
**Solusi:** Pastikan:

1. File berada di `public/images/`
2. Path di code sesuai: `/images/articles/berita1.jpg`
3. Nama file lowercase

---

### Page masih menampilkan data lama

**Penyebab:** Browser cache  
**Solusi:**

1. Tekan `Ctrl + Shift + Delete` → Clear cache
2. Atau `Ctrl + F5` (hard refresh)
3. Atau buka incognito mode

---

### Dev server tidak start

**Penyebab:** Port sudah dipakai  
**Solusi:**

```powershell
# Cek port 3000
netstat -ano | findstr :3000

# Kill process (ganti PID dengan nomor yang muncul)
taskkill /PID 1234 /F

# Start lagi
npm run dev
```

---

### Git "fatal: not a git repository"

**Penyebab:** Folder belum di-init git  
**Solusi:**

```powershell
git init
git config user.name "Nama Anda"
git config user.email "email@gmail.com"
git add .
git commit -m "Initial commit"
```

---

## 📋 CHECKLIST PENTING

- [ ] Dev server berjalan: `npm run dev`
- [ ] Semua halaman bisa diakses
- [ ] Gambar semua tampil
- [ ] Link navigation bekerja
- [ ] API endpoint berfungsi
- [ ] Footer kontak ter-update
- [ ] GitHub repository sudah dibuat
- [ ] Deploy ke Vercel/Netlify
- [ ] URL custom domain (opsional)

---

## 📚 REFERENSI COMMAND

```powershell
# Start dev server
npm run dev

# Build untuk production
npm run build

# Jalankan production server
npm run start

# Git commands
git status                    # Lihat perubahan
git add .                     # Stage semua file
git commit -m "pesan"         # Commit dengan pesan
git push                      # Push ke remote
git log                       # Lihat history
git checkout -b fitur-baru    # Buat branch baru
```

---

## 🎓 STRUKTUR PEMBELAJARAN (Recommended)

**Week 1:**

- [ ] Pahami folder structure
- [ ] Jalankan `npm run dev`
- [ ] Kunjungi semua halaman
- [ ] Baca file layout.tsx dan page.tsx

**Week 2:**

- [ ] Buat halaman baru (/tentang)
- [ ] Edit header & footer
- [ ] Update logo & gambar
- [ ] Edit artikel di berita.json

**Week 3:**

- [ ] Pahami API route
- [ ] Tambah parameter API
- [ ] Buat API baru
- [ ] Test dengan fetch()

**Week 4:**

- [ ] Push ke GitHub
- [ ] Deploy ke Vercel
- [ ] Test website live
- [ ] Update domain custom

---

## 💡 TIPS & TRICK

1. **Reload browser setelah edit:** Tekan F5
2. **Cek error di terminal:** Lihat output di console
3. **Backup file sebelum edit:** Ctrl+Z untuk undo
4. **Gunakan VS Code extensions:**
   - Tailwind CSS IntelliSense
   - ES7+ React/Redux/React-Native snippets

---

**Dibuat:** 25 April 2026  
**Diupdate terakhir:** 25 April 2026  
**Versi:** 1.0

---

**Pertanyaan? Baca ulang file ini atau kunjungi section yang relevan!** 📖
