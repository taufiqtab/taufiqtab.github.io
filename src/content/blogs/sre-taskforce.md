---
title: "SRE TaskForce"
description: "Pilot SRE lintas divisi: OpenTelemetry untuk UMS, implementasi Truewatch, serta pembentukan SLI, SLO, dan SLA"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/sre-taskforce/cover.jpg"
  alt: "SRE TaskForce"
pubDate: 2026-08-01
period: "2026"
company: "Erajaya Group"
platform: "Implementation · Reliability"
tags: ["opentelemetry", "truewatch", "sre", "observability"]
---

## Ringkasan
SRE TaskForce adalah kelanjutan dari [DevOps TaskForce](/project/devops-taskforce). Setelah mengikuti training dari **NaradaCode**, saya bergabung dengan tim taskforce dari berbagai divisi untuk menjalankan **piloting project**. Pekerjaannya meliputi implementasi **OpenTelemetry** dengan [UMS](/project/user-management-services) sebagai pilot, implementasi **Truewatch**, dan pembentukan **SLI, SLO, dan SLA** untuk setiap pilot project.

## Latar Belakang
Tanpa observability, tim baru tahu ada masalah setelah pengguna mengeluh. Tanpa SLI dan SLO, kata "stabil" tidak memiliki ukuran yang jelas dan sulit disepakati bersama.

## Fitur Utama
- **OpenTelemetry**: trace, metric, dan log dari UMS sebagai pilot project.
- **Truewatch**: platform observability untuk memantau layanan.
- **SLI**: menentukan indikator yang benar-benar diukur.
- **SLO**: menetapkan target reliabilitas.
- **SLA**: menyusun komitmen layanan untuk setiap pilot project.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Instrumentasi | OpenTelemetry |
| Observability | Truewatch |
| Praktik | SLI / SLO / SLA |
| Pilot | UMS |

## Peran Saya
- Mengikuti training SRE dari NaradaCode.
- Mengimplementasikan OpenTelemetry pada UMS sebagai pilot.
- Mengimplementasikan Truewatch.
- Terlibat dalam penyusunan SLI, SLO, dan SLA untuk setiap pilot project.

## Tantangan & Pembelajaran
Reliabilitas dimulai dari kesepakatan tentang apa yang diukur. Memakai UMS, layanan yang saya bangun sendiri, sebagai pilot memberi umpan balik langsung tentang cara menulis service yang mudah diamati.

> Ukur dulu, baru janjikan: dari telemetri ke SLI, SLO, dan SLA.
