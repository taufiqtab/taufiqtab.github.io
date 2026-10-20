---
title: "RIFOS"
description: "Frontstore app JD Sports Indonesia: cek stok & harga realtime, layar antrian, dan cetak label harga"
author: "Taufiq Abdullah"
image:
  url: "../../assets/images/projects/rifos/cover.jpg"
  alt: "RIFOS"
pubDate: 2023-06-01
period: "2023"
company: "JD Sports Indonesia"
platform: "Web App + Service"
tags: ["laravel", "websocket", "rust", "docker", "aws"]
---

## Ringkasan
RIFOS adalah aplikasi **frontstore** untuk **JD Sports Indonesia**. Staf toko dapat mengecek **stok dan harga secara realtime**, menampilkan nomor **antrian ke layar** di toko, dan **mencetak label harga**. Di belakangnya, sebuah service **Rust** mengimpor data dari SAP, sementara aplikasi berjalan di AWS dengan **autoscale** dan **Docker**.

## Latar Belakang
Di toko retail, pelanggan ingin jawaban cepat: ukurannya ada atau tidak, harganya berapa. Data stok dan harga berasal dari SAP dengan volume besar, sehingga proses impor harus cepat dan tampilan di toko harus selalu up to date.

## Fitur Utama
- **Cek stok & harga realtime**: staf toko mendapatkan informasi terbaru langsung dari perangkat.
- **Layar antrian**: nomor antrian tampil di layar toko melalui WebSocket.
- **Cetak label harga**: label harga dicetak langsung dari aplikasi.
- **Import data dari SAP**: service Rust untuk impor data yang cepat dan efisien.
- **Autoscale di AWS**: kapasitas menyesuaikan beban secara otomatis.

## Teknologi
| Bagian | Teknologi |
| --- | --- |
| Aplikasi | Laravel |
| Realtime | WebSocket |
| Data import | Rust service dari SAP |
| Infra | AWS, Docker, autoscale |

## Peran Saya
- Mengembangkan aplikasi frontstore dan fitur realtime berbasis WebSocket.
- Membangun service import data dari SAP menggunakan Rust.
- Menyiapkan containerization dan deployment autoscale di AWS.

## Tantangan & Pembelajaran
RIFOS adalah project yang paling banyak menggabungkan teknologi. Setiap bagian dipilih karena kebutuhannya: Laravel untuk produktivitas, WebSocket untuk realtime, Rust untuk proses impor yang berat, dan AWS autoscale untuk beban toko yang naik turun.

> Dari SAP ke layar toko dalam hitungan detik, dibantu Rust di belakangnya.
