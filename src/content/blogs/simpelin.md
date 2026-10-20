---
title: "Simpelin"
description: "Aplikasi POS & manajemen usaha laundry: arsitektur, infrastruktur, aplikasi mobile Flutter, backend Laravel, dan microservices Golang"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/simpelin/cover.jpg"
  alt: "Simpelin"
pubDate: 2020-03-01
period: "2020"
company: "PT. Simpelin Hidup Kita"
platform: "SaaS · Web & Mobile"
tags: ["laravel", "php", "flutter", "dart", "golang", "microservices", "devops"]
---

## Ringkasan
**Simpelin** adalah aplikasi untuk mengelola usaha laundry, mulai dari kasir (POS) sampai laporan keuangan. Simpelin resmi meluncur pada **2020**. Di project ini peran saya cukup lebar: dari merancang **arsitektur** dan merawat **infrastruktur** (network, server, storage, database), mengembangkan **aplikasi mobile** dengan Flutter, merawat **backend Laravel**, sampai membangun **microservices Golang** dan **auto backup database**.

## Latar Belakang
Usaha laundry punya alur yang padat: order masuk, cucian diproses, diantar kurir, lalu dibayar, sering kali di beberapa outlet sekaligus. Kalau semuanya dicatat manual, pemilik usaha sulit melihat kondisi bisnisnya. Simpelin hadir sebagai asisten pemilik laundry supaya operasional, administrasi, dan pertumbuhan usaha bisa dikelola dari satu aplikasi.

## Fitur Utama
- **Point of Sale & pembayaran**: pencatatan order dan pembayaran, termasuk pembayaran digital.
- **Produksi & kurir**: memantau proses cucian sampai pengantaran.
- **Manajemen pelanggan & karyawan**: data pelanggan, absensi, dan gaji karyawan.
- **Laporan & administrasi**: laporan keuangan, rekap per layanan, dan piutang.
- **Multi-outlet & dashboard**: memantau banyak outlet dan analisis pelanggan.
- **Promosi**: blast WhatsApp ke pelanggan serta memantau pertumbuhan pelanggan lama dan baru.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Aplikasi mobile | Flutter (Dart) |
| Backend utama | Laravel (PHP) |
| Layanan pendukung | Microservices Golang |
| Infrastruktur | Network, server, storage, database |
| Keandalan data | Auto backup database |

## Peran Saya
- Merancang **arsitektur** sistem secara keseluruhan.
- Merawat **network, server, storage, dan database**.
- Mengembangkan **aplikasi mobile** dengan Flutter dan Dart.
- Merawat dan mengembangkan **backend Laravel**.
- Membangun **microservices Golang** untuk beberapa layanan.
- Membuat **auto backup database** supaya data usaha pelanggan tetap aman.

## Tantangan & Pembelajaran
Memegang produk dari lapisan paling bawah (server dan jaringan) sampai aplikasi yang dipakai kasir memberi gambaran utuh tentang bagaimana sebuah SaaS berjalan. Keputusan arsitektur langsung terasa dampaknya ke pengguna, dan data transaksi pelanggan adalah aset yang tidak boleh hilang, karena itu backup otomatis jadi bagian wajib, bukan tambahan.

Memisahkan beberapa layanan ke **microservices Golang** juga jadi pengalaman awal yang berguna, yang kemudian berlanjut di layanan-layanan Golang di Erajaya seperti [UMS](/project/user-management-services) dan [PPS](/project/pps-telkomsel).

## Link
[simpelin.id](https://simpelin.id)

> Dari server sampai layar kasir: satu produk, dipegang dari ujung ke ujung.
