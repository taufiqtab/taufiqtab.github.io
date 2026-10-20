---
title: "Erajaya Modular Application (EMA)"
description: "Aplikasi modular internal: faktur broadcast, tanda terima faktur, dan cleansing IMEI untuk Kemenperin"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/erajaya-modular-application/cover.jpg"
  alt: "Erajaya Modular Application (EMA)"
pubDate: 2019-06-01
period: "2019"
company: "Erajaya Group"
platform: "Web App"
tags: ["laravel", "php", "mysql"]
---

## Ringkasan
Erajaya Modular Application (EMA) adalah aplikasi internal yang dibangun dengan pendekatan **modular**: satu aplikasi, banyak modul, setiap modul menyelesaikan satu kebutuhan operasional. Tiga modul utamanya adalah Faktur Broadcast, pembuatan Tanda Terima Faktur, dan Data Cleansing IMEI produk handphone sebelum datanya diserahkan ke Kementerian Perindustrian.

## Latar Belakang
Proses administrasi faktur dan pelaporan IMEI sebelumnya tersebar di banyak spreadsheet dan email. Data IMEI yang dikirim ke Kemenperin juga harus bersih: format benar, tidak ada duplikat, dan konsisten. Kesalahan di tahap ini berarti kerja ulang dan potensi masalah kepatuhan.

## Fitur Utama
- **Faktur Broadcast**: mendistribusikan faktur ke banyak penerima sekaligus tanpa kirim manual satu per satu.
- **Tanda Terima Faktur**: membuat dokumen tanda terima secara otomatis dan terdokumentasi.
- **Data Cleansing IMEI**: validasi format, deteksi duplikat, dan penandaan data bermasalah sebelum disubmit.
- **Arsitektur modular**: modul baru bisa ditambahkan tanpa mengganggu modul yang sudah berjalan.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Framework | Laravel |
| Bahasa | PHP |
| Database | MySQL |
| Pola | Modular application |

## Peran Saya
- Merancang struktur modul agar setiap fitur bisa berkembang secara independen.
- Membangun alur validasi dan cleansing IMEI dari data mentah sampai siap kirim.
- Mengembangkan modul faktur broadcast dan tanda terima faktur.

## Tantangan & Pembelajaran
Pelajaran terbesar dari EMA adalah nilai dari **validasi di hulu**. Semakin awal data kotor tertangkap, semakin murah memperbaikinya. Pendekatan modular juga membuat aplikasi ini tetap relevan karena kebutuhan baru cukup ditambahkan sebagai modul baru.

> Satu aplikasi, banyak modul: kebutuhan internal yang tadinya tersebar jadi terpusat dan bisa dilacak.
