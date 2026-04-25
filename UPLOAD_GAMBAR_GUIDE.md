# 📸 Panduan Upload Gambar PantauSampah

## Struktur Folder Gambar

Semua gambar harus disimpan di folder `public/images/`:

```
public/
└── images/
    ├── logo/
    │   └── [Upload gambar logo di sini]
    └── articles/
        ├── artikel1.jpg
        ├── artikel2.jpg
        └── artikel3.jpg
```

---

## 📍 Lokasi Folder

**Windows:**

```
D:\WAHONO\pemrogramanWeb\pantausampah\public\images\
```

---

## 🎯 Gambar yang Dibutuhkan

### 1. **Logo PantauSampah** (Folder: `public/images/logo/`)

- **Nama file**: `pantausampah-logo.png` atau `pantausampah-logo.jpg`
- **Dimensi yang disarankan**: 200x200 px atau lebih besar
- **Format**: PNG (transparan) atau JPG
- **Deskripsi**: Logo resmi PantauSampah

**Cara gunakan di code:**

```javascript
// Buka: app/layout.tsx
// Uncomment bagian ini:
<Image
  src="/images/logo/pantausampah-logo.png"
  alt="Logo"
  width={40}
  height={40}
/>
```

---

### 2. **Gambar Artikel** (Folder: `public/images/articles/`)

Sesuaikan dengan nama file yang ada di `data/berita.json`:

| File JSON      | Nama File    | Deskripsi                                      |
| -------------- | ------------ | ---------------------------------------------- |
| `artikel1.jpg` | artikel1.jpg | Gambar untuk artikel "Cara Memilah Sampah"     |
| `artikel2.jpg` | artikel2.jpg | Gambar untuk artikel "Ubah Sampah Plastik"     |
| `artikel3.jpg` | artikel3.jpg | Gambar untuk artikel "Dampak Sampah Perkotaan" |

**Dimensi yang disarankan:**

- Width: 600-800 px
- Height: 400-600 px
- Aspek ratio: 4:3 atau 16:9

**Format**: JPG (lebih ringan) atau PNG

---

## 🚀 Cara Upload

### **Metode 1: Copy-Paste File Langsung**

1. Siapkan gambar Anda (7 file total)
2. Buka folder: `public/images/`
3. Buat subfolder: `logo` dan `articles`
4. Copy-paste file:
   - **Logo** → `public/images/logo/`
   - **Artikel** → `public/images/articles/`

### **Metode 2: Via Terminal**

```powershell
# Pindah ke folder project
cd d:\WAHONO\pemrogramanWeb\pantausampah

# Copy file (contoh - sesuaikan path Anda)
Copy-Item "C:\Users\[username]\Downloads\pantausampah-logo.png" -Destination "public/images/logo/"
Copy-Item "C:\Users\[username]\Downloads\artikel1.jpg" -Destination "public/images/articles/"
```

---

## ✅ Update JSON Jika Nama File Berbeda

Jika nama file berbeda dengan yang sudah di-set, update `data/berita.json`:

```json
{
  "id": 1,
  "image": "/images/articles/nama-file-anda.jpg"
}
```

---

## 🖼️ Template Naming Convention

Gunakan naming yang konsisten:

```
Logo:
- pantausampah-logo.png
- pantausampah-icon.jpg

Artikel:
- artikel-memilah-sampah.jpg
- artikel-daur-ulang-plastik.jpg
- artikel-sampah-perkotaan.jpg
```

---

## 📝 Checklist Upload

- [ ] Folder `public/images/logo/` siap
- [ ] Folder `public/images/articles/` siap
- [ ] Logo sudah di-copy ke folder
- [ ] 3 gambar artikel sudah di-copy ke folder
- [ ] Nama file sesuai dengan `data/berita.json`
- [ ] Uncomment logo image di `app/layout.tsx` jika sudah upload

---

## 🔍 Verifikasi

Setelah upload, cek di browser:

1. Halaman home - cek apakah gambar artikel muncul
2. Halaman `/berita` - cek thumbnail artikel
3. Halaman detail artikel - cek hero image
4. Check console browser (F12) untuk error

---

## ❓ Troubleshooting

### Gambar tidak muncul?

**Kemungkinan penyebab:**

1. Nama file tidak sesuai dengan JSON
2. Path tidak benar (pastikan `/images/`, bukan `images/`)
3. Format file tidak didukung
4. File corrupted

**Solusi:**

- Cek nama file: `data/berita.json`
- Cek console browser: F12 → Console
- Cek path: Harus dimulai dengan `/`

---

## 💡 Tips

- Gunakan **JPG** untuk foto (lebih ringan)
- Gunakan **PNG** untuk logo/grafis (lebih sharp)
- Optimasi ukuran gambar sebelum upload (max 500KB per gambar)
- Gunakan tool seperti [TinyPNG](https://tinypng.com/) untuk compress
