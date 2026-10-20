---
title: "Workflow Management Services"
description: "Layanan approval terpusat dengan designer drag & drop, terhubung data HR / HC Digital, bisa headless"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/workflow-management-services/cover.jpg"
  alt: "Workflow Management Services"
pubDate: 2026-02-01
period: "2026"
company: "Erajaya Group"
platform: "Backend Service"
tags: ["golang", "redis"]
---

## Ringkasan
Workflow Management Services adalah layanan terpusat untuk membuat **alur approval atau request**. Alur didesain dengan **drag & drop**, approver ditentukan dari data **HR / HC Digital**, dan layanan ini bisa dipakai oleh aplikasi pihak ketiga atau secara **headless** tanpa aplikasi.

## Latar Belakang
Hampir setiap aplikasi internal butuh approval, dan biasanya setiap aplikasi membangunnya sendiri dengan aturan yang di-hardcode. Ketika struktur organisasi berubah, semua aplikasi itu harus diubah juga.

## Fitur Utama
- **Designer drag & drop**: alur approval dirancang secara visual.
- **Dynamic approval**: approver ditentukan dari struktur organisasi di HR / HC Digital.
- **Untuk 3rd party application**: aplikasi lain cukup memanggil API.
- **Mode headless**: approval berjalan tanpa harus membangun UI aplikasi.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Bahasa | Golang |
| Cache / state | Redis |
| Integrasi | HR / HC Digital |

## Peran Saya
- Membangun workflow engine dan API dengan Golang.
- Mengintegrasikan data HR / HC Digital untuk dynamic approval.

## Tantangan & Pembelajaran
Memisahkan aturan approval dari kode aplikasi berarti perubahan proses bisnis tidak perlu menunggu deployment. Layanan ini kemudian dipakai oleh [Nexus](/project/nexus) untuk approval request akses.

> Alur approval dirancang lewat drag & drop, bukan di-hardcode di setiap aplikasi.
