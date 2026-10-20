---
title: "PPS x Telkomsel"
description: "Connector, consumer, dan gateway untuk transaksi pembelian voucher dan pulsa Telkomsel"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/pps-telkomsel/cover.jpg"
  alt: "PPS x Telkomsel"
pubDate: 2026-06-01
period: "2026"
company: "Erajaya Group"
platform: "Backend Service"
tags: ["golang", "redis", "rabbitmq"]
---

## Ringkasan
PPS x Telkomsel adalah integrasi layanan transaksi pembelian **voucher dan pulsa Telkomsel**. Saya membangun **gateway**, **consumer**, dan **connector**, lalu menghubungkannya melalui message broker **RabbitMQ**.

## Latar Belakang
Transaksi pulsa dan voucher adalah transaksi finansial bervolume tinggi. Setiap request harus diproses tepat satu kali, tahan terhadap provider yang lambat, dan statusnya harus jelas.

## Fitur Utama
- **Gateway**: pintu masuk transaksi: validasi dan pencegahan request ganda.
- **Antrian RabbitMQ**: transaksi diproses secara asinkron dan tahan terhadap lonjakan.
- **Consumer**: memproses order dan mengelola status transaksi.
- **Connector**: adaptor ke layanan provider.
- **Redis**: cache dan pendukung idempotency.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Bahasa | Golang |
| Message broker | RabbitMQ |
| Cache | Redis |
| Pola | Gateway → Queue → Consumer → Connector |

## Peran Saya
- Membangun gateway, consumer, dan connector dengan Golang.
- Merancang alur asinkron berbasis RabbitMQ.

## Tantangan & Pembelajaran
Arsitektur gateway, queue, consumer, dan connector membuat integrasi provider baru lebih mudah. Pola yang sama langsung dipakai lagi untuk [PPS x Unipin](/project/pps-unipin).

> Transaksi pulsa diproses secara asinkron, aman dari request ganda, dan statusnya jelas.
