# Ovakavağı Mahallesi - Assets

Bu klasör site görselleri için ayrılmıştır.

## Yapı

- `images/` — Galeri ve içerik görselleri (bkz. [images/README.md](images/README.md))

## Galeri Görsel Sistemi

Galeri bölümü **"önce yerel görsel, yoksa CSS fallback"** mantığıyla çalışır:

1. Her kart için `app.js`, `data-gallery-src` içindeki dosyaları sırayla dener.
2. Görsel bulunursa `<img>` olarak (`object-fit: cover`, lazy-load) eklenir.
3. Görsel yoksa broken image gösterilmez; CSS tabanlı geometrik placeholder kalır.

Sabit `aspect-ratio: 4 / 3` kullanıldığı için görsel durumu ne olursa olsun
layout kayması (CLS) oluşmaz.

## Kartlar

| Kart             | Görsel                          | Fallback                              |
| ---------------- | ------------------------------- | ------------------------------------- |
| Mahalle Yaşamı   | `images/mahalle-yasami.*`       | Cami / mahalle merkezi geometrik glyph |
| Ulaşım Noktaları | —                               | SVG/CSS rota kartı (201 – Ovakavağı)  |
| Eğitim Alanları  | `images/ovakavagi-ilkokulu.*`   | Okul binası geometrik glyph           |

## Önerilen Görsel Boyutları

- Galeri görselleri: 800×600px veya 1200×900px (4:3 aspect ratio)
- Format: WebP (tercih), JPG (yedek), optimize edilmiş
