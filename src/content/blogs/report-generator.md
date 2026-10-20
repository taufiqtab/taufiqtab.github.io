---
title: "Report Generator"
description: "Service penjadwal report untuk eReporting: antrian, retry saat error, dan distribusi file"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/report-generator/cover.jpg"
  alt: "Report Generator"
pubDate: 2018-10-01
period: "2018"
company: "Erajaya Group"
platform: "Backend Service"
tags: ["laravel", "php", "queue"]
---

## Ringkasan
Report Generator adalah service di belakang [eReporting](/project/ereporting). Tugasnya menjalankan report **terjadwal** melalui **antrian**, mengulang otomatis saat terjadi error, lalu mendistribusikan file hasilnya.

## Latar Belakang
Report berat yang dijalankan bersamaan bisa membebani server dan gagal di tengah jalan. Tanpa antrian dan retry, satu kegagalan berarti report tidak terkirim dan harus dijalankan ulang secara manual.

## Fitur Utama
- **Penjadwalan**: report berjalan otomatis sesuai jadwal yang ditentukan.
- **Antrian (queue)**: job dieksekusi bertahap sehingga beban server terkendali.
- **Error retries**: job yang gagal dicoba ulang otomatis.
- **Distribusi file**: hasil report diteruskan ke kanal tujuan.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Framework | Laravel |
| Mekanisme | Scheduler & Queue worker |
| Bahasa | PHP |
| Output | File report |

## Peran Saya
- Membangun scheduler dan worker untuk eksekusi report.
- Menerapkan mekanisme retry dan pencatatan status job.

## Tantangan & Pembelajaran
Di sistem batch, yang penting bukan hanya berhasil, tapi juga **gagal dengan baik**: tercatat, bisa diulang, dan tidak menyeret job lain ikut gagal.

> Report jalan sendiri sesuai jadwal. Kalau gagal, sistem mencoba lagi sebelum ada yang perlu turun tangan.
