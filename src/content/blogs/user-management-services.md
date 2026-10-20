---
title: "UMS (User Management Service)"
description: "Layanan user management terpusat via SDK / REST API, terhubung dengan data HR dan HC Digital"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/user-management-services/cover.jpg"
  alt: "UMS (User Management Service)"
pubDate: 2026-03-01
period: "2026"
company: "Erajaya Group"
platform: "Backend Service"
tags: ["golang", "redis", "keycloak", "aws"]
---

## Ringkasan
UMS adalah layanan **user management terpusat**. Aplikasi internal dapat memakainya melalui **SDK** atau **REST API**. UMS terhubung dengan data **HR** dan **HC Digital**, sehingga akun dan role bisa dikelola dari satu tempat.

## Latar Belakang
Setiap aplikasi internal punya tabel user dan role sendiri. Ketika karyawan pindah divisi atau resign, akses di puluhan aplikasi harus diperbarui satu per satu. Proses ini lambat, rawan terlewat, dan berisiko dari sisi keamanan.

## Fitur Utama
- **Akun & role terpusat**: satu sumber kebenaran untuk identitas dan hak akses.
- **SDK & REST API**: aplikasi internal tinggal mengintegrasikan, tanpa membangun ulang.
- **Sinkron dengan HR / HC Digital**: perubahan data karyawan mengalir ke akses aplikasi.
- **Keycloak**: autentikasi berbasis standar.
- **Event-driven**: sinkronisasi melalui AWS SQS, file di AWS S3.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Bahasa | Golang |
| Cache | Redis |
| Identity | Keycloak |
| AWS | S3, SQS |

## Peran Saya
- Membangun service UMS dengan Golang.
- Mengintegrasikan Keycloak, Redis, dan layanan AWS.
- Menyediakan SDK dan REST API untuk aplikasi internal.

## Tantangan & Pembelajaran
UMS menjadi fondasi untuk layanan berikutnya: [Nexus](/project/nexus) memakai UMS untuk memberikan akses, dan UMS juga menjadi pilot project [SRE TaskForce](/project/sre-taskforce) untuk OpenTelemetry.

> Satu identitas, satu tempat mengatur akses, untuk seluruh aplikasi internal.
