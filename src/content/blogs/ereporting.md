---
title: "eReporting (Azec Reporting Revamp)"
description: "Generate report ke tiap company grup dengan custom query dan distribusi via email, SFTP, dan file"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/ereporting/cover.jpg"
  alt: "eReporting (Azec Reporting Revamp)"
pubDate: 2018-11-01
period: "2018"
company: "Erajaya Group"
platform: "Web App"
tags: ["laravel", "php", "sql", "sftp"]
---

## Ringkasan
eReporting adalah revamp dari sistem pelaporan lama (AzecReporting). Aplikasi ini memungkinkan tim membuat report untuk **masing-masing company** yang tergabung dalam grup, dengan **custom query** dan beberapa tipe distribusi: **email, SFTP, dan file**.

## Latar Belakang
Setiap company punya kebutuhan report yang berbeda. Membuat report satu per satu secara manual memakan waktu dan rawan salah kirim. Dibutuhkan satu tempat untuk mendefinisikan report, menjadwalkannya, dan mengirimkannya ke tujuan yang tepat.

## Fitur Utama
- **Custom query**: report didefinisikan lewat query sesuai kebutuhan tiap company.
- **Multi distribusi**: hasil report dikirim via email, SFTP, atau disimpan sebagai file.
- **Per company**: konfigurasi report terpisah untuk setiap company dalam grup.
- **Terintegrasi Report Generator**: eksekusi terjadwal diserahkan ke service khusus.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Framework | Laravel |
| Bahasa | PHP, SQL |
| Distribusi | Email, SFTP, File |
| Pendamping | Report Generator service |

## Peran Saya
- Mengembangkan modul definisi report dengan custom query.
- Membangun mekanisme distribusi ke email, SFTP, dan file.
- Melakukan revamp dari sistem reporting sebelumnya.

## Tantangan & Pembelajaran
Memisahkan *apa* yang dilaporkan (eReporting) dari *bagaimana* report dijalankan ([Report Generator](/project/report-generator)) membuat keduanya lebih mudah dikembangkan dan dirawat.

> Satu sistem untuk mendefinisikan, menjalankan, dan mengirim report ke seluruh company dalam grup.
