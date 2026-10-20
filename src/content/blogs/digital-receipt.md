---
title: "Digital Receipt"
description: "Service penyimpanan nota pembelian dari POS Erajaya, sebagai sumber data eReporting"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/digital-receipt/cover.jpg"
  alt: "Digital Receipt"
pubDate: 2019-08-01
period: "2019"
company: "Erajaya Group"
platform: "Backend Service"
tags: ["laravel", "php", "rest-api", "mysql"]
---

## Ringkasan
Digital Receipt adalah service yang menyimpan **nota pembelian dari POS** di toko-toko Erajaya secara digital. Data nota ini kemudian dipakai sebagai sumber untuk kebutuhan [eReporting](/project/ereporting).

## Latar Belakang
Nota fisik mudah hilang dan sulit diolah. Dengan menyimpannya secara digital dan terstruktur, data transaksi bisa dipakai lagi untuk pelaporan tanpa input ulang.

## Fitur Utama
- **Penerimaan data dari POS**: nota dikirim dari POS ke service.
- **Penyimpanan terstruktur**: nota disimpan dalam format yang siap diolah.
- **Supply data reporting**: menjadi sumber data untuk eReporting.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Framework | Laravel |
| Bahasa | PHP |
| Integrasi | REST API dari POS |
| Database | MySQL |

## Peran Saya
- Membangun API penerimaan nota dari POS.
- Mendesain struktur penyimpanan nota agar mudah dipakai reporting.

## Tantangan & Pembelajaran
Service yang menerima data dari banyak toko harus toleran terhadap gangguan jaringan dan data ganda. Validasi dan idempotensi menjadi kunci agar nota tidak hilang dan tidak tercatat dua kali.

> Dari struk kertas ke data terstruktur yang siap dilaporkan.
