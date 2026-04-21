# 🚀 Rafidan Anwar - Professional Web Portfolio

Ini adalah repositori untuk website portofolio profesional milik **Rafidan Anwar**, seorang *Junior Web Developer* yang antusias dalam menciptakan solusi digital dengan UI/UX yang modern dan efisien.

Website portofolio ini dibangun dengan menggunakan teknologi web modern untuk menjamin performa terbaik, desain yang premium (*Glassmorphism* & *Dark Theme*), dan responsivitas pada segala jenis perangkat.

## ✨ Fitur Utama

- **Modern & Premium Design**: Tema gelap dengan aksen gradien biru-violet (*Dark-Space Theme*) dilengkapi dengan efek *glassmorphism* modern.
- **Micro-Animations & Interaktif**: Animasi teks mengetik otomatis pada Hero, perhitungan stat dinamis, *shimmer effect*, dan *scroll-triggered animations*.
- **ATS CV Generator Terintegrasi**: Pengunjung/HRD dapat mengunduh CV dalam bentuk PDF yang *ATS-friendly* secara langsung. PDF dibentuk secara otomatis di sisi *client* tanpa perlu server tambahan.
- **Customizable Data**: Semua data portofolio mulai dari profil, sosial media, riwayat pendidikan, hingga daftar project terpusat pada satu file data (Single Source of Truth).
- **SEO Ready**: Tag metadata telah dioptimalisasi.
- **GitHub Actions Auto-Deploy**: Siap di-deploy secara otomatis ke GitHub Pages kapan pun ada push baru ke repositori.

## 🛠️ Tech Stack & Library

- **Framework**: [React 19](https://react.dev/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)

## 📁 Struktur Folder Utama

\`\`\`text
d:\project\web porto\
├── .github/workflows/    # Konfigurasi Auto-Deploy via GitHub Actions
├── public/               # Asset statik publik
├── src/
│   ├── components/       # Komponen UI (Navbar, Hero, About, Skills, dll)
│   ├── data/
│   │   └── projects.ts   # 🗄️ File Data Utama (Edit info portofolio di sini)
│   ├── hooks/            # Custom React Hooks (Animasi, Counter, Typing)
│   ├── utils/
│   │   └── generateCV.ts # Logika pembuatan CV ATS bentuk PDF
│   ├── App.tsx           # Layout Wrapper utama
│   └── index.css         # Design System (Variabel CSS dan animasi dasar)
├── index.html            # Entry point web dan SEO Tags
└── vite.config.ts        # Konfigurasi bundler Vite
\`\`\`

## ⚙️ Instalasi Lokal

Jika Anda ingin menjalankan atau memodifikasi portofolio ini di komputer lokal Anda, ikuti langkah berikut:

### 1. Prasyarat
Pastikan Anda sudah menginstal NodeJS & NPM di komputer Anda.

### 2. Clone Repositori
\`\`\`bash
git clone https://github.com/username-anda/nama-repo-portofolio.git
cd nama-repo-portofolio
\`\`\`

### 3. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 4. Jalankan Development Server
\`\`\`bash
npm run dev
\`\`\`
Browser akan otomatis berjalan, atau Anda dapat membuka manual di url \`http://localhost:5173\` (atau 5174 sesuai info terminal).

## 📝 Cara Memperbarui Konten (Data)

Untuk menambahkan project baru, mengubah deskripsi bio, atau menyesuaikan tingkat kemampuan (*skills*), Anda **tidak perlu mengutak-atik desain atau komponen**. Cukup buka file ini:

👉 **`src/data/projects.ts`**

Semua variabel seperti `personalInfo`, `socialLinks`, `skills`, `projects`, `experience`, hingga `education` tersedia dengan format objek TypeScript yang sangat mudah disesuaikan. *Counter* dan list project di web akan merespons secara otomatis layaknya sebuah database mini.

## 🚢 Deployment

Proyek ini telah dikonfigurasi untuk mudah dihosting secara gratis lewat **GitHub Pages**:
1. Pastikan Anda mengaktifkan **GitHub Actions** dari bagian *Source* pada *Settings > Pages* di repository GitHub Anda.
2. Proses rilis situs web (*build & deploy*) akan berlangsung otomatis tanpa konfigurasi rumit.

---
> Dibangun dengan dedikasi tinggi oleh [Rafidan Anwar](https://github.com/RafidanAnwar/).
