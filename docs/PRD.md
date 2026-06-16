[![Ovakavağı Mahallesi, Karatay, Konya](https://images.openai.com/static-rsc-4/BSJqNSR1UlwwFtIK0mDD6JcKxZZBRQmOyuCetlcm0urWP9NBAETGKRdFsLAKFZjqGYoeXXrshw1hiwZyonhuoYp6hn0UCHECL8CNpLl2BgOS-A1EqYRz7Xp_g_XccuycdSaKAwRpkhZ2UBJTljY4iIGFIofHzJ9fD0qZzrTZCyU?purpose=inline)](https://atlasbig.com.tr/ovakavagi-mahallesi-karatay-konya?utm_source=chatgpt.com)

## 1. Ovakavağı sitesi için kritik bilgiler

Aşağıdaki bilgileri tek sayfalık sitede **mutlaka göstermeni** öneririm:

| Bilgi                  | Web sitesinde nasıl kullanılmalı                                                                                                                                                                                                                           |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Yerleşim**           | Ovakavağı Mahallesi, **Karatay / Konya** olarak net geçmeli.                                                                                                                                                                                               |
| **Muhtar bilgisi**     | Karatay Belediyesi kaydına göre muhtar: **Ömer Türkmen**. Aynı sayfada nüfus **2.028** olarak görünüyor. ([Karatay Belediyesi][1])                                                                                                                         |
| **Konum**              | Harita alanında koordinat bazlı gösterim yapılabilir: **37.712201, 32.933496**. ([Yandex][2])                                                                                                                                                              |
| **Posta kodu**         | Ovakavağı Mahallesi için posta kodu **42290** olarak listeleniyor. Final yayında PTT sorgusuyla tekrar teyit etmeni öneririm. ([Türkiye Posta Kodları][3])                                                                                                 |
| **Ulaşım**             | Konya ATUS tarafında **201 - Ovakavağı** hattı görünüyor. Siteye “Toplu Ulaşım” bölümü eklenebilir. ([atus.konya.bel.tr][4])                                                                                                                               |
| **Eğitim**             | **Ovakavağı İlkokulu** bilgisi eklenebilir. MEB kaydında adres: “Ovakavağı Mah. 22401. Sk. No:7 Karatay / Konya”, telefon: **0332 389 50 50**. ([ovakavagiioo.meb.k12.tr][5])                                                                              |
| **Sağlık**             | Karatay Belediyesi açıklamasına göre mahalleye yeni **Aile Sağlığı Merkezi** kazandırılıyor; proje Karatay Belediyesi, Konya İl Sağlık Müdürlüğü ve Ovakavağı Kültür Yardımlaşma ve Dayanışma Derneği iş birliğiyle yürütülüyor. ([Karatay Belediyesi][6]) |
| **Belediye iletişimi** | Karatay Belediyesi genel iletişim bilgisi: **444 9 332**, e-posta: **[iletisim@karatay.bel.tr](mailto:iletisim@karatay.bel.tr)**, WhatsApp: **0532 323 40 30**. ([Karatay Belediyesi][7])                                                                  |
| **Tarihçe notu**       | Eski kaynaklarda Ovakavağı’nın 1986’da belde statüsü aldığı, 6360 sayılı düzenleme sonrası mahalle olduğu bilgisi geçiyor. Bunu kullanacaksan “kısa tarihçe” olarak ver; resmi kaynakla ayrıca teyit etmek iyi olur. ([Vikipedi][8])                       |

---

## 2. Tek sayfalık site yapısı

En mantıklı yapı şu olur:

```text
Hero
↓
Kısa Tanıtım
↓
Hızlı Bilgiler
↓
Mahalle Hizmetleri
↓
Ulaşım & Harita
↓
Duyurular / Güncel Gelişmeler
↓
Fotoğraf Alanı
↓
İletişim / Faydalı Linkler
```

### Önerilen içerik akışı

#### 1. Hero alanı

Başlık önerisi:

> **Ovakavağı Mahallesi**
> Karatay’ın köklü yerleşimlerinden biri

Alt metin:

> Konya Karatay’a bağlı Ovakavağı Mahallesi için ulaşım, muhtarlık, eğitim, sağlık ve güncel bilgilere tek sayfadan erişin.

CTA butonları:

* **Konumu Gör**
* **Muhtarlık Bilgileri**
* **Ulaşım Bilgileri**

---

#### 2. Hızlı bilgi kartları

Mobilde 2 kolon, desktopta 4 kolon olabilir.

Kartlar:

* **İlçe:** Karatay
* **İl:** Konya
* **Nüfus:** 2.028
* **Muhtar:** Ömer Türkmen
* **Posta Kodu:** 42290
* **Otobüs Hattı:** 201 - Ovakavağı
* **Koordinat:** 37.712201, 32.933496
* **Plaka:** 42

---

#### 3. Mahalle hizmetleri

Bu bölümde “belediye sitesi gibi ağır” değil, sade bilgi verilmeli.

Kartlar:

* **Muhtarlık**
* **Ovakavağı İlkokulu**
* **Aile Sağlığı Merkezi**
* **Toplu Ulaşım**
* **Belediye İletişimi**
* **Harita / Yol Tarifi**

---

#### 4. Güncel gelişmeler

Tek sayfalık sitede dinamik blog şart değil. Basit “Öne çıkan gelişme” alanı yeterli.

Örnek:

> **Yeni Aile Sağlığı Merkezi çalışmaları devam ediyor**
> Ovakavağı Mahallesi’nde sağlık hizmetlerinin daha modern şartlarda sunulması için yeni Aile Sağlığı Merkezi projesi yürütülüyor.

---

#### 5. Harita bölümü

Burada gömülü Google Maps / OpenStreetMap iframe kullanılabilir.

Mobilde dikkat:

* Harita yüksekliği: `320px`
* Buton: **Google Haritalar’da Aç**
* Haritanın üstünde kısa adres:
  **Ovakavağı Mahallesi, Karatay / Konya**

---

## 3. Tasarım alternatifleri

### Alternatif 1 — **Modern Yerel Portal / Bento Grid**

Bence en doğru seçenek bu.

**Karakter:**

* Kart tabanlı yapı
* Büyük hero alanı
* Bilgi kartları
* Harita kartı
* Mobilde çok okunabilir
* Belediye sitesi havasına düşmeden modern görünür

**Uygun renk paleti:**

```text
Arka plan: #F7F3EA
Ana metin: #1F2933
Vurgu: #2F6F4E
İkincil vurgu: #C89B3C
Kart arka planı: #FFFFFF
Border: #E5DED2
```

**Neden uygun?**

Ovakavağı gibi mahalle sitesinde kullanıcı hızlı bilgi arar: konum, muhtar, ulaşım, okul, sağlık, iletişim. Bento grid bu bilgileri kısa ve net verir.

---

### Alternatif 2 — **Editorial Minimal / Belgesel Tarzı**

Daha sakin, daha prestijli bir görünüm verir.

**Karakter:**

* Büyük tipografi
* Bol boşluk
* Mahalle fotoğrafları
* Kısa tarihçe
* Az renk, güçlü metin

**Uygun renk paleti:**

```text
Arka plan: #FAFAF7
Ana metin: #181818
Vurgu: #7A5C38
İkincil: #E8E1D5
```

**Nerede iyi olur?**

Site “tanıtım / kültürel hafıza / mahalle kimliği” odaklı olacaksa iyi çalışır. Ama bilgiye hızlı erişim açısından Bento kadar güçlü değil.

---

### Alternatif 3 — **Map-first Local Guide**

Konum ve ulaşım öncelikliyse kullanılabilir.

**Karakter:**

* Hero içinde harita
* Konum kartları
* “Nasıl giderim?” odaklı akış
* Toplu taşıma, okul, sağlık, belediye bağlantıları öne çıkar

**Uygun renk paleti:**

```text
Arka plan: #EEF2EF
Ana metin: #17201A
Vurgu: #356859
Aksiyon: #D97706
```

**Risk:**

Harita çok baskın olursa site “mahalle tanıtım sitesi” yerine “adres sayfası” gibi algılanabilir.

---

## 4. Benim önerim

**Bento Grid + Yerel Portal** tasarımını seçerdim.

Çünkü:

* Tek sayfa için en verimli yapı.
* Mobilde kolay okunur.
* Kritik bilgileri kartlarla net verir.
* Hero + hızlı bilgiler + harita + iletişim akışı sade olur.
* Sonradan duyuru, galeri, muhtarlık bilgileri eklemek kolaydır.

---

## 5. Sayfa wireframe önerisi

```text
[Header]
Logo: Ovakavağı
Menü: Bilgiler | Hizmetler | Ulaşım | İletişim

[Hero]
Ovakavağı Mahallesi
Karatay / Konya
Konumu Gör | İletişim Bilgileri

[Quick Facts]
Nüfus | Muhtar | Posta Kodu | Otobüs Hattı

[About]
Kısa mahalle tanıtımı

[Services]
Muhtarlık
İlkokul
Aile Sağlığı Merkezi
Toplu Ulaşım
Belediye İletişimi

[Map]
Harita + Google Maps’te Aç butonu

[Updates]
Yeni Aile Sağlığı Merkezi
Ulaşım bilgileri
Belediye duyuruları

[Gallery]
3-6 görsel alanı

[Footer]
Karatay Belediyesi
ATUS
MEB Okul Linki
İletişim
```

---

## 6. SEO için hedef kelimeler

Sitede doğal şekilde geçmeli:

```text
Ovakavağı Mahallesi
Ovakavağı Karatay
Ovakavağı Konya
Karatay Ovakavağı Mahallesi
Ovakavağı Muhtarlığı
Ovakavağı ulaşım
Ovakavağı İlkokulu
Ovakavağı Aile Sağlığı Merkezi
```

SEO title önerisi:

```text
Ovakavağı Mahallesi | Karatay Konya Bilgi ve Ulaşım Rehberi
```

Meta description:

```text
Konya Karatay Ovakavağı Mahallesi hakkında muhtarlık, nüfus, ulaşım, okul, sağlık merkezi, harita ve iletişim bilgilerine tek sayfadan ulaşın.
```

---

## 7. Son karar

Bu site için en doğru yaklaşım:

> **Modern, kart tabanlı, mobile-first, tek sayfalık mahalle tanıtım ve bilgi rehberi.**

Tasarım dili:

> **Bento Grid + sıcak yerel renkler + sade tipografi + güçlü harita entegrasyonu.**

[1]: https://www.karatay.bel.tr/muhtarlarimiz?utm_source=chatgpt.com "Muhtarlarımız"
[2]: https://yandex.com.tr/maps/101474/konya/geo/ovakavagi_mah_/2215946874/?utm_source=chatgpt.com "Ovakavağı Mah. — harita, nasıl gidilir, koordinatlar"
[3]: https://postakod.com.tr/il/konya/karatay/karatay/ovakavagi-mahallesi?utm_source=chatgpt.com "Ovakavağı Mahallesi Posta Kodu | Karatay, Konya"
[4]: https://atus.konya.bel.tr/?utm_source=chatgpt.com "ATUS - Akıllı Toplu Ulaşım Sistemleri"
[5]: https://ovakavagiioo.meb.k12.tr/?utm_source=chatgpt.com "KONYA / KARATAY - Ovakavağı İlkokulu"
[6]: https://www.karatay.bel.tr/haberdetay/6113/ovakavagi-mahallesine-yeni-saglik-merkezi?utm_source=chatgpt.com "Ovakavağı Mahallesi'ne Yeni Sağlık Merkezi"
[7]: https://www.karatay.bel.tr/iletisim?utm_source=chatgpt.com "İletişim"
[8]: https://tr.wikipedia.org/wiki/Ovakava%C4%9F%C4%B1%2C_Karatay?utm_source=chatgpt.com "Ovakavağı, Karatay"

