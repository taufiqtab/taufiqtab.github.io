---
title: "PPS x Unipin"
description: "Service connector, consumer, dan gateway untuk layanan top up voucher game"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/pps-unipin/cover.jpg"
  alt: "PPS x Unipin"
pubDate: 2026-07-01
period: "2026"
company: "Erajaya Group"
platform: "Backend Service"
tags: ["golang", "redis", "rabbitmq"]
---

## Ringkasan
PPS x Unipin adalah integrasi layanan **top up voucher game**. Pola yang dipakai sama dengan [PPS x Telkomsel](/project/pps-telkomsel): **gateway**, **consumer**, dan **connector** yang dihubungkan oleh **RabbitMQ**.

## Latar Belakang
Gamer ingin top up yang instan. Di sisi sistem, transaksi harus tetap aman, tidak dobel, dan tahan jika provider mengalami gangguan sesaat.

## Fitur Utama
- **Gateway**: menerima dan memvalidasi request top up.
- **Antrian RabbitMQ**: memisahkan penerimaan request dari pemrosesannya.
- **Consumer**: memproses transaksi, status, dan retry.
- **Connector**: adaptor ke layanan provider voucher game.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Bahasa | Golang |
| Message broker | RabbitMQ |
| Cache | Redis |

## Peran Saya
- Membangun service gateway, consumer, dan connector untuk top up voucher game.

## Tantangan & Pembelajaran
Karena polanya sudah terbentuk saat integrasi Telkomsel, pekerjaan di project ini lebih banyak berfokus pada karakteristik provider baru. Inilah manfaat arsitektur yang konsisten.

> Pola yang sama, provider berbeda: integrasi baru jadi jauh lebih cepat.
