---
title: "Desk Registration"
description: "Event Registration for KOGI, KOPAPDI, ILC, PIT in Bali"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/4.jpg"
  alt: "Assalamu'alaikum"
pubDate: 2025-09-11
tags:
  ["filament", "laravel", "javascript", "tailwind", "livewire", "php"]
---
# Deskripsi Singkat:
Desk Registration adalah sistem manajemen pendaftaran event yang dirancang khusus untuk mengakomodasi empat acara besar: KOGI, KOPAPDI, ILI, dan PIT di Bali. Aplikasi ini menyediakan solusi komprehensif mulai dari pembelian tiket online, pendaftaran mandiri (self-registration), hingga manajemen data peserta di lokasi.

## Fitur Utama Proyek
Pembelian Tiket Online: Peserta dapat dengan mudah membeli tiket untuk event yang mereka pilih melalui platform online.

Self-Registration: Fitur ini memungkinkan peserta untuk melakukan pendaftaran secara mandiri di lokasi event, mempercepat proses check-in dan mengurangi antrean.

Manajemen Data Peserta: Staff event dapat mengakses dan mengelola data peserta dengan mudah, termasuk informasi detail seperti ruangan event, pilihan konsumsi, dan sovenir yang berhak mereka dapatkan.

Integrasi Pembayaran: Sistem ini terintegrasi dengan DOKU Payment Gateway, memungkinkan transaksi pembayaran yang aman dan lancar untuk pembelian tiket.

## Teknologi yang Digunakan
Backend & Manajemen: Laravel Filament digunakan sebagai fondasi backend dan panel administrasi. Filament mempermudah pengelolaan data peserta, tiket, dan informasi event.

Frontend: Livewire dan Tailwind CSS digunakan untuk membangun antarmuka pengguna yang dinamis dan responsif. Livewire memungkinkan pembuatan komponen interaktif tanpa harus menulis JavaScript yang kompleks, sementara Tailwind CSS menyediakan kerangka kerja untuk desain yang cepat dan efisien.

## Tantangan & Pembelajaran
Multi-Database / Multi-Tenant: Tantangan terbesar pada proyek ini adalah mengelola empat event yang berbeda dengan struktur database dan relasi yang tidak seragam (multi-tenant). Masing-masing event memiliki skema data yang unik, sehingga diperlukan arsitektur yang fleksibel untuk dapat beralih dan mengelola data dari setiap database secara independen namun tetap dalam satu aplikasi.

Integrasi Payment Gateway: Mengimplementasikan integrasi DOKU membutuhkan pemahaman mendalam tentang API dan alur pembayaran untuk memastikan semua transaksi diproses dengan benar, aman, dan real-time. Hal ini juga mencakup penanganan notifikasi pembayaran dan status transaksi yang berbeda.

## Kesimpulan
Desk Registration berhasil mengatasi kompleksitas manajemen event skala besar dengan menyediakan solusi terpadu yang efisien. Proyek ini membuktikan kemampuan Laravel Filament dan Livewire dalam menangani tantangan arsitektur multi-tenant dan integrasi pihak ketiga yang kompleks. Dengan fitur-fitur yang disediakan, aplikasi ini secara signifikan meningkatkan efisiensi proses pendaftaran dan memberikan pengalaman yang lebih baik bagi peserta maupun staff event.

## Link
[Desk Registration](https://desk-registration.smactactic.com/)



