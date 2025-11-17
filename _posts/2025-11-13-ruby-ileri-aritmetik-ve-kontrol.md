---
layout: post
title: "Ruby İleri Aritmetik ve Koşullu Kontrol Yapıları1"
subtitle: "Değişkenler, Sayısal İşlemler ve Karar Mekanizmaları."
excerpt: "Bu not, Ruby'deki aritmetik operatörleri (üstel, modüler) derinlemesine incelemekte ve ardından temel karar mekanizmaları olan 'if/else' ve 'case' yapılarını detaylandırmaktadır."
date: 2025-11-13 18:00:00 +0300
categories: [DB, Python]
tags: [Temel, Python, aritmetik, kontrol-yapıları]
---

## 1. Sayısal Veri Tipleri ve Aritmetik İşlemler

Ruby'de temel matematiksel işlemler oldukça sezgiseldir, ancak tamsayı (Integer) bölmesi gibi özel durumlar dikkat gerektirir.

### 1.1 Tamsayı ve Ondalıklı Sayılar

Ruby, bir sayıyı otomatik olarak ya **Integer** (tam sayı) ya da **Float** (ondalıklı sayı) olarak algılar.

```ruby
puts 10.class
puts 10.5.class
```
> **DİKKAT!**Ruby'de iki Integer'ı bölerseniz, sonuç her zaman Integer olur ve ondalık kısım atılır (yuvarlama yapılmaz). Örneğin, 9 / 4 işleminin sonucu 2 olacaktır.

Ondalıklı sonuç almak için, işlemdeki sayılardan en az birinin Float olması gerekir:

```ruby

puts 9 / 4    # => 2
puts 9.0 / 4  # => 2.25
```
1.2. Üstel ve Modüler Aritmetik
Üstel hesaplamalar için ** operatörü, kalan (mod) hesaplamaları için ise % operatörü kullanılır.

```ruby

puts 2 ** 3    # 2'nin 3. kuvveti = 8
puts 10 % 3    # 10'un 3'e bölümünden kalan = 1
```
2. Karar Mekanizmaları (Koşullu İfadeler)
Koşullu ifadeler, program akışının belirli şartlara göre yönlendirilmesini sağlar.

2.1. Temel if/else Yapısı
En temel koşul yapısı if, elsif ve else bloklarından oluşur.

```ruby

hava = "güneşli"

if hava == "yağmurlu"
  puts "Şemsiye al."
elsif hava == "karlı"
  puts "Kaban giy."
else
  puts "Hava güzel."
end
# Çıktı: Hava güzel.
```
2.2. Tek Satırlık if (Modifier Formu)
Eğer sadece tek bir ifadeyi koşula bağlayacaksanız, if ifadesini sondan başa yazabilirsiniz.

```ruby

yas = 20
puts "Oy kullanabilir." if yas >= 18
```
>**İPUCU!** Kod okunaklığını artırmak için, kısa ve basit koşullar için Modifier Form'u kullanmayı tercih edin.

2.3. unless İfadesi
unless ifadesi, koşul yanlış olduğunda çalışır. Yani if not ile aynıdır.

```ruby

para_var_mi = false
unless para_var_mi
  puts "Kredi çek!"
end
# Çıktı: Kredi çek!
```
3. Çoklu Koşullar: case Yapısı
case ifadesi, birçok farklı koşulu (çoklu if/elsif zincirleri) daha düzenli ve temiz bir şekilde kontrol etmenin yoludur. Diğer dillerdeki switch yapısına benzer.

```ruby

durum = "başarılı"

case durum
when "hata"
  puts "Sistem hatası oluştu."
when "başarılı"
  puts "İşlem tamamlandı!"
when "beklemede"
  puts "Lütfen bekleyin."
else
  puts "Bilinmeyen durum."
end
# Çıktı: İşlem tamamlandı!
```
>**ÖNEMLİ!** case yapısında when ifadeleri ilk eşleşmeyi bulur bulmaz durur. Bu nedenle en spesifik durumları listenin en üstüne koymak en iyi pratik kabul edilir.

4. Özet ve Uygulama
Bu derste Ruby'nin sayısal özelliklerini ve program akışını kontrol eden temel yapıları öğrendik.


```ruby
sayi1 = 5
sayi2 = 10
sonuc = 0

if sayi1 % 2 == 0
  puts "sayi1 çift."
else
  puts "sayi1 tek."
  sonuc = sayi1 * 2
end
puts "Sonuç: #{sonuc}" 
# Çıktı: Sonuç: 10
```

> **BİLGİ!** Ruby'de if ve unless ifadeleri otomatik olarak bir değer döndürür. Bu, onları daha esnek hale getirir ve değerleri doğrudan bir değişkene atamak için kullanılabilir.