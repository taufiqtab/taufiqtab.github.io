---
title: "Nexus"
description: "Portal self-service untuk request akses aplikasi dan approval management"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/nexus/cover.jpg"
  alt: "Nexus"
pubDate: 2026-04-01
period: "2026"
company: "Erajaya Group"
platform: "Web Portal"
tags: ["golang", "redis"]
---

## Ringkasan
Nexus adalah **portal self-service** tempat karyawan meminta akses aplikasi. Nexus terhubung ke [UMS](/project/user-management-services) untuk pemberian akses dan ke [Workflow Management Services](/project/workflow-management-services) untuk approval management.

## Latar Belakang
Meminta akses aplikasi biasanya melalui email berantai: ke atasan, ke tim IT, lalu ke admin aplikasi. Statusnya sulit dilacak dan tidak ada jejak audit yang rapi.

## Fitur Utama
- **Katalog aplikasi**: karyawan melihat aplikasi yang tersedia dan status aksesnya.
- **Request akses**: pengajuan dibuat dalam beberapa klik.
- **Approval management**: persetujuan berjenjang melalui Workflow Management Services.
- **Provisioning otomatis**: akses diberikan melalui UMS setelah disetujui.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Bahasa | Golang |
| Cache | Redis |
| Integrasi | UMS, Workflow Management Services |

## Peran Saya
- Membangun portal Nexus dan integrasinya dengan UMS serta Workflow Management Services.

## Tantangan & Pembelajaran
Nexus menunjukkan manfaat membangun layanan sebagai building block. Karena UMS dan Workflow sudah tersedia, Nexus cukup fokus pada pengalaman pengguna.

> Request akses aplikasi tanpa email berantai: ajukan, pantau, dan akses diberikan otomatis.
