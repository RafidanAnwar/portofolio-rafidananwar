export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: 'fullstack' | 'frontend' | 'backend';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'siap-spj',
    title: 'SiapSPJ',
    description: 'Sistem manajemen Surat Perjalanan Dinas & keuangan lengkap dengan generate PDF, Excel, dan manajemen checklist verifikasi.',
    longDescription: 'Aplikasi web untuk mengelola seluruh proses Surat Perjalanan Dinas mulai dari pembuatan SPT, pencatatan biaya perjalanan, generate dokumen PDF & Excel, hingga verifikasi oleh bendahara. Dilengkapi dengan fitur multi-role, down payment tracking, dan rincian biaya riil.',
    tech: ['React', 'TypeScript', 'Google Apps Script', 'Vite'],
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'siap-rabi',
    title: 'Siap-Rabi',
    description: 'Aplikasi perencanaan rincian anggaran biaya perjalanan dinas dengan validasi data otomatis dan integrasi Google Spreadsheet.',
    longDescription: 'Platform digital untuk mengelola perencanaan dan pencatatan rincian anggaran biaya perjalanan dinas. Terintegrasi dengan Google Spreadsheet sebagai database, dilengkapi fitur input data cerdas, auto-validation, dan penyimpanan otomatis ke cloud.',
    tech: ['React', 'TypeScript', 'Google Apps Script', 'Vite'],
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'absensi-tad',
    title: 'Absensi TAD',
    description: 'Sistem absensi digital untuk Tenaga Alih Daya BK3 SMD dengan fitur kamera, lokasi GPS, dan export laporan PDF.',
    longDescription: 'Aplikasi absensi berbasis web untuk Tenaga Alih Daya di lingkungan BK3 SMD. Fitur utama meliputi: foto selfie via kamera, pencatatan koordinat GPS, validasi waktu absensi, dashboard admin untuk monitoring, dan export laporan kehadiran dalam format PDF.',
    tech: ['React', 'TypeScript', 'Google Apps Script', 'Vite', 'PWA'],
    category: 'fullstack',
    githubUrl: 'https://github.com/RafidanAnwar/absensiTADbk3smd',
    liveUrl: 'https://absensi-tad-bk3smd.vercel.app',
    featured: true,
  },
  {
    id: 'form-peminjaman',
    title: 'Form Peminjaman Alat',
    description: 'Formulir digital peminjaman peralatan kantor dengan tracking status dan notifikasi otomatis.',
    longDescription: 'Aplikasi formulir digital untuk mengelola peminjaman peralatan kantor. Dilengkapi dengan fitur tracking status peminjaman, riwayat pemakaian, dan sistem notifikasi otomatis untuk pengembalian alat.',
    tech: ['React', 'TypeScript', 'Google Apps Script'],
    category: 'fullstack',
    featured: true,
  },

  {
    id: 'indoeka-web',
    title: 'IndoEka Web',
    description: 'Website perusahaan profesional dengan UI modern, animasi halus, dan optimasi performa.',
    longDescription: 'Website korporat yang dibangun menggunakan React dengan fokus pada pengalaman pengguna yang premium. Menampilkan halaman beranda, tentang kami, layanan, dan kontak dengan transisi yang smooth.',
    tech: ['JavaScript', 'React', 'CSS'],
    category: 'frontend',
    githubUrl: 'https://github.com/RafidanAnwar/indoeka-web',
    liveUrl: 'https://indoeka-web.vercel.app',
    featured: true,
  },
  {
    id: 'bankakp-rebuild',
    title: 'Bank AKP Rebuild',
    description: 'Aplikasi simulasi perbankan dengan fitur transaksi, saldo, dan riwayat keuangan.',
    longDescription: 'Rebuild dari aplikasi simulasi perbankan dengan antarmuka yang lebih modern. Menyediakan fitur simulasi transfer, cek saldo, riwayat transaksi, dan manajemen akun nasabah.',
    tech: ['JavaScript', 'React', 'Node.js'],
    category: 'fullstack',
    githubUrl: 'https://github.com/RafidanAnwar/bankakp-rebuild',
    liveUrl: 'https://bankakp-rebuild.vercel.app',
    featured: true,
  },
];

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string; // emoji or SVG
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, icon: 'https://cdn.simpleicons.org/react/61DAFB', category: 'frontend' },
  { name: 'TypeScript', level: 85, icon: 'https://cdn.simpleicons.org/typescript/3178C6', category: 'frontend' },
  { name: 'JavaScript', level: 90, icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', category: 'frontend' },
  { name: 'HTML & CSS', level: 92, icon: 'https://cdn.simpleicons.org/html5/E34F26', category: 'frontend' },
  { name: 'Vite', level: 80, icon: 'https://cdn.simpleicons.org/vite/646CFF', category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 75, icon: 'https://cdn.simpleicons.org/nodedotjs/339933', category: 'backend' },
  { name: 'Google Apps Script', level: 88, icon: 'https://cdn.simpleicons.org/google/4285F4', category: 'backend' },
  { name: 'Python', level: 70, icon: 'https://cdn.simpleicons.org/python/3776AB', category: 'backend' },

  // Mobile
  { name: 'Flutter', level: 60, icon: 'https://cdn.simpleicons.org/flutter/02569B', category: 'mobile' },
  { name: 'PWA', level: 75, icon: 'https://cdn.simpleicons.org/pwa/5A0FC8', category: 'mobile' },

  // Tools
  { name: 'Git & GitHub', level: 85, icon: 'https://cdn.simpleicons.org/github/FFFFFF', category: 'tools' },
  { name: 'Vercel', level: 80, icon: 'https://cdn.simpleicons.org/vercel/FFFFFF', category: 'tools' },
];

export const socialLinks = {
  github: 'https://github.com/RafidanAnwar',
  linkedin: 'https://www.linkedin.com/in/rafidan-anwar-0910242b1',
  email: 'rafidananwar24@gmail.com',
  instagram: '#', // Update with your Instagram
};

export const personalInfo = {
  name: 'Rafidan Anwar',
  title: 'Full Stack Developer',
  tagline: 'Membangun solusi digital yang efisien & berdampak.',
  bio: 'Seorang Junior Web Developer yang sangat antusias dan selalu ingin belajar. Memiliki pengalaman mengembangkan aplikasi web menggunakan React, TypeScript, dan teknologi web modern lainnya. Berangkat dari latar belakang sistem informasi dan pengalaman magang, saya berkomitmen untuk terus mengasah keterampilan teknis saya secara konsisten demi memberikan kontribusi nyata dan menciptakan solusi digital yang efisien.',
  location: 'Samarinda, Indonesia',
  phone: '081352259053',
  avatarUrl: 'https://avatars.githubusercontent.com/u/160746766?v=4',
  resumeUrl: '#', // We will replace this with direct download
};

export const experience = [
  {
    role: 'IT Intern (Maganghub Kemnaker)',
    company: 'BalaiK3 Samarinda',
    period: '4 Bulan',
    description: 'Terlibat penuh dalam pengembangan dan pemeliharaan sistem informasi internal. Membangun dan mengembangkan sistem manajemen aplikasi seperti siap-rabi, siapSPJ, AbsensiTAD, dan form peminjaman alat menggunakan stack React, TypeScript, dan Google Apps Script.'
  }
];

export const education = [
  {
    school: 'STMIK Widya Cipta Dharma',
    degree: 'S.Kom., Teknik Informatika',
    period: '2021 - 2025 (Fresh Graduate)',
    description: 'Lulusan dengan fokus pada pengembangan perangkat lunak.'
  }
];
