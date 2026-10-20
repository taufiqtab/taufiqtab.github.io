---
title: "Vendor Portal"
description: "Portal vendor untuk management order, booking gudang berbasis kalender, dan informasi administratif dealer"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/vendor-portal/cover.jpg"
  alt: "Vendor Portal"
pubDate: 2018-09-01
period: "2018"
company: "Erajaya Group"
platform: "Web Portal"
tags: ["codeigniter", "php", "javascript", "mysql"]
---

## Ringkasan
Vendor Portal adalah aplikasi untuk para vendor Erajaya mengelola order mereka secara mandiri. Bagian yang saya kembangkan paling dalam adalah **modul booking gudang berbasis kalender**: vendor memilih tanggal dan gudang tujuan, sistem mengecek hari libur dan kapasitas gudang, lalu slot dikonfirmasi.

## Latar Belakang
Tanpa sistem booking, jadwal bongkar muat di gudang mudah bentrok. Vendor datang di hari yang sama, kapasitas gudang penuh, atau ternyata hari itu libur. Koordinasi lewat telepon dan chat tidak bisa diskalakan.

## Fitur Utama
- **Management order**: vendor dapat melihat dan mengelola order yang terkait dengan mereka.
- **Booking gudang dengan kalender**: tampilan kalender untuk memilih slot pengiriman.
- **Cek hari libur**: tanggal libur otomatis tidak bisa dipilih.
- **Cek kapasitas gudang**: slot hanya tersedia jika kapasitas gudang masih mencukupi.
- **Informasi administratif dealer**: data administrasi dealer tersedia di satu tempat.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Framework | CodeIgniter |
| Bahasa | PHP, JavaScript |
| Database | MySQL |
| UI | Calendar interaktif |

## Peran Saya
- Membangun modul booking gudang: kalender, aturan hari libur, dan pengecekan kapasitas.
- Mengembangkan fitur management order dan informasi administratif dealer.

## Tantangan & Pembelajaran
Booking terlihat sederhana, tapi aturan bisnisnya yang menentukan. Hari libur, kapasitas, dan konflik jadwal harus dijaga di server, bukan cuma di tampilan kalender, supaya data tetap konsisten walaupun banyak vendor memesan bersamaan.

> Jadwal bongkar muat yang tadinya diatur lewat telepon kini terlihat jelas di satu kalender.
