# Galeri Görselleri

Galeri kartları **"önce yerel görsel, yoksa CSS geometrik fallback"** mantığıyla
çalışır. Bu klasöre aşağıdaki dosyalar eklendiğinde otomatik olarak yüklenir;
dosya yoksa broken image gösterilmez, CSS tabanlı geometrik placeholder devreye
girer.

## Beklenen Dosyalar

| Kart            | Dosya adı (öncelik sırası)                            | Konsept                                          |
| --------------- | ----------------------------------------------------- | ------------------------------------------------ |
| Mahalle Yaşamı  | `mahalle-yasami.webp` → `mahalle-yasami.jpg`          | Osmanlı Alemdar Cami / mahalle merkezi görünümü  |
| Eğitim Alanları | `ovakavagi-ilkokulu.webp` → `ovakavagi-ilkokulu.jpg`  | Ovakavağı İlkokulu dış cephe görünümü            |

> **Ulaşım Noktaları** kartı fotoğraf kullanmaz; SVG/CSS ile tasarlanmış bir rota
> kartıdır (201 – Ovakavağı hattı, Karatay / Konya, koordinatlar).

## Görsel Spesifikasyonları

- En-boy oranı: **4:3** (örn. 800×600, 1200×900)
- Format: **WebP** tercih edilir, `.jpg` yedek olarak desteklenir
- Optimize edilmiş, ~200 KB altı önerilir
- `object-fit: cover` ile kırpılır; merkez kompozisyon önerilir

## Nasıl Çalışır

`app.js` her kart için `data-gallery-src` listesindeki adayları sırayla dener.
İlk yüklenen görsel `<img>` olarak enjekte edilir (`object-fit: cover`,
lazy-load). Hiçbiri yüklenemezse CSS geometrik fallback görünür kalır. Sabit
`aspect-ratio: 4 / 3` sayesinde görsel yüklense de yüklenmese de layout kayması
(CLS) oluşmaz.
